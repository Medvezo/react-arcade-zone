import HexGuess from "@/components/container/HexGuess";
import { Metadata } from "next";
import { pixelFont } from "@/lib/fonts";
import LearnMore from "@/components/common/LearnMore";

export const metadata: Metadata = {
	title: "Hex Guess",
	description:
		"Game for guessing hex based on hexadecimal convert to RGB value",
};

export default function Home() {
	return (
		<>
			<div className="fixed w-full h-screen bg-arcade bg-cover 2xl:bg-contain bg-center  bg-no-repeat z-0"></div>

			<main className=" flex flex-col justify-center items-center gap-5 min-h-screen pt-16 px-3 lg:px-5">
				<div className="flex gap-5 justify-center items-center">
					<h1 className={`text-3xl lg:text-5xl z-10 ${pixelFont.className}`}>
						Hex Guess
					</h1>
					<LearnMore />
				</div>
				<section className="z-10 ">
					<HexGuess />
				</section>
			</main>
		</>
	);
}
