"use client";
import Image from "next/image";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { slideInFromLeft, slideInFromRight, fadeIn } from "@/utils/motion";

export default function Hero() {
	return (
		<LazyMotion features={domAnimation}>
			<m.section
				initial="hidden"
				animate="visible"
				className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full h-full m-auto pb-16">
				<div className="flex flex-col gap-6 mt-6 text-5xl md:text-6xl text-white max-w-[600px] w-auto h-auto">
					<m.span variants={slideInFromLeft(0.5)}>
						Explore and play
						<p className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-600">
							{" "}
							React Games{" "}
						</p>
					</m.span>
				</div>
				<m.div
					variants={slideInFromRight(0.5)}
					className="bg-violet-500/10 rounded-3xl">
					<m.div variants={fadeIn(1.2)} className="backdrop-blur-lg rounded-3xl ">
						<Image
							src="/Hero.png"
							alt="Hero section react arcadeillustration"
							width={600}
							height={300}
							className="rounded-3xl  "
						/>
					</m.div>
				</m.div>
			</m.section>
		</LazyMotion>
	);
}
