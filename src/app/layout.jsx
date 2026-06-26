import "@/app/_styles/globals.css";
import { Space_Grotesk } from "next/font/google";
import { Toaster } from "react-hot-toast";

import { ToggleModeProvider } from "./_components/ToggleModeContext";
import { ToggleProvider } from "./_components/ToggleMenuContext";
import MobileNavbar from "./_components/MobileNavbar";
import { cookies } from "next/headers";
import Footer from "./_components/Footer";

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
				className={`overflow-x-hidden ${spaceGrotesk.className} text-[1rem] dark:bg-[#08001a] dark:text-primary-white  text-black`}>
				<ToggleProvider>
					<ToggleModeProvider>
						<MobileNavbar />
						{children}
						<Footer />

						<Toaster
							position='top-center'
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
	);
}
