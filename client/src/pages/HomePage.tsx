import { nanoid } from "nanoid";
import { useEffect, useRef, useState, type FormEvent } from "react";

type ChatItem = {
	id: string;
	me: boolean;
	content: string;
};

export function Component() {
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState<ChatItem[]>([]);
	const [loading, setLoading] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	const handleSubmit = async () => {
		let question = input;
		if (question == "") return;

		setMessages((state) => [
			...state,
			{
				id: nanoid(),
				me: true,
				content: question,
			},
		]);

		setInput("");

		try {
			setLoading(true);

			const evtSource = new EventSource(
				`/api/chat-stream?question=${encodeURIComponent(question)}`,
			);

			evtSource.onmessage = (event) => {
				setLoading(false);
				const data = JSON.parse(event.data);

				if (data === "[DONE]") {
					evtSource.close();
				} else {
					setMessages((prev) => [
						...prev,
						{ id: nanoid(), content: data, me: false },
					]);
				}
			};
		} catch (error) {
			console.log(error);
			setMessages((state) => [
				...state,
				{
					id: nanoid(),
					me: false,
					content: "Something is wrong!",
				},
			]);
			setLoading(false);
		}
	};

	useEffect(() => {
		if (containerRef.current) {
			containerRef.current.scrollTop = containerRef.current.scrollHeight;
		}
	}, [messages]);

	return (
		<div className="flex flex-1 flex-col">
			<div
				ref={containerRef}
				className="min-h-0 flex-1 overflow-y-auto px-6 pb-4"
			>
				<div className="mx-auto flex min-h-full w-full max-w-3xl flex-col gap-y-4">
					<div className="flex flex-1 items-center justify-center">
						{messages.length == 0 && !loading ? (
							<p className="max-w-sm font-semibold">
								Ask me anything you want to know!
							</p>
						) : null}
					</div>

					{messages.map((v) => (
						<div
							key={v.id}
							className={
								v.me
									? "max-w-[70%] self-end rounded-2xl bg-gray-100 px-3 py-2 text-justify whitespace-pre-wrap"
									: "text-justify"
							}
						>
							{v.content}
						</div>
					))}

					{loading && <div className="text-gray-500 italic">loading...</div>}
				</div>
			</div>

			<div className="flex-none px-6 pb-4">
				<div className="mx-auto max-w-lg">
					<div className="flex h-14 w-full items-center gap-2 rounded-full border border-gray-300 px-2">
						<span className="grid size-10 cursor-pointer place-items-center rounded-full hover:bg-gray-200">
							<IIonHelp />
						</span>
						<input
							type="text"
							className="min-h-0 flex-1 py-2 focus:outline-0"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									e.preventDefault();
									handleSubmit();
								}
							}}
						/>
						<span
							className={`grid size-10 cursor-pointer place-items-center rounded-full bg-gray-900 text-white hover:bg-gray-700 ${input != "" ? "cursor-pointer" : "pointer-events-none cursor-none !bg-gray-600"}`}
							onClick={handleSubmit}
						>
							<IIonArrowUp />
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
