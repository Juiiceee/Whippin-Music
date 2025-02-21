// layout.tsx
import "./globals.css"
import { Figtree } from "next/font/google"

import Sidebar from "../components/Sidebar"
import UserProvider from "@/providers/UserProvider"
import ToasterProvider from "@/providers/ToasterProvider"
import getSongsByUserId from "@/actions/getSongsByUserId"
import Player from "@/components/Player"
const figtree = Figtree({ subsets: ["latin"] })

export const metadata = {
	title: "Whippin Music App",
}

export const revalidate = 0

interface LayoutProps {
	children: React.ReactNode
}

export default async function RootLayout({ children }: LayoutProps) {
	const userSongs = await getSongsByUserId()

	return (
		<html lang="en">
			<body className={figtree.className}>
				<ToasterProvider />
				<UserProvider>
					<Sidebar songs={userSongs}>
						{children}
					</Sidebar>
					<Player />
				</UserProvider>
			</body>
		</html>
	)
}
