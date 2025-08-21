# from typing import Literal
from typing_extensions import Annotated, TypedDict

class Search(TypedDict):
	"""Search query."""
	query: Annotated[str, ..., "English search query (translated & normalized)."]
	# section: Annotated[
	# 	Literal["beginning", "middle", "end"],
	# 	...,
	# 	"Section to query.",
	# ]