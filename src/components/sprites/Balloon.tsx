import Image from "next/image";

type TBalloon = {
	color: "blue" | "green" | "pink" | "red" | "yellow";
};

export default function Balloon({ color }: TBalloon) {
	return (
		<Image
			src={`/balloons-pop/${color}-Baloon.webp`}
			alt={`${color} balloon`}
			width={50}
			height={100}
            className="z-10"
		/>
	);
}
