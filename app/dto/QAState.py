from langchain_core.documents import Document
from typing_extensions import List, TypedDict

class QAState(TypedDict):
  question: str
  context: List[Document]
  answer: str
