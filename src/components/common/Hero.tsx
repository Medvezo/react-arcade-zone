import Image from "next/image";
export default function Hero() {
	return (
		<section className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full h-full m-auto">
            <p>Explore Games</p>
			<Image
				src="/Hero.png"
				alt="Hero section react arcadeillustration"
				width={600}
				height={300}
                className="rounded-3xl "
			/>
		</section>
	);
}
