import type { Metadata } from "next";
import { audiowide } from "@/lib/fonts";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";


export const metadata: Metadata = {
	title: "React Arcade Zone",
	description: "React Arcade Zone is games hub built by React and Next JS 14.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={audiowide.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
