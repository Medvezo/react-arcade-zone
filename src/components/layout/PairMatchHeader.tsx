"use client"
import { pixelFont } from "@/lib/fonts";
import PairMatchContext from "@/components/providers/pair-match/PairMatchProvider";
import { useContext } from "react";

export default function PairMatchHeader() {
	const { state } = useContext(PairMatchContext);

	return (
		<header className="flex flex-col justify-center items-center ">
			<h2
				className={` z-40 pt-24 text-4xl lg:text-5xl font-bold ${pixelFont.className}`}>
				Pair Match
			</h2>
			<span className="text-2xl lg:text-3xl font-bold text-cyan-050 z-40">
				Total moves: {state.totalMoves}
			</span>
		</header>
	);
}
