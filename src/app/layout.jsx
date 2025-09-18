import "@/app/_styles/globals.css";
import { Space_Grotesk } from "next/font/google";
import { Toaster } from "react-hot-toast";

import Footer from "./_components/Footer";
import Header from "./_components/Header";

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
			<body className={`${spaceGrotesk.className} `}>
				<Header />

				<div className='line-layout max-w-[var(--cotainer--main)] mx-auto '>
					<main>{children}</main>
					<footer className='bg-primary-black text-primary-grey py-6 mt-6'>
						<Footer />
					</footer>
				</div>
				<Toaster />
			</body>
		</html>
	);
}
