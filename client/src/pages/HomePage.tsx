import { useEffect, useRef, useState, type WheelEvent } from "react";

export function Component() {
	const [scale, setScale] = useState<number>(1);

	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const handleWheel = (event: Event) => {
			let e = event as unknown as WheelEvent<HTMLDivElement>;

			if (e.ctrlKey) {
				e.preventDefault();

				if (e.deltaY < 0) {
					setScale((prev) => Math.min(prev + 0.1, 3));
				} else {
					setScale((prev) => Math.max(prev - 0.1, 1));
				}
			}
		};

		container.addEventListener("wheel", handleWheel, { passive: false });

		return () => {
			container.removeEventListener("wheel", handleWheel);
		};
	}, []);

	return (
		<div className="flex h-dvh">
			<div
				className="relative h-full w-1/3 overflow-auto border-r border-gray-200 bg-[#f9f9f9] p-6"
				ref={containerRef}
			>
				<img
					src="./cv2_min.png"
					alt="cv"
					className="origin-top-left rounded"
					loading="lazy"
					style={{
						transform: `scale(${scale})`,
						transition: "transform 0.1s linear ",
					}}
				/>

				<a
					href="./Nguyen VIet Hung - Fullstack Developer (English)_CV_topdev.vn.pdf"
					download={true}
					className="absolute top-4 right-4 size-10 rounded bg-gray-200 p-2 hover:bg-gray-300"
				>
					<IIonCloudDownloadOutline />
				</a>
			</div>

			<div className="flex flex-1 flex-col">
				<div className="min-h-0 flex-1 overflow-y-auto px-6 pb-4">
					<div className="mx-auto flex min-h-full w-full max-w-3xl flex-col-reverse gap-y-4">
						<div className="max-w-[70%] self-end rounded-2xl bg-gray-100 px-3 py-2 text-justify whitespace-pre-wrap">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi
							expedita, ad, officiis ipsum laudantium error perspiciatis nihil
							nostrum earum dolorem alias possimus eveniet consequuntur optio
							corrupti facere beatae consectetur.
						</div>
						<div className="text-justify">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi
							expedita, ad, officiis ipsum laudantium error perspiciatis nihil
							nostrum earum dolorem alias possimus eveniet consequuntur optio
							corrupti facere beatae consectetur.
						</div>
						<div className="max-w-[70%] self-end rounded-2xl bg-gray-100 px-3 py-2 text-justify whitespace-pre-wrap">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi
							expedita, ad, officiis ipsum laudantium error perspiciatis nihil
							nostrum earum dolorem alias possimus eveniet consequuntur optio
							corrupti facere beatae consectetur.
						</div>
						<div className="text-justify">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi
							expedita, ad, officiis ipsum laudantium error perspiciatis nihil
							nostrum earum dolorem alias possimus eveniet consequuntur optio
							corrupti facere beatae consectetur.
						</div>
						<div className="max-w-[70%] self-end rounded-2xl bg-gray-100 px-3 py-2 text-justify whitespace-pre-wrap">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi
							expedita, ad, officiis ipsum laudantium error perspiciatis nihil
							nostrum earum dolorem alias possimus eveniet consequuntur optio
							corrupti facere beatae consectetur.
						</div>
						<div className="text-justify">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi
							expedita, ad, officiis ipsum laudantium error perspiciatis nihil
							nostrum earum dolorem alias possimus eveniet consequuntur optio
							corrupti facere beatae consectetur.
						</div>
						<div className="max-w-[70%] self-end rounded-2xl bg-gray-100 px-3 py-2 text-justify whitespace-pre-wrap">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi
							expedita, ad, officiis ipsum laudantium error perspiciatis nihil
							nostrum earum dolorem alias possimus eveniet consequuntur optio
							corrupti facere beatae consectetur.
						</div>
						<div className="text-justify">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi
							expedita, ad, officiis ipsum laudantium error perspiciatis nihil
							nostrum earum dolorem alias possimus eveniet consequuntur optio
							corrupti facere beatae consectetur.
						</div>
						<div className="max-w-[70%] self-end rounded-2xl bg-gray-100 px-3 py-2 text-justify whitespace-pre-wrap">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi
							expedita, ad, officiis ipsum laudantium error perspiciatis nihil
							nostrum earum dolorem alias possimus eveniet consequuntur optio
							corrupti facere beatae consectetur.
						</div>
						<div className="text-justify">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi
							expedita, ad, officiis ipsum laudantium error perspiciatis nihil
							nostrum earum dolorem alias possimus eveniet consequuntur optio
							corrupti facere beatae consectetur.
						</div>
						<div className="max-w-[70%] self-end rounded-2xl bg-gray-100 px-3 py-2 text-justify whitespace-pre-wrap">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi
							expedita, ad, officiis ipsum laudantium error perspiciatis nihil
							nostrum earum dolorem alias possimus eveniet consequuntur optio
							corrupti facere beatae consectetur.
						</div>
						<div className="text-justify">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi
							expedita, ad, officiis ipsum laudantium error perspiciatis nihil
							nostrum earum dolorem alias possimus eveniet consequuntur optio
							corrupti facere beatae consectetur.
						</div>
						<div className="max-w-[70%] self-end rounded-2xl bg-gray-100 px-3 py-2 text-justify whitespace-pre-wrap">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi
							expedita, ad, officiis ipsum laudantium error perspiciatis nihil
							nostrum earum dolorem alias possimus eveniet consequuntur optio
							corrupti facere beatae consectetur.
						</div>
						<div className="text-justify">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi
							expedita, ad, officiis ipsum laudantium error perspiciatis nihil
							nostrum earum dolorem alias possimus eveniet consequuntur optio
							corrupti facere beatae consectetur.
						</div>
						<div className="max-w-[70%] self-end rounded-2xl bg-gray-100 px-3 py-2 text-justify whitespace-pre-wrap">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi
							expedita, ad, officiis ipsum laudantium error perspiciatis nihil
							nostrum earum dolorem alias possimus eveniet consequuntur optio
							corrupti facere beatae consectetur.
						</div>
						<div className="text-justify">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi
							expedita, ad, officiis ipsum laudantium error perspiciatis nihil
							nostrum earum dolorem alias possimus eveniet consequuntur optio
							corrupti facere beatae consectetur.
						</div>
						<div className="max-w-[70%] self-end rounded-2xl bg-gray-100 px-3 py-2 text-justify whitespace-pre-wrap">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi
							expedita, ad, officiis ipsum laudantium error perspiciatis nihil
							nostrum earum dolorem alias possimus eveniet consequuntur optio
							corrupti facere beatae consectetur.
						</div>
						<div className="text-justify">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi
							expedita, ad, officiis ipsum laudantium error perspiciatis nihil
							nostrum earum dolorem alias possimus eveniet consequuntur optio
							corrupti facere beatae consectetur.
						</div>
						<div className="max-w-[70%] self-end rounded-2xl bg-gray-100 px-3 py-2 text-justify whitespace-pre-wrap">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi
							expedita, ad, officiis ipsum laudantium error perspiciatis nihil
							nostrum earum dolorem alias possimus eveniet consequuntur optio
							corrupti facere beatae consectetur.
						</div>
						<div className="text-justify">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi
							expedita, ad, officiis ipsum laudantium error perspiciatis nihil
							nostrum earum dolorem alias possimus eveniet consequuntur optio
							corrupti facere beatae consectetur.
						</div>
						<div className="max-w-[70%] self-end rounded-2xl bg-gray-100 px-3 py-2 text-justify whitespace-pre-wrap">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi
							expedita, ad, officiis ipsum laudantium error perspiciatis nihil
							nostrum earum dolorem alias possimus eveniet consequuntur optio
							corrupti facere beatae consectetur.
						</div>
						<div className="text-justify">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi
							expedita, ad, officiis ipsum laudantium error perspiciatis nihil
							nostrum earum dolorem alias possimus eveniet consequuntur optio
							corrupti facere beatae consectetur.
						</div>
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
							/>
							<span className="grid size-10 cursor-pointer place-items-center rounded-full bg-gray-900 text-white hover:bg-gray-700">
								<IIonArrowUp />
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
