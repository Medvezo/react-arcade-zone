import PairMatchGrid from "@/components/container/PairMatchGrid";
import PairMatchHeader from "@/components/layout/PairMatchHeader";
import { PairMatchProvider } from "@/components/providers/pair-match/PairMatchProvider";

export default function Home() {
	return (
		<>
			{/* Background image */}
			<div className="fixed w-full h-screen bg-synth bg-cover blur-2xl bg-center bg-no-repeat z-0" />
			<PairMatchProvider>
				<PairMatchHeader />
				<main className="h-[70vh] sm:h-[80vh] flex justify-center items-center ">
					<PairMatchGrid />
				</main>
			</PairMatchProvider>
		</>
	);
}
