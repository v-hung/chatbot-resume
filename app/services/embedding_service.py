from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.document_loaders import PyPDFLoader
from configs import STATIC_DIR, BASE_DIR
from langchain_text_splitters import RecursiveCharacterTextSplitter
import os
from langchain_chroma import Chroma

embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")

db_name = BASE_DIR / "vector_db"

file_path = STATIC_DIR / "Nguyen VIet Hung - Fullstack Developer (English)_CV_topdev.vn.pdf"

def create_db_from_file():
	loader = PyPDFLoader(file_path)
	documents = loader.load()

	text_splitter = RecursiveCharacterTextSplitter(
		chunk_size = 512,
		chunk_overlap=50,
		separators=[",", ".", "\n", " "]
	)

	chunks = text_splitter.split_documents(documents)

	if os.path.exists(db_name):
		Chroma(persist_directory=db_name, embedding_function=embeddings).	delete_collection()
	
	vector_store = Chroma.from_documents(
	  documents=chunks,
	  embedding=embeddings,
	  persist_directory=db_name
	)

	return vector_store

def load_db():
	vector_store = Chroma(
	  embedding_function=embeddings,
	  persist_directory=db_name
	)

	return vector_store