import EmailCopy from "./CopyEmail";
import { socials, quickLinks } from "../_constants/data";
import Link from "next/link";
import Container from "./Container";

function Footer() {
	return (
		<footer className=' text-primary-white py-6 mt-10 bg-primary-black dark:bg-primary'>
			<Container className='' id='socials'>
				<div className='flex justify-between gap-5 flex-wrap'>
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
						<ul className='flex flex-col gap-3'>
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

				<p className='text-sm text-center mt-10'>©2025 Essien Joy</p>
			</Container>
		</footer>
	);
}

export default Footer;
