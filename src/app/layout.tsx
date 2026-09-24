import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import { Toaster } from "react-hot-toast"
import { cookies } from "next/headers"

import "@/app/globals.css"
import {
	ScrollToTop,
	ToggleModeProvider,
	ToggleProvider,
} from "@/components"
import { Footer, Header } from "@/app/(home)/_components"

const spaceGrotesk = Space_Grotesk({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
	title: {
		template: "% | Essien — Web Design & Development ",
		default: "  Essien — Web Design & Development",
	},
	description: `Website design, Website development,
		 Software development and Seo optimization`,
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const cookieStore = await cookies()
	const theme = cookieStore.get("themeMode")?.value || "light"

	return (
		<html lang="en" className={`${theme}`}>
			<body
				className={`overflow-x-hidden 
					${spaceGrotesk.variable}
				 ${spaceGrotesk.className} text-[1rem]
				  dark:bg-[#08001a]
				  dark:text-primary-white  text-black`}>
				<ToggleProvider>
					<ToggleModeProvider>
						<Header />
						<main>{children}</main>
						<Footer />
						<ScrollToTop />

						<Toaster
							position="top-center"
							gutter={12}
							containerStyle={{ margin: "8px" }}
							toastOptions={{
								success: { duration: 5000 },
								error: { duration: 5000 },
								style: {
									fontSize: "16px",
									maxWidth: "500px",
									padding: "16px 24px",
									border: "1px solid var(--color-primary-black)",
									backgroundColor: "#f7e8fc",
									color: "var(--color-primary-black)",
								},
							}}
						/>
					</ToggleModeProvider>
				</ToggleProvider>
			</body>
		</html>
	)
}
