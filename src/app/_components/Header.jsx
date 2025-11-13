import Navbar from "@/app/_components/Navbar";
import Logo from "@/app/_components/Logo";
import ToggleModeBtn from "./ToggleModeBtn";
import MobileMenuButton from "./MobileMenuButton";

function Header() {
	return (
		<header className='flex justify-between items-center py-5 px-[var(--spacing-padding-inline)]'>
			<Logo />
			<Navbar />

			<div className="flex items-center gap-3">
				<MobileMenuButton/>
				<ToggleModeBtn />
			</div>
		</header>
	);
}

export default Header;
