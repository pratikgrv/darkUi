
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";

import "@/styles/globals.css"

export const  inter = Inter({ subsets: ["latin"] });
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
		<html lang="en">
			<body className={outfit.className}>{children}</body>
		</html>
	);
}
