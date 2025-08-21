import os
from configs import GOOGLE_API_KEY
from langchain.chat_models import init_chat_model
from langchain_core.prompts import PromptTemplate
from dto.QAState import QAState
from dto.QASearch import QASearch
from services.embedding_service import load_db
from langgraph.graph import START, StateGraph

if not os.environ.get("GOOGLE_API_KEY"):
  os.environ["GOOGLE_API_KEY"] = GOOGLE_API_KEY

llm = init_chat_model("gemini-2.5-flash", model_provider="google_genai")

template = """You are an assistant that answers questions based only on the provided CV content.

Use the following pieces of context to answer the question at the end.
If the information is not in the CV, just say you don't know.
Answer in the same language as the question.
Be concise and clear. Use at most three sentences.

{context}

Question: {question}

Answer:"""
prompt = PromptTemplate.from_template(template)

vector_store = load_db()

def analyze_query(state: dict):
	structured_llm = llm.with_structured_output(QASearch)
	query = structured_llm.invoke({
		"question": state["question"],
		"instruction": """
		- If the input is not in English, translate it into English.
		- Normalize the question to make it short and concise (keyword-style).
		- Ensure the output 'query' is in English for vector search.
		"""
	})
	return {"query": query}

def retrieve(state: QAState):
  retrieved_docs = vector_store.similarity_search(state["query"])
  return {"context": retrieved_docs}

def generate(state: QAState):
  docs_content = "\n\n".join(doc.page_content for doc in state["context"])
  messages = prompt.invoke({"question": state["question"], "context":docs_content})
  response = llm.invoke(messages)
  return {"answer": response.content}

graph_builder = StateGraph(QAState).add_sequence([analyze_query, retrieve, generate])
graph_builder.add_edge(START, "analyze_query")
graph = graph_builder.compile()
