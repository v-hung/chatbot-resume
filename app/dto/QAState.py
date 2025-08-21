from langchain_core.documents import Document
from typing_extensions import List, TypedDict
from dto.QASearch import QASearch

class QAState(TypedDict):
  question: str
  query: QASearch
  context: List[Document]
  answer: str
