import { games } from "@/lib/const";
import Link from "next/link";
export default function GamesGrid() {
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-10 z-10">
			{games.map((game, index) => (
				<Link key={index} href={game.href} className="min-w-max h-full border-white border p-10">
					{game.title}
				</Link>
			))}
		</section>
	);
}
