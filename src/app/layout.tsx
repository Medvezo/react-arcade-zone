import type { Metadata } from "next";
import { audiowide } from "@/lib/fonts";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Providers } from "./providers";

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
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
