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
	// Hex to Guess
	const [hex, setHex] = useState<string>("#000000");
	const [isClient, setIsClient] = useState(false); // State to track client-side rendering

	useEffect(() => {
		setHex(generateHex()); // Set hex value on client side
		setIsClient(true); // Mounted on client
	}, []);

	// Is user's answer correct
	const [isCorrect, setCorrect] = useState(false);

	return (
		<main className="pt-20 flex flex-col justify-around items-center min-h-screen">
			<h1 className="text-5xl">Hex Guess</h1>
			<section className=" ">
				<div className={` w-96 h-96 `} style={{ backgroundColor: hex }}>
					{" "}
				</div>

				{isClient && (
					<div className="flex justify-center flex-col">
						<button
							onClick={() => setHex((hex) => (hex = generateHex()))}
							className="text-white ">
							{hex}
						</button>

						{Array.from({ length: 3 }).map((_, index) => (
							<button key={index}>{generateHex()}</button>
						))}
					</div>
				)}
			</section>
		</main>
	);
}
