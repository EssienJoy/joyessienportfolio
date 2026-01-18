import Navbar from "@/app/_components/Navbar";
import ToggleModeBtn from "./ToggleModeBtn";
import MobileMenuButton from "./MobileMenuButton";
import Container from "./Container";
import Link from "next/link";

function Header() {
	return (
		<header className='bg-primary-black py-1 dark:bg-primary'>
			<Container>
				<nav className=' flex items-center justify-between rounded-3xl  dark:border-[#d96dfa4c] border-primary-black  p-2'>
					<Link
						href='/'
						className='grid place-items-center bg-[#b5b3b3ae] 
					px-1 rounded-sm text-sm uppercase
					'>
						ej
					</Link>

					<div className='flex items-center gap-3'>
						<Navbar />
						<MobileMenuButton />
						{/* <ToggleModeBtn /> */}
					</div>
				</nav>
			</Container>
		</header>
	);
}

export default Header;
