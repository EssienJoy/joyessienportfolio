// import Navbar from "@/app/_components/Navbar";
// import ToggleModeBtn from "./ToggleModeBtn";
// import MobileMenuButton from "./MobileMenuButton";

import { IoMdLink } from "react-icons/io";
import Link from "./_ui/Link";
import Container from "./Container";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FiFileText } from "react-icons/fi";
import ToggleModeBtn from "./ToggleModeBtn";

function Header() {
	return (
		<header className='my-5'>
			<Container className='flex flex-col-reverse sm:flex-row gap-5'>
				<div className='flex flex-col items-center sm:flex-row gap-5 grow'>
					<div className='relative w-30 sm:w-40 h-30 sm:h-full  '>
						<Image
							src='/images/portfolio-image.png'
							fill
							alt='portfolio profile image'
							className='rounded-lg object-cover object-top'
						/>
					</div>

					<div>
						<h1
							className='font-bold text-lg sm:text-2xl flex items-center
						justify-center sm:justify-start gap-1'>
							<span>Essien Joy</span>
							<svg
								stroke='currentColor'
								fill='currentColor'
								strokeWidth='0'
								viewBox='0 0 24 24'
								class='hero-badge text-blue-500 w-4 h-4  md:w-5 md:h-5 shrink-0 '
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M10.007 2.10377C8.60544 1.65006 7.08181 2.28116 6.41156 3.59306L5.60578 5.17023C5.51004 5.35763 5.35763 5.51004 5.17023 5.60578L3.59306 6.41156C2.28116 7.08181 1.65006 8.60544 2.10377 10.007L2.64923 11.692C2.71404 11.8922 2.71404 12.1078 2.64923 12.308L2.10377 13.993C1.65006 15.3946 2.28116 16.9182 3.59306 17.5885L5.17023 18.3942C5.35763 18.49 5.51004 18.6424 5.60578 18.8298L6.41156 20.407C7.08181 21.7189 8.60544 22.35 10.007 21.8963L11.692 21.3508C11.8922 21.286 12.1078 21.286 12.308 21.3508L13.993 21.8963C15.3946 22.35 16.9182 21.7189 17.5885 20.407L18.3942 18.8298C18.49 18.6424 18.6424 18.49 18.8298 18.3942L20.407 17.5885C21.7189 16.9182 22.35 15.3946 21.8963 13.993L21.3508 12.308C21.286 12.1078 21.286 11.8922 21.3508 11.692L21.8963 10.007C22.35 8.60544 21.7189 7.08181 20.407 6.41156L18.8298 5.60578C18.6424 5.51004 18.49 5.35763 18.3942 5.17023L17.5885 3.59306C16.9182 2.28116 15.3946 1.65006 13.993 2.10377L12.308 2.64923C12.1078 2.71403 11.8922 2.71404 11.692 2.64923L10.007 2.10377ZM6.75977 11.7573L8.17399 10.343L11.0024 13.1715L16.6593 7.51465L18.0735 8.92886L11.0024 15.9999L6.75977 11.7573Z'></path>
							</svg>
						</h1>
						<p className='flex justify-center sm:justify-start  text-sm  items-center gap-1'>
							<CiLocationOn />
							<span> Lagos, Nigeria</span>
						</p>
						<p className='font-semibold sm:text-xl text-center sm:text-left'>
							Frontend Developer
						</p>

						<div className='flex gap-2 mt-5'>
							<Link
								href='/essien-joy-cv.pdf'
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center gap-3'
								variant='white'
								size='sm'>
								<FiFileText />
								<span>View Cv</span>
							</Link>

							<Link
								className='flex items-center gap-3'
								href='/contact'
								variant='filled'
								size='sm'>
								<CiMail size={16} />
								<span>Send Email</span>
							</Link>
						</div>
					</div>
				</div>

				<div className='flex flex-row-reverse sm:flex-col justify-between items-center sm:items-end'>
					<ToggleModeBtn />
					<Link
						className='flex items-center gap-3'
						variant='white'
						size='sm'
						href='https://github.com/EssienJoy/EssienJoy/blob/main/README.md'>
						<IoMdLink />
						<span children='hidden sm:block'>README.md</span>
					</Link>
				</div>
			</Container>
		</header>
	);
}

export default Header;
