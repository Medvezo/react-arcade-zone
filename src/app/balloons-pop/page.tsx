import Balloon from "@/components/sprites/Balloon";

export default function Home() {
	return (
		<>
			<div className="fixed w-full h-screen bg-balloons bg-cover blur-xl bg-center bg-no-repeat z-0 opacity-70 " />
			<main className="min-h-screen w-full flex items-center justify-center z-10 ">
				<Balloon color="red" />
			</main>
		</>
	);
}
