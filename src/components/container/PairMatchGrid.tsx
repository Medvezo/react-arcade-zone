"use client";

import { useState } from "react";
import PairCard from "@/components/sprites/PairCard";
import { pairs } from "@/lib/const";

export default function PairMatchGrid() {
	const pairsShuffled = pairs.sort(() => Math.random() - 0.5); // Shuffle the array
	// Display grid of 4x4 cards
	const [grid, setGrid] = useState([
		[pairsShuffled[5], pairsShuffled[6], pairsShuffled[1], pairsShuffled[2]],
		[pairsShuffled[2], pairsShuffled[7], pairsShuffled[0], pairsShuffled[7]],
		[pairsShuffled[1], pairsShuffled[3], pairsShuffled[4], pairsShuffled[5]],
		[pairsShuffled[4], pairsShuffled[3], pairsShuffled[6], pairsShuffled[0]],
	]);
	
    // Revealed grid of 4x4 cards on click
	const [revealedGrid, setRevealedGrid] = useState(
		new Array(grid.length).fill(new Array(grid[0].length).fill(false))
	);

	return (
		<div className="flex flex-col gap-3 lg:gap-5 px-3 lg:px-5">
			{grid.map((row, rowIdx) => (
				<div key={rowIdx} className="flex gap-5">
					{row.map((pair, colIdx) => (
						<PairCard key={colIdx} pair={pair} />
					))}
				</div>
			))}
		</div>
	);
}
