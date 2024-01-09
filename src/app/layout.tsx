import type { Metadata } from "next";
import { audiowide } from "@/lib/fonts";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";

// React toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

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
				<ToastContainer
					position="top-right"
					autoClose={3000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="colored"
				/>
				<Analytics />
			</body>
		</html>
	);
}
