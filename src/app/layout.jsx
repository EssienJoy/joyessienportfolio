import "@/app/_styles/globals.css";
import { Space_Grotesk } from "next/font/google";
import { Toaster } from "react-hot-toast";

import Footer from "./_components/Footer";
import Header from "./_components/Header";
import { ToggleModeProvider } from "./_components/ToggleModeContext";
import { ToggleProvider } from "./_components/ToggleMenuContext";
import MobileNavbar from "./_components/MobileNavbar";

const spaceGrotesk = Space_Grotesk({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
	display: "swap",
});

export const metadata = {
	title: "Essien Joy | Portfolio",
	description: "Frontend developer portfolio",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={`${spaceGrotesk.className} dark:bg-primary-darkmode-black dark:text-primary-white bg-primary-grey text-primary-black`}>
				<ToggleProvider>
					<ToggleModeProvider>
						<MobileNavbar />
						<div className='line-layout max-w-[var(--container--main)] mx-auto '>
							<Header />
							<main>{children}</main>
							<Footer />
						</div>
						<Toaster />
					</ToggleModeProvider>
				</ToggleProvider>
			</body>
		</html>
	);
}
