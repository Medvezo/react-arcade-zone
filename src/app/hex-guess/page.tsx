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
			<main className="  gap-5 min-h-screen  pt-16 px-3 lg:px-5 flex justify-center items-center ">
				<div className="flex flex-col justify-center items-center w-full lg:w-auto rounded-3xl  py-10 lg:p-20 lg:px-40 z-10 bg-teal-950/40 backdrop-blur-3xl">
					<div className="flex gap-5 justify-center items-center">
						<h1 className={`text-3xl lg:text-5xl z-10 ${pixelFont.className}`}>
							Hex Guess
						</h1>
						<LearnMore>
							<h4 className="font-bold text-xl text-green-300 z-10">
								How to Guess Hex Color Numbers?
							</h4>
							<p>
								Hexadecimal color codes are a way of representing colors in a
								digital format. Here are some tips to guess them correctly if
								you know what RGB is:
							</p>
							<ul className="space-y-2">
								<li>
									<strong className="text-green-500">
										Understand the Basics:
									</strong>{" "}
									Hex codes are 6-digit combinations of numbers and letters from
									0 to 9 and A to F in hexadecimal.
								</li>
								<li>
									<strong className="text-green-500">
										Know the Primary Colors:
									</strong>{" "}
									Red, green, and blue are the primary RGB colors.
									&apos;FF&apos; represents the highest intensity of a color
									(255).
								</li>
								<li>
									<strong className="text-green-500">
										Detailed RGB to Hex Conversion:
									</strong>{" "}
									To convert an RGB value to Hex, divide each RGB component (R,
									G, B) by 16. The quotient gives the first character (0-9 or
									A-F), and the remainder gives the second character of the hex
									pair. For example, an RGB value of 130 (for any of R, G, or B)
									would be divided into 130/16, giving 8 as the quotient and 2
									as the remainder. So, the hex pair for 130 is &apos;82&apos;0.
									Repeat this for each RGB component and concatenate the results
									to get the full Hex code.
								</li>
							</ul>
						</LearnMore>
					</div>
					<section className="z-10 ">
						<HexGuess />
					</section>
				</div>
			</main>
		</>
	);
}
