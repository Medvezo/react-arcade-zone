type CellType = {
	value: number;
};

export default function TTTCell({ value }: CellType) {
	// Condition for cell render
	if (value > 0) {
		// return <div className="text-blue-500 text-xl">X</div>;
		return (
			<svg
				fill="cyan"
				viewBox="-3.5 0 19 19"
				xmlns="http://www.w3.org/2000/svg"
				className="w-full h-full"
			>
				<path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z" />
			</svg>
		);
	} else if (value < 0) {
		return (
			// <div className="text-red-500 text-xl w-20 h-20 aspect-square">O</div>
			<svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full ">
				<circle
					r="35%"
					cx="50%"
					cy="50%"
					fill="none"
					stroke="red"
					stroke-width="5"
				/>
			</svg>
		);
	}

	return <div className="w-20 h-20"> </div>;
}
