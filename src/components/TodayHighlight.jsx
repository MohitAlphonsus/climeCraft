import HighlightItem from './HighlightItem';

function TodayHighlight() {
	return (
		<div>
			<p className="text-xl mb-4">Today's Highlight</p>
			<div className="grid grid-cols-3 gap-4">
				<HighlightItem />
				<HighlightItem />
				<HighlightItem />
				<HighlightItem />
				<HighlightItem />
				<HighlightItem />
			</div>
		</div>
	);
}

export default TodayHighlight;
