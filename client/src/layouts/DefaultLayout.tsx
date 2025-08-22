import { useEffect, useRef, useState, type WheelEvent } from "react";
import { Outlet } from "react-router";

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

			<Outlet />
		</div>
	);
}
