"use client";

import Link from "next/link";
import { FiHome } from "react-icons/fi";
import { PiSuitcaseSimple } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import { IoIosPaper } from "react-icons/io";
import { useToggle } from "./ToggleMenuContext";

function MobileNavbar() {
	const { toggleMenu, toggleMenuFalse } = useToggle();
	return (
		<>
			{toggleMenu && (
				<>
					<div
						onClick={toggleMenuFalse}
						className=' fixed inset-0 bg-black/50 z-90 block sm:hidden '></div>

					<nav className='fixed top-5 right-5 dark:text-primary-black bg-primary-grey w-[80px]  rounded-[1rem] block sm:hidden z-100 dark:border-[#424242] border-primary-black border-solid border p-4'>
						<ul className='flex flex-col items-center font-medium gap-5'>
							<li >
								<Link href='\'>
									<FiHome size='2rem' />
								</Link>
							</li>

							<li >
								<Link href='/projects'>
									<PiSuitcaseSimple size='2.5rem' title='view projects' />
								</Link>
							</li>

							<li >
								<Link  href='/about-me'>
									<FaRegUser size='2rem' title='About me' />
								</Link>
							</li>

							<li >
								<Link  href='/contact-me'>
									<MdAddCall size='2rem' title='contact me' />
								</Link>
							</li>

							<li >
								<Link
								
									href='/essien-joy-cv.pdf'
									target='_blank'
									rel='noopener noreferrer'>
									<IoIosPaper size='2rem' title='view resume or cv' />
								</Link>
							</li>
						</ul>
					</nav>
				</>
			)}
		</>
	);
}

export default MobileNavbar;
