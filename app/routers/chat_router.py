from fastapi import APIRouter
from services.chat_service import graph
from fastapi.responses import StreamingResponse

router = APIRouter()

@router.post("/chat")
async def chat(message: str):
	result = graph.invoke({"question": message})

	return { "answer": result['answer'] }

@router.post("/chat-stream")
async def chat_stream(message: str):
	def event_generator():
		for step in graph.stream({"question": message}, stream_mode="updates"):
			if step['answer']:
				yield f"data: {step['answer']}\n\n"
		yield "data: [DONE]\n\n"

	return StreamingResponse(event_generator(), media_type="text/event-stream")