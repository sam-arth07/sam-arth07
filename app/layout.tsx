import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

export const metadata: Metadata = {
	title: "Samarth Chaplot - Android Developer Portfolio",
	description:
		"3D interactive portfolio of Samarth Chaplot, a passionate Android developer specializing in Kotlin, Jetpack Compose, and modern Android development",
	icons: {
		icon: [
			{ url: "/favicon.svg", type: "image/svg+xml" },
		],
		apple: [
			{
				url: "/apple-touch-icon.png",
				sizes: "180x180",
				type: "image/png",
			},
		],
	},
	manifest: "/manifest.json",
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
	themeColor: "#3DDC84",
};


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className="antialiased font-sans">
				<ThemeProvider>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
