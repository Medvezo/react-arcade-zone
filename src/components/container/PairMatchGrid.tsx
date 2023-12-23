"use client";

import { useEffect, useState } from "react";
import PairCard from "@/components/sprites/PairCard";
import { pairs } from "@/lib/const";
import { TPair } from "@/lib/types";

export default function PairMatchGrid() {
	// Define the type for the grid state
	const emptyGrid: (TPair | null)[][] = new Array(4).fill(
		new Array(4).fill(null)
	);
	const [grid, setGrid] = useState<(TPair | null)[][]>(emptyGrid);

	useEffect(() => {
		// Shuffle the pairs array and replace empty grid with shuffled pairs
		const pairsShuffled = [...pairs].sort(() => Math.random() - 0.5);
		setGrid([
			[pairsShuffled[5], pairsShuffled[6], pairsShuffled[1], pairsShuffled[2]],
			[pairsShuffled[2], pairsShuffled[7], pairsShuffled[0], pairsShuffled[7]],
			[pairsShuffled[1], pairsShuffled[3], pairsShuffled[4], pairsShuffled[5]],
			[pairsShuffled[4], pairsShuffled[3], pairsShuffled[6], pairsShuffled[0]],
		]);
	}, []);

	// Revealed grid of 4x4 cards on click
	const [revealedGrid, setRevealedGrid] = useState(
		Array.from({ length: grid.length }, () =>
			new Array(grid[0].length).fill(false)
		)
	);


	const handleClick = (rowIdx: number, colIdx: number) => {
		console.log(`Clicked on row ${rowIdx} and col ${colIdx}`);
		const revealedGridCopy = [...revealedGrid];
		// Flip the card
		revealedGridCopy[rowIdx][colIdx] = true;
		console.log(revealedGridCopy);
		setRevealedGrid(revealedGridCopy);

		
	};

	return (
		<div className="flex flex-col gap-3 lg:gap-5 px-3 lg:px-5">
			{grid.map((row, rowIdx) => (
				<div key={rowIdx} className="flex gap-5">
					{row.map((pair, colIdx) => {
						if (pair) {
							return (
								<PairCard
									key={`${rowIdx} ${colIdx}`}
									pair={pair}
									handleClick={handleClick}
									rowIdx={rowIdx}
									colIdx={colIdx}
									revealedGrid={revealedGrid}
								/>
							);
						}
						return null;
					})}
				</div>
			))}
		</div>
	);
}
