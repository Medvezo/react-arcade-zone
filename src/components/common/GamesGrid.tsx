import { games } from "@/lib/const";
import Link from "next/link";
import { pixelFont } from "@/lib/fonts";
export default function GamesGrid() {
	return (
		<section className="z-10 min-h-screen pt-16 lg:pt-32" id="games">
			<h2 className={`text-center text-3xl  ${pixelFont.className}`}>Games</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-10 pt-16">
				{games.map((game, index) => (
					<Link
						key={index}
						href={game.href}
						className="min-w-max h-full border-white border p-10 rounded-3xl font-bold text-center">
						{game.title}
					</Link>
				))}
			</div>
		</section>
	);
}
