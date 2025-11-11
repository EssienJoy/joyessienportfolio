import Link from "next/link";
import { FiHome } from "react-icons/fi";
import { PiSuitcaseSimple } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import { IoIosPaper } from "react-icons/io";

function Navbar() {
	return (
		<nav className='  rounded-[1rem] hidden sm:block  dark:border-[#424242] border-primary-black border-solid border p-4'>
			<ul className='flex items-center justify-center font-medium  text-xl gap-5 sm:gap-10'>
				<li className='hover:scale-110 transition-all'>
					<Link href='\'>
						<FiHome size='2rem' />
					</Link>
				</li>

				<li className='hover:scale-110 transition-all'>
					<Link href='/projects'>
						<PiSuitcaseSimple size='2.5rem' title='view projects' />
					</Link>
				</li>

				<li className='hover:scale-110 transition-all'>
					<Link href='/about-me'>
						<FaRegUser size='2rem' title='About me' />
					</Link>
				</li>

				<li className='hover:scale-110 transition-all'>
					<Link href='/contact-me'>
						<MdAddCall size='2rem' title='contact me' />
					</Link>
				</li>

				<li className='hover:scale-110 transition-all'>
					<Link
						href='/essien-joy-cv.pdf'
						target='_blank'
						rel='noopener noreferrer'>
						<IoIosPaper size='2rem' title='view resume or cv' />
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
