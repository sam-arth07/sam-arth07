import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const roboto = Roboto({
	weight: ["300", "400", "500", "700"],
	variable: "--font-roboto",
	subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
	variable: "--font-jetbrains-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Android Developer Portfolio",
	description:
		"Portfolio of a passionate Android developer specializing in Kotlin, Jetpack Compose, and modern Android development",
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
			<body
				className={`${roboto.variable} ${jetbrainsMono.variable} antialiased`}>
				<ThemeProvider>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
