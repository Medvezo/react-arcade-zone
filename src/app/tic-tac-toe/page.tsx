import TicTacToeGrid from "@/components/container/TicTacToeGrid";
export default function page() {
	return (
		<>
			{/* Background image */}
			<div className="fixed w-full h-screen bg-synth bg-cover blur-2xl bg-center bg-no-repeat -z-10" />

			<main className="flex justify-center items-center h-screen flex-col">
				<TicTacToeGrid gridSize={3}/>
			</main>
		</>
	);
}
