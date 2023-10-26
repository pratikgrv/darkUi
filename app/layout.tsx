import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import "@/styles/globals.css";
import { Suspense } from "react";
import { ThemeProvider } from "@/components/ContextThemeProvider";

export const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Dark Ui",
	description: "frontend ui for ....",
};


export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={outfit.className}>
				 <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
				<NextTopLoader />
				{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
