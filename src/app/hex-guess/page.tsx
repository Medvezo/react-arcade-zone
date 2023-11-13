"use client";
import { useEffect, useState } from "react";

const hexSymbols = [
	"0",
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

function generateHex() {
	let hex = "#";
	for (let num = 0; num < 6; num++) {
		hex += hexSymbols[Math.floor(Math.random() * 16)];
	}
	return hex;
}

export default function Home() {
	const [hex, setHex] = useState<string>("#702256");
    useEffect(() => {
        console.log(hex)
    }, [hex])

	return (
		<main className="pt-20 flex flex-col justify-around items-center min-h-screen">
			<h1 className="text-5xl">Hex Guess</h1>
			<section>
				<div className={` w-96 h-96 block `} style={{ backgroundColor: hex }}>
					{" "}
				</div>
				<button
					onClick={() => setHex((hex) => (hex = generateHex()))}
					className="text-white">
					{" "}
					Generate
				</button>
			</section>
		</main>
	);
}
