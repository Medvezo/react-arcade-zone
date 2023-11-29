"use client";
import { useEffect, useState, useContext } from "react";
import Balloon from "../sprites/Balloon";
import BalloonContext from "../providers/BalloonProvider";

export default function BalloonCanvas() {
	const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
	const { state } = useContext(BalloonContext);

	// Defining audio here only once not to rerender in children
	useEffect(() => {
		const popAudio = new Audio("/balloons-pop/pop-sound.mp3");
		setAudio(popAudio);
	}, []);

	return (
		<section className="w-full h-full pt-24 z-10  overflow-hidden">
			<p className="z-10 text-green-500 text-3xl fixed top-24">
				Score: {state.currentScore}
			</p>
			<Balloon color="red" audio={audio} />
			<Balloon color="yellow" audio={audio} />
			<Balloon color="blue" audio={audio} />
		</section>
	);
}
