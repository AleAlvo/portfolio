import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Lexend_Mega, Public_Sans, Archivo } from "next/font/google";
import "./globals.css";
import QueryProvider from "../providers/QueryProvider";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

// Example of adding additional fonts
const lexendMega = Lexend_Mega({
	variable: "--font-lexend-mega",
	subsets: ["latin"],
});

const publicSans = Public_Sans({
	variable: "--font-public-sans",
	subsets: ["latin"],
});

const archivo = Archivo({
	variable: "--font-archivo",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Next.js Portfolio",
	description: "A portfolio built with Next.js and Neobrutalism design",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${lexendMega.variable} ${publicSans.variable} ${archivo.variable} antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="light" enableSystem>
					<QueryProvider>{children}</QueryProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
