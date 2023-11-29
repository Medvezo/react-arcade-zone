"use client";
import { useEffect, useState, useContext } from "react";
import Balloon from "../sprites/Balloon";
import BalloonContext from "../providers/BalloonProvider";

export const audio = new Audio("/balloons-pop/pop-sound.mp3");

export default function BalloonCanvas() {
	const { state } = useContext(BalloonContext);

	return (
		<section className="w-full h-full pt-20 z-10  overflow-hidden">
			<p className="z-10 text-green-500 text-3xl fixed top-24">
				Score: {state.currentScore}
			</p>
			<Balloon color="red"  />
			<Balloon color="yellow"  />
			<Balloon color="blue"  />
		</section>
	);
}
