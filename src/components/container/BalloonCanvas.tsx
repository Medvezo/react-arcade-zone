"use client";
import Balloon from "../sprites/Balloon";

export default function BalloonCanvas() {
	return (
		<section className="w-full h-full pt-24 z-10 flex justify-center">
			<Balloon color="red" />
		</section>
	);
}
