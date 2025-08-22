from fastapi import APIRouter
from services.chat_service import graph
from fastapi.responses import StreamingResponse
import json

router = APIRouter()

@router.get("/chat")
async def chat(question: str):
	result = graph.invoke({"question": question})

	return { "answer": result['answer'] }

@router.get(
  "/chat-stream",
  response_class=StreamingResponse,
  responses={200: {"content": {"text/event-stream": {}}}}
)
async def chat_stream(question: str):
	def event_generator():
		try:
			for message, metadata in graph.stream({"question": question}, stream_mode="messages"):
				yield f"data: {json.dumps(message.content)}\n\n"
			yield f"data: {json.dumps('[DONE]')}\n\n"
		except Exception as e:
			yield f"data: {json.dumps(message.content)}\n\n"
		finally:
			yield f"data: {json.dumps('[DONE]')}\n\n"

	return StreamingResponse(event_generator(), media_type="text/event-stream")