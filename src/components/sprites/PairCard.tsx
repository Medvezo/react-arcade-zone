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
}: TPairCard) {
	const [flipped, setFlipped] = useState<boolean>(false);
	useEffect(() => {
		if (revealedGrid[rowIdx][colIdx]) {
			setFlipped(true);
		} else {
			setFlipped(false);
		}
	}, [revealedGrid, rowIdx, colIdx]);
	return (
		<Card shadow="sm" isPressable onClick={() => handleClick(rowIdx, colIdx)}>
			<CardBody>
				<Image
					className="lg:w-24 lg:h-24"
					as={NextImage}
					src={flipped ? pair.src : "pair-match/react.svg"}
					width="70"
					height="70"
					alt={`${pair.title} logo`}
				/>
			</CardBody>
		</Card>
	);
}
