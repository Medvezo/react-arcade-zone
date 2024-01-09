"use client";

import { useEffect, useState, useContext } from "react";
import PairCard from "@/components/sprites/PairCard";
import { pairs } from "@/lib/const";
import { TPair } from "@/lib/types";
import PairMatchContext from "../providers/pair-match/PairMatchProvider";
import { toast } from "react-toastify";
import { Button } from "@nextui-org/button";
import { pixelFont } from "@/lib/fonts";
import { VscDebugRestart } from "react-icons/vsc";

export default function PairMatchGrid() {
	// Define the type for the grid state
	const emptyGrid: (TPair | null)[][] = new Array(4).fill(
		new Array(4).fill(null)
	);
	const [grid, setGrid] = useState<(TPair | null)[][]>(emptyGrid);

	// Shuffle the pairs array and replace empty grid with shuffled pairs function
	function shufflePairs() {
		// Duplicate each pair to shuffle them 
		const duplicatedPairs = [...pairs, ...pairs];
	
		// Shuffle duplicated arr
		const shuffledPairs = duplicatedPairs.sort(() => Math.random() - 0.5);
	
		// Split the shuffled array into a 4x4 grid
		return [
			shuffledPairs.slice(0, 4),
			shuffledPairs.slice(4, 8),
			shuffledPairs.slice(8, 12),
			shuffledPairs.slice(12, 16)
		];
	}
	// useEffect on mount
	useEffect(() => {
		setGrid(shufflePairs());
	}, []);

	// Revealed grid of 4x4 cards on click
	const [revealedGrid, setRevealedGrid] = useState(
		Array.from({ length: grid.length }, () =>
			new Array(grid[0].length).fill(false)
		)
	);

	// finding if card is matched or not
	const [previousClicked, setPreviousClicked] = useState<{
		pair: TPair | null;
		row: number;
		col: number;
	} | null>(null);
	// To track if pairs matched
	const [matchedPairs, setMatchedPairs] = useState<string[]>([]);

	// To disable all cards while setTimeout period
	const [isWaiting, setIsWaiting] = useState(false);

	const handleClick = (rowIdx: number, colIdx: number) => {
		console.log(`Clicked on row ${rowIdx} and col ${colIdx}`);

		// Prevent clicking the same card twice
		if (
			previousClicked &&
			previousClicked.row === rowIdx &&
			previousClicked.col === colIdx
		) {
			toast.error("Please click a different card");
			return;
		}

		// Flip the current card
		const newRevealedGrid = [...revealedGrid];
		newRevealedGrid[rowIdx][colIdx] = true;
		setRevealedGrid(newRevealedGrid);

		if (previousClicked) {
			// Second click: Check for a match
			if (previousClicked.pair?.title === grid[rowIdx][colIdx]?.title) {
				console.log("Matched!");

				// making sure title is defined before adding to matchedPairs
				const matchedTitle = grid[rowIdx][colIdx]?.title;
				if (matchedTitle) {
					setMatchedPairs((prev) => [...prev, matchedTitle]);
				}
			} else {
				console.log("Not matched!");

				setIsWaiting(true); // Disable all cards
				// Flip both cards back after 1 second
				setTimeout(() => {
					const flipBackGrid = [...revealedGrid];
					flipBackGrid[rowIdx][colIdx] = false;
					flipBackGrid[previousClicked.row][previousClicked.col] = false;
					setRevealedGrid(flipBackGrid);
					setIsWaiting(false); // Re-enable all cards
				}, 1000);
			}
			setPreviousClicked(null); // Reset after checking for match
		} else {
			// First click: Store the clicked card and its position
			setPreviousClicked({
				pair: grid[rowIdx][colIdx],
				row: rowIdx,
				col: colIdx,
			});
		}
	};

	// Context for total moves
	const { dispatch } = useContext(PairMatchContext);
	// usEffect on move trigger
	useEffect(() => {
		// check the length of previous clicked if 1 then increment moves
		if (previousClicked) {
			dispatch({ type: "INCREMENT_MOVES", payload: 1 });
		}
	}, [previousClicked, dispatch]);

	// state for Game Over
	const [isGameFinished, setIsGameFinished] = useState(false);

	useEffect(() => {
		// Game over logic
		if (matchedPairs.length === pairs.length) {
			setIsGameFinished(true);
			toast.success("Congratulations!");
		}
	}, [matchedPairs]);

	const restartGame = () => {
		// Reset all states
		setGrid(shufflePairs());
		setRevealedGrid(Array.from({ length: 4 }, () => new Array(4).fill(false)));
		setMatchedPairs([]);
		setIsWaiting(false);
		setIsGameFinished(false);
		dispatch({ type: "RESET_MOVES" });
	};

	return (
		<div className="flex flex-col gap-3 lg:gap-5 px-3 lg:px-5">
			{/* GAME OVER  */}
			{isGameFinished ? (
				<div className="z-10 p-10 flex flex-col justify-center items-center gap-5 lg:gap-10">
					<h3
						className={`${pixelFont} text-4xl lg:text-6xl text-green-500 z-10`}
					>
						You matched all pairs!
					</h3>{" "}
					<Button
						variant="ghost"
						color="secondary"
						onClick={restartGame}
						className="text-white text-xl"
						size="lg"
						radius="full"
						startContent={<VscDebugRestart className="h-8 w-8" />}
					>
						Restart
					</Button>{" "}
				</div>
			) : (
				//! MAIN RENDER LOGIC
				grid.map((row, rowIdx) => (
					<div key={rowIdx} className="flex gap-5">
						{row.map((pair, colIdx) => {
							if (pair) {
								return (
									<PairCard
										matchedPairs={matchedPairs}
										key={`${rowIdx} ${colIdx}`}
										pair={pair}
										handleClick={handleClick}
										rowIdx={rowIdx}
										colIdx={colIdx}
										revealedGrid={revealedGrid}
										isWaiting={isWaiting}
									/>
								);
							}
							return null;
						})}
					</div>
				))
			)}
		</div>
	);
}
