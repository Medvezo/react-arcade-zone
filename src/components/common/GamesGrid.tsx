import { games } from "@/lib/const";
import Link from "next/link";
import { pixelFont } from "@/lib/fonts";
import Image from "next/image";

export default function GamesGrid() {
	return (
		<section className="z-10 pt-16 lg:pt-32" id="games">
			<h2 className={`text-center text-3xl  ${pixelFont.className}`}>Games</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-10 pt-16">
				{games.map((game, index) => (
					<Link
						key={index}
						href={game.href}
						className="min-w-max h-full border-white backdrop-blur-3xl border rounded-3xl overflow-hidden">
						<Image
							src={game.screenshot}
							alt={`Screenshot of ${game.title} game`}
							width={150}
							height={150}
							className="w-full"
							quality={50}
						/>
						<h3 className="font-bold text-center text-3xl py-3 pb-5 ">{game.title}</h3>
					</Link>
				))}
			</div>
			<p className="text-center text-2xl my-10">More games to come...</p>
		</section>
	);
}
