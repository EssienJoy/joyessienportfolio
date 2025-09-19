import Link from "next/link";
import { FiHome } from "react-icons/fi";
import { PiSuitcaseSimple } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import { IoIosPaper } from "react-icons/io";

function Navbar() {
	return (
		<nav className='shadow-xl rounded-[1rem] backdrop-blur-[1px]  border-primary-black border-solid border mx-auto w-[19rem] py-4 sm:py-5 sm:w-[25rem]'>
			<ul className='flex items-center justify-center font-medium  text-xl gap-5 sm:gap-10'>
				<li>
					<Link href='\'>
						<FiHome size='2rem' />
					</Link>
				</li>

				<li>
					<Link href='\#projects'>
						<PiSuitcaseSimple size='2.5rem' title='view projects' />
					</Link>
				</li>

				<li>
					<Link href='\#aboutme'>
						<FaRegUser size='2rem' title='About me' />
					</Link>
				</li>

				<li>
					<Link href='\#contactme'>
						<MdAddCall size='2rem' title='contact me' />
					</Link>
				</li>

				<li>
					<Link href='/ESSIEN-JOY-PDF.pdf'>
						<IoIosPaper size='2rem' title='download resume or cv' />
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
