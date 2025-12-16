import Navbar from "@/app/_components/Navbar";
import ToggleModeBtn from "./ToggleModeBtn";
import MobileMenuButton from "./MobileMenuButton";
import Container from "./Container";
import { socials } from "../_constants/data";
import Link from "next/link";

function Header() {
	return (
		<header>
			<nav className=' text-primary-white  bg-primary-black dark:bg-primary'>
				<Container className='flex justify-between items-center font-bold gap-1  py-3 '>
					<Link href='/contact' className='sm:mx-auto text-sm tracking-widest'>
						Send a detailed message
					</Link>
					<ul className='flex gap-3 items-center '>
						{socials.map((social) => {
							const Icon = social.icon;
							return (
								<li key={social.text}>
									<Link
										href={social.href}
										target='_blank'
										rel='noopener noreferrer'
										aria-label={`4{social.text} Profile`}>
										<Icon size='1.5rem' className='hover:scale-120 ' />
									</Link>
								</li>
							);
						})}
					</ul>
				</Container>
			</nav>

			<Container>
				<nav className='my-5 sm:my-10 flex items-center justify-between rounded-3xl  dark:border-[#d96dfa4c] border-primary-black border-solid border px-4 py-4 sm:py-7'>
					<button>
						<svg
							className='fill-primary-black dark:fill-primary-white w-7 h-7'
							version='1.1'
							id='Layer_1'
							xmlns='http://www.w3.org/2000/svg'
							xmlnsXlink='http://www.w3.org/1999/xlink'
							viewBox='0 0 32 32'
							enableBackground='new 0 0 32 32'
							xmlSpace='preserve'
							fill='#000000'>
							<g id='SVGRepoBgCarrier' strokeWidth='0'></g>
							<g
								id='SVGRepoTracerCarrier'
								strokeLinecap='round'
								strokeLinejoin='round'></g>
							<g id='SVGRepoIconCarrier'>
								{" "}
								<g>
									{" "}
									<path d='M30.5,0h-29C0.673,0,0,0.673,0,1.5v8C0,10.327,0.673,11,1.5,11h29c0.827,0,1.5-0.673,1.5-1.5v-8 C32,0.673,31.327,0,30.5,0z M31,9.5c0,0.275-0.225,0.5-0.5,0.5h-29C1.225,10,1,9.775,1,9.5v-8C1,1.225,1.225,1,1.5,1h29 C30.775,1,31,1.225,31,1.5V9.5z'></path>{" "}
									<path d='M31.5,12.5c-0.276,0-0.5,0.224-0.5,0.5v17.5c0,0.275-0.225,0.5-0.5,0.5h-29C1.225,31,1,30.775,1,30.5V13 c0-0.276-0.224-0.5-0.5-0.5S0,12.724,0,13v17.5C0,31.327,0.673,32,1.5,32h29c0.827,0,1.5-0.673,1.5-1.5V13 C32,12.724,31.776,12.5,31.5,12.5z'></path>{" "}
									<path d='M13.5,27c0.827,0,1.5-0.673,1.5-1.5v-8c0-0.827-0.673-1.5-1.5-1.5h-8C4.673,16,4,16.673,4,17.5v8 C4,26.327,4.673,27,5.5,27H13.5z M5,25.5v-8C5,17.225,5.225,17,5.5,17h8c0.275,0,0.5,0.225,0.5,0.5v8c0,0.275-0.225,0.5-0.5,0.5h-8 C5.225,26,5,25.775,5,25.5z'></path>{" "}
									<path d='M18,18h9c0.276,0,0.5-0.224,0.5-0.5S27.276,17,27,17h-9c-0.276,0-0.5,0.224-0.5,0.5S17.724,18,18,18z'></path>{" "}
									<path d='M18,22h9c0.276,0,0.5-0.224,0.5-0.5S27.276,21,27,21h-9c-0.276,0-0.5,0.224-0.5,0.5S17.724,22,18,22z'></path>{" "}
									<path d='M18,26h9c0.276,0,0.5-0.224,0.5-0.5S27.276,25,27,25h-9c-0.276,0-0.5,0.224-0.5,0.5S17.724,26,18,26z'></path>{" "}
								</g>{" "}
							</g>
						</svg>
					</button>

					<Navbar />

					<div className='flex items-center gap-3'>
						<MobileMenuButton />
						<ToggleModeBtn />
					</div>
				</nav>
			</Container>
		</header>
	);
}

export default Header;
