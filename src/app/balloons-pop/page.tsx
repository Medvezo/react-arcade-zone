import BalloonCanvas from "@/components/container/BalloonCanvas";
import { BalloonProvider } from "@/components/providers/BalloonProvider";

export default function Home() {
	return (
		<>
			<div className="fixed w-full h-screen bg-balloons bg-cover blur-xl bg-center bg-no-repeat z-0 opacity-70 overflow-hidden" />
			<main className="min-h-screen w-full z-10 overflow-hidden">
				<BalloonProvider>
					<BalloonCanvas />
				</BalloonProvider>
			</main>
		</>
	);
}
