import GamesGrid from "@/components/common/GamesGrid";
import Hero from "@/components/common/Hero";
import { Metadata } from "next";

// export const metadata: Metadata = {
// 	title: "home"
// }

export default function Home() {
	return (
		<>
			<div className="fixed w-full h-screen bg-synth bg-cover blur-xl bg-no-repeat z-0"></div>
			<main className="min-h-screen pt-20 flex flex-col lg:px-32 px-10 ">
				<Hero />
				<GamesGrid />
			</main>
		</>
	);
}
