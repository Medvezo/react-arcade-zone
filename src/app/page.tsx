import GamesGrid from "@/components/common/GamesGrid";
import Hero from "@/components/common/Hero";
import { Metadata } from "next";

export default function Home() {
	return (
		<>
			<main className="min-h-screen pt-20 flex flex-col lg:px-32 px-10 z-10">
				<Hero />
				<GamesGrid />
			</main>
		</>
	);
}
