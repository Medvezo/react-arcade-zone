import PairCard from "@/components/sprites/PairCard";
import { pairs } from "@/lib/const";
export default function Home() {
	return (
		<>
			{/* Background image */}
			<div className="fixed w-full h-screen bg-synth bg-cover blur-2xl bg-center bg-no-repeat z-0"></div>

			<main className="min-h-screen flex justify-center items-center pt-20">
				<div className="grid grid-cols-4 gap-2 lg:gap-5 px-3 lg:px-5">
					{pairs.map((pair, idx) => (
						<PairCard key={idx} pair={pair} />
					))}
				</div>
			</main>
		</>
	);
}
