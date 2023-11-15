import type { Metadata } from "next";
import { audiowide } from "@/lib/fonts";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
	title: { default: "React Arcade Zone", template: "%s | Arcade Zone" },
	description: "React Arcade Zone is games hub built by React and Next JS 14.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="dark">
			<body className={audiowide.className}>
				<Navbar />
				<Providers>
					<div className="fixed w-full h-screen bg-synth bg-cover blur-xl bg-center bg-no-repeat z-0"></div>
					{children}
				</Providers>
				<Analytics />
			</body>
		</html>
	);
}
