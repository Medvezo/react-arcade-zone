"use client";
import { useState } from "react";

const hexSymbols = [
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
];

function generateHex() {}

export default function Home() {
	const [hex, setHex] = useState<string>("#702256");

	return (
		<main className="pt-20 flex justify-center items-center min-h-screen">
			<div
				className={` w-96 h-96 block `}
				style={{ backgroundColor: hex }}>
				{" "}
			</div>
		</main>
	);
}
