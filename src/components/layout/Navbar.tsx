import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { pixelFont } from "@/lib/fonts";

export default function Navbar() {
	return (
		<div className="w-full h-20 fixed top-0 shadow-lg shadow-violet-600/40 bg-violet/30 backdrop-blur-2xl z-50 lg:px-7">
			<div className="w-full h-full flex flex-row items-center justify-between m-auto px-3 overflow-hidden">
				<Link
					href="/"
					className="h-auto w-auto flex flex-row items-center justify-center gap-3">
					<Image
						src="/Logo.webp"
						alt="logo"
						width={80}
						height={80}
						className="cursor-pointer hover:animate-spin-slow "
					/>

					<h2
						className={`text-base lg:text-xl text-transparent  bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 ${pixelFont.className}`}>
						React Arcade Zone
					</h2>
				</Link>

				<div className="flex flex-row gap-5">
					<a
						href="https://github.com/Medvezo/react-arcade-zone"
						target="_blank"
						rel="noopener noreferrer">
						<BsGithub className="w-10 h-10" />
					</a>
				</div>
			</div>
		</div>
	);
}
