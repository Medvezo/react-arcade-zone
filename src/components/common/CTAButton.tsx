"use client"
import { Button } from "@nextui-org/button";
import { pixelFont } from "@/lib/fonts";
import { FaPlay } from "react-icons/fa";

export default function CTAButton() {
	return (
		<Button
			className={`text-xl w-1/2 m-auto ${pixelFont.className}`}
			variant="solid"
			color="success"
			type="button">
			Play <FaPlay className="w-5 h-5" />
		</Button>
	);
}
