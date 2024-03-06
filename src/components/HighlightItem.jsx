function HighlightItem() {
	return (
		<div className="bg-white px-8 py-4 shadow-lg flex flex-col gap-4 items-center rounded-md">
			<p className="text-sm text-slate-600">title</p>
			<p className="text-4xl">62%</p>
			<div className="flex gap-2">
				<span>icon</span>
				<span>Normal</span>
			</div>
		</div>
	);
}

export default HighlightItem;
