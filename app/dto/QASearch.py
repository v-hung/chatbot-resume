# from typing import Literal
from typing_extensions import Annotated, TypedDict

class QASearch(TypedDict):
	"""Search query."""
	query: Annotated[str, ..., "English search query to run."]
	# section: Annotated[
	# 	Literal["beginning", "middle", "end"],
	# 	...,
	# 	"Section to query.",
	# ]