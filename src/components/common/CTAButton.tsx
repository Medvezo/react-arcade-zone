"use client";
import { Button } from "@nextui-org/button";
import { pixelFont } from "@/lib/fonts";
import { FaPlay } from "react-icons/fa";
import { useRouter } from "next/navigation";
export default function CTAButton({ href }: { href?: string }) {
	console.log(href);
	const router = useRouter();
	if (href?.startsWith("/")) {
		return (
			<Button
				className={`text-xl w-1/2 m-auto ${pixelFont.className}`}
				variant="solid"
				color="success"
				type="button"
				onClick={() => router.push(href)}>
				Play <FaPlay className="w-5 h-5" />
			</Button>
		);
	} else {
		return (
			<a href={href} className="w-full m-auto">
				<Button
					href={href}
					className={`text-xl w-full xl:w-1/2  ${pixelFont.className}`}
					variant="solid"
					color="success"
					type="button">
					Play <FaPlay className="w-5 h-5" />
				</Button>
			</a>
		);
	}
}
