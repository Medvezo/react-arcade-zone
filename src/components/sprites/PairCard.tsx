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
	matchedPairs,
	isWaiting,
}: TPairCard) {
	// Flip on click
	const [isFlipped, setFlipped] = useState<boolean>(false);
	// useEffect for Click
	useEffect(() => {
		if (revealedGrid[rowIdx][colIdx]) {
			setFlipped(true);
		} else {
			setFlipped(false);
		}
	}, [revealedGrid, rowIdx, colIdx]);

	const isCardMatched = matchedPairs.includes(pair.title);

	return (
		<Card
			isDisabled={isCardMatched}
			shadow="sm"
			isPressable={!isCardMatched}
			onClick={() => !isWaiting && handleClick(rowIdx, colIdx)}
		>
			<CardBody className="m-0 p-0 ">
				<Image
					className={`lg:w-32 lg:h-32 p-3  transition-all duration-300 ease-in-out  ${
						isFlipped ? "" : "bg-cyan-950 "
					}`}
					as={NextImage}
					src={isFlipped ? pair.src : "pair-match/react.svg"}
					width="140"
					height="140"
					alt={`${pair.title} logo`}
				/>
			</CardBody>
		</Card>
	);
}
