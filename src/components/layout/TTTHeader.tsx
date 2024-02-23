"use client";

import { pixelFont } from "@/lib/fonts";
import TTTContext from "../providers/tic-tac-toe/TTTProvider";
import { useContext } from "react";
import XSVG from "@/../public/tic-tac-toe/X";
import OSVG from "@/../public/tic-tac-toe/O";

export default function TTTHeader() {
	const { state, dispatch } = useContext(TTTContext);

	return (
		<header className="flex flex-col justify-center items-center gap-3 lg:gap-10 ">
			<h2
				className={` z-40 pt-32 text-4xl lg:text-5xl font-bold text-center ${pixelFont.className}`}>
				Tic Tac Toe
			</h2>
			<p className="text-2xl lg:text-3xl font-bold text-cyan-50 z-40 flex justify-center items-center gap-3">
				Next move: <span className="w-10 h-10 ">{state.nextMove === 1 ? <XSVG /> : <OSVG />}</span>
			</p>
		</header>
	);
}
