import Hero from "@/components/common/Hero";


export default function Home() {
	return (
		<>
			<div className="fixed w-full h-screen bg-synth bg-cover blur-lg bg-no-repeat -z-10"></div>
			<main className="min-h-screen pt-20 flex flex-col lg:px-32 px-10">
				<Hero />
			</main>
		</>
	);
}
