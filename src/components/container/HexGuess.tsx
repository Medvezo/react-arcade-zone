"use client";
import { Button } from "@nextui-org/button";
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

export default function HexGuess() {
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
		setAnswers(
			[hex, generateHex(), generateHex(), generateHex()].sort(
				(a, b) => 0.5 - Math.random()
			)
		);
	}, [hex]);

	// Is user's answer correct
	const [isCorrect, setisCorrect] = useState<boolean | undefined>(undefined);

	function handleAnswer(answer: string) {
		answer === hex
			? [setisCorrect(true), setHex(generateHex())]
			: setisCorrect(false);
	}
	return (
		<>
			<div className="text-2xl lg:text-3xl text-center mb-7 h-6">
				{isCorrect && <span className="text-green-500">Correct</span>}
				{isCorrect === false && <span className="text-red-500">Wrong</span>}
			</div>

			<div
				className={`w-80 h-80 lg:w-96 lg:h-96 rounded-3xl`}
				style={{ backgroundColor: hex }}>
				{" "}
			</div>

			{isClient && (
				<div className="grid grid-cols-2 mt-5 gap-5 text-white">
					{answers?.map((answer, index) => (
						<Button
							color="warning"
							className=""
							variant="ghost"
							type="button"
							key={index}
							onClick={() => handleAnswer(answer)}>
							{answer}
						</Button>
					))}
				</div>
			)}
		</>
	);
}
