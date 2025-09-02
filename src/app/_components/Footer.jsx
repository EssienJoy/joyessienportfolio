import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";

function Footer() {
	return (
		<div
			className='flex flex-col items-center justify-center gap-4 font-medium text-lg'
			id='socials'>
			<p className='text-sm'>©2025 Essien Joy</p>

			<aside className='flex justify-center items-center gap-6'>
				<Link
					href='essienjoyidaratechie@gmail.com'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='Email'>
					<BiLogoGmail size='2rem' />
				</Link>

				<Link
					href='https://www.linkedin.com/in/essien-joy-838b3b23a/'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='Linkedin Profile'>
					<FaLinkedin size='2rem' />
				</Link>

				<Link
					href='https://github.com/EssienJoy'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='GitHub Profile'>
					<FaGithub size='2rem' />
				</Link>

				<Link
					href='https://x.com/jojoisatechbaby'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='Twitter Profile'>
					<FaSquareXTwitter size='2rem' />
				</Link>
			</aside>
		</div>
	);
}

export default Footer;
