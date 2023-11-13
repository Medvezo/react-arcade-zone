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
		hex += hexSymbols[Math.floor(Math.random() * hexSymbols.length)];
	}
	return hex;
}

export default function Home() {
	// Hex to Guess
	const [hex, setHex] = useState<string>("#000000");
	const [isClient, setIsClient] = useState<boolean>(false); // State to track client-side rendering
	const [answers, setAnswers] = useState<string[]>();

	// First time effect
	useEffect(() => {
		setHex(generateHex()); // Set hex value on client side
		setIsClient(true); // Mounted on client
	}, []);
	// each render effect
	useEffect(() => {
		setAnswers([hex, generateHex(), generateHex(), generateHex()]);
	}, [hex]);

	// Is user's answer correct
	const [isCorrect, setisCorrect] = useState<boolean | undefined>(undefined);

	function handleAnswer(answer: string) {
		if (answer === hex) {
			// TODO: IF answer true
			setisCorrect(true);
		} else {
			// TODO: if answer false
			setisCorrect(false);
		}
	}

	return (
		<main className="pt-20 flex flex-col justify-center items-center gap-10 min-h-screen">
			<h1 className="text-5xl">Hex Guess</h1>
			<section className=" ">
				<div className="text-2xl text-center mb-5">
					{isCorrect && <span className="text-green-500">Correct</span>}
					{isCorrect === false && <span className="text-red-500">Wrong</span>}
				</div>

				<div className={` w-96 h-96 `} style={{ backgroundColor: hex }}>
					{" "}
				</div>

				{isClient && (
					<div className="flex justify-center flex-col">
						{answers?.map((answer, index) => (
							<button
								key={index}
								onClick={() => handleAnswer(answer)}>
								{answer}
							</button>
						))}
					</div>
				)}
			</section>
		</main>
	);
}
