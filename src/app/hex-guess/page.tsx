import HexGuess from "@/components/container/HexGuess";
import { Metadata } from "next";

export const metadta: Metadata = {
	title: "Hex Guess",
	description:
		"Game for guessing hex based on hexadecimal convert to RGB value",
};

export default function Home() {
	return (
		<main className="pt-20 flex flex-col justify-center items-center gap-10 min-h-screen">
			<h1 className="text-5xl">Hex Guess</h1>
			<section className=" ">
				<HexGuess />
			</section>
		</main>
	);
}
