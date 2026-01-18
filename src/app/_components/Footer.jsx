import EmailCopy from "./CopyEmail";
import { socials, quickLinks } from "../_constants/data";
import Link from "next/link";
import Container from "./Container";
import ToggleModeBtn from "./ToggleModeBtn";

function Footer() {
	return (
		<footer className=' text-primary-white py-3 mt-5 bg-primary-black dark:bg-primary'>
			<Container className='' id='socials'>
				<div className='flex justify-between gap-10 flex-wrap'>
					<nav>
						<h2 className='text-2xl font-bold  my-3 '>Quick Links</h2>
						<ul>
							{quickLinks?.map((link) => (
								<li key={link.url}>
									<Link href={link.url}>{link.text}</Link>
								</li>
							))}
						</ul>
					</nav>
					<nav>
						<h2 className='text-2xl font-bold  my-3 '>Contacts</h2>
						<ul>
							<li>
								<Link href='/contact'>Contact</Link>
							</li>
						</ul>
						<EmailCopy />
					</nav>
					<nav>
						<h2 className='text-2xl font-bold  my-3 '>Socials</h2>
						<ul className='flex flex-col '>
							{socials.map((social) => {
								const Icon = social.icon;
								return (
									<li key={social.text}>
										<Link
											href={social.href}
											target='_blank'
											rel='noopener noreferrer'
											aria-label={`4{social.text} Profile`}
											className='flex  gap-2 items-center'>
											<Icon size='1rem' className='hover:scale-120 ' />
											<span>{social.text}</span>
										</Link>
									</li>
								);
							})}
						</ul>
					</nav>
				</div>

				<div className='flex  items-center justify-between mt-5'>
					<p className='text-sm '>©2025 Essien Joy</p>
					<ToggleModeBtn />
				</div>
			</Container>
		</footer>
	);
}

export default Footer;
