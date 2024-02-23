import TicTacToeGrid from "@/components/container/TicTacToeGrid";
import TTTHeader from "@/components/layout/TTTHeader";
import { TTTProvider } from "@/components/providers/tic-tac-toe/TTTProvider";

export default function page() {
	return (
		<>
			{/* Background image */}
			<div className="fixed w-full h-screen bg-synth bg-cover blur-3xl bg-center bg-no-repeat -z-10" />

			<main className="flex justify-center items-center h-screen flex-col gap-10">
				<TTTProvider>
					<TTTHeader />

					<TicTacToeGrid gridSize={7} />
				</TTTProvider>
			</main>
		</>
	);
}
