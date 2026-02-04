import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export const metadata: Metadata = {
	title: "",
	description: "",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className='bg-background text-black'>
			<body>
				<Toaster />
				<Navbar />
				<main id="main-content" role="main">
					{children}
				</main>
				<Footer />
				<SpeedInsights />
			</body>
		</html>
	);
}
