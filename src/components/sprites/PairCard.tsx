"use client";

import { Card, CardBody, Image } from "@nextui-org/react";
import NextImage from "next/image";
import { TPairCard } from "@/lib/types";
import { useEffect, useState } from "react";

export default function PairCard({
	pair,
	handleClick,
	rowIdx,
	colIdx,
	revealedGrid,
	isMatched,
}: TPairCard) {
	// Flip on click
	const [flipped, setFlipped] = useState<boolean>(false);
	// useEffect for Click
	useEffect(() => {
		if (revealedGrid[rowIdx][colIdx]) {
			setFlipped(true);
		} else {
			setFlipped(false);
		}
	}, [revealedGrid, rowIdx, colIdx]);

	return (
		<Card
			isDisabled={isMatched}
			shadow="sm"
			isPressable={!isMatched}
			onClick={() => handleClick(rowIdx, colIdx)}>
			<CardBody className="m-0 p-0 ">
				<Image
					className={`lg:w-32 lg:h-32 p-3  transition-all duration-300 ease-in-out  ${
						flipped ? "" : "bg-cyan-950 "
					}`}
					as={NextImage}
					src={flipped ? pair.src : "pair-match/react.svg"}
					width="140"
					height="140"
					alt={`${pair.title} logo`}
				/>
			</CardBody>
		</Card>
	);
}
