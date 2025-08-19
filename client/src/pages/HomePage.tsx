export function Component() {
	return (
		<div className="flex h-dvh">
			<div className="h-full w-1/3 border-r border-gray-200 bg-[#f9f9f9]"></div>

			<div className="flex flex-1 flex-col">
				<div className="min-h-0 flex-1 overflow-y-auto"></div>

				<div className="flex-none px-6 pb-4">
					<div className="mx-auto max-w-md">
						<div className="flex w-full items-center gap-2 rounded-full border px-4">
							<span>icon</span>
							<input type="text" className="min-h-0 flex-1 py-2 focus:ring-0" />
							<span>icon</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
