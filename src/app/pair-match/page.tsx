import PairMatchGrid from "@/components/container/PairMatchGrid";

export default function Home() {
	return (
		<>
			{/* Background image */}
			<div className="fixed w-full h-screen bg-synth bg-cover blur-2xl bg-center bg-no-repeat z-0"/>

			<main className="min-h-screen flex justify-center items-center pt-20">
				<PairMatchGrid />
			</main>
		</>
	);
}
