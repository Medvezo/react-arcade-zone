"use client";
import { useEffect, useState } from "react";
import Balloon from "../sprites/Balloon";

export default function BalloonCanvas() {
	const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

	useEffect(() => {
		const popAudio = new Audio("/balloons-pop/pop-sound.mp3");
		setAudio(popAudio);
	}, []);

	return (
		<section className="w-full h-full pt-24 z-10 flex justify-center">
			<Balloon color="red" audio={audio} />
			<Balloon color="yellow" audio={audio} />
		</section>
	);
}
