import "@/app/_styles/globals.css";
import { Space_Grotesk } from "next/font/google";
import { Toaster } from "react-hot-toast";

import Footer from "./_components/Footer";
import Header from "./_components/Header";
import { ToggleModeProvider } from "./_components/ToggleModeContext";
import { ToggleProvider } from "./_components/ToggleMenuContext";
import MobileNavbar from "./_components/MobileNavbar";
import { cookies } from "next/headers";

const spaceGrotesk = Space_Grotesk({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
	display: "swap",
});

export const metadata = {
	title: "Essien Joy | Portfolio",
	description: "Frontend developer portfolio",
};

export default async function RootLayout({ children }) {
	const cookieStore = await cookies();
	const theme = cookieStore.get("themeMode")?.value || "light";

	return (
		<html lang='en' className={`${theme}`}>
			<body
				className={`overflow-x-hidden ${spaceGrotesk.className} text-[1rem] dark:bg-[#08001a] dark:text-primary-white bg-[#f7e8fc] text-black`}>
				<ToggleProvider>
					<ToggleModeProvider>
						<MobileNavbar />
						<Header />
						<main>{children}</main>
						<Footer />
						<Toaster />
					</ToggleModeProvider>
				</ToggleProvider>
			</body>
		</html>
	);
}
