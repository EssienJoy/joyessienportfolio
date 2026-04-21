import EmailCopy from "./CopyEmail";
import { socials, quickLinks } from "../_constants/data";
import { RiExternalLinkLine } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import Link from "next/link";
import Container from "./Container";

function Footer() {
	return (
		<footer className='  '>
			<Container className='' id='socials'>
				<div
					className='border-t flex flex-wrap gap-5 dark:border-[#342752] py-10
				 border-primary-black'>
					<nav className='grow'>
						<h2 className='text-xl font-bold flex items-center gap-3  my-3 '>
							<RiExternalLinkLine />
							<span>Social Links</span>
						</h2>
						<ul className='flex flex-col gap-3 '>
							{socials.map((social) => {
								const Icon = social.icon;
								return (
									<li key={social.text}>
										<Link
											href={social.href}
											target='_blank'
											rel='noopener noreferrer'
											aria-label={`4{social.text} Profile`}
											className='flex  gap-2 items-center border px-2 py-1 dark:bg-[#140c29] border-primary-black dark:border-[#342752]  rounded-md'>
											<Icon size='1rem' className='hover:scale-120 ' />
											<span>{social.text}</span>
										</Link>
									</li>
								);
							})}
						</ul>
					</nav>

					<nav className='grow'>
						<h2 className='text-xl font-bold flex items-center gap-2 my-3 '>
							<RiExternalLinkLine />
							<span>Quick Links</span>
						</h2>
						<ul className='flex flex-col gap-2'>
							{quickLinks?.map((link) => (
								<li
									className='
								border px-4 py-2 dark:bg-[#140c29] border-primary-black dark:border-[#342752] rounded-md
								'
									key={link.url}>
									<Link href={link.url}>{link.text}</Link>
								</li>
							))}
						</ul>
					</nav>
					<nav className='grow'>
						<h2 className='text-xl font-bold  my-3 flex items-center gap-2 '>
							<AiOutlineMessage />

							<span>Contacts</span>
						</h2>
						<ul className='flex flex-col gap-2'>
							<li className='border px-2 py-1 dark:bg-[#140c29] border-primary-black dark:border-[#342752]  rounded-md'>
								<Link href='/contact'>Contact</Link>
							</li>
							<li className='px-2 py-1 dark:bg-[#140c29] border border-primary-black dark:border-[#342752] rounded-md'>
								<EmailCopy />
								<p>essienjoyidaratechie@gmail.com</p>
							</li>
						</ul>
					</nav>
				</div>

				<div className='grid place-items-center py-5 border-t dark:border-[#342752] border-primary-black'>
					<p className='font-bold text-xl '>©2026 Essien Joy</p>
					<p className='text-sm'>All rights reserved.</p>
					{/* <ToggleModeBtn /> */}
				</div>
			</Container>
		</footer>
	);
}

export default Footer;

// **ESSIEN JOY IDARA**
// Frontend Developer
// 📍 Lagos, Nigeria
// 📧 [essienjoyidaratechie@gmail.com](mailto:essienjoyidaratechie@gmail.com) | 📞 +234 70590195490
// 🔗 LinkedIn: https://www.linkedin.com/in/essien-joy-838b3b23a/
// 🔗 GitHub: https://github.com/EssienJoy
// 🔗 Portfolio: https://joyessienportfolio.vercel.app/

// ---

// ### **PROFESSIONAL SUMMARY**

// Frontend developer passionate about building user-friendly interfaces and seamless web experiences. Skilled in developing API-driven applications with real-time features and efficient data integration.

// Experienced in collaborating with cross-functional teams, with strong communication and problem-solving abilities developed through professional work environments. Actively leveraging AI tools to improve productivity and accelerate learning.

// Currently seeking junior frontend developer opportunities to contribute to impactful projects while growing within a collaborative engineering team.

// ---

// ### **TECHNICAL SKILLS**

// **Frontend:** HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Next.js
// **Styling & UI:** Tailwind CSS, Sass
// **State Management:** Redux, Context API, TanStack Query
// **Backend & Database:** Node.js, Express.js, MongoDB, Mongoose, Supabase
// **Version Control:** Git, GitHub
// **Deployment:** Vercel, Netlify, Render

// ---

// ### **WORK EXPERIENCE**

// **Frontend Developer Intern**
// Campus Cart (Remote) | Nov 2025 – Dec 2025

// * Built and maintained user-facing features for an e-commerce platform using Next.js and TypeScript
// * Improved performance and usability through reusable component architecture and optimized rendering
// * Implemented global state management with Redux to manage cart operations and application state
// * Collaborated with designers and developers to debug issues and enhance user experience

// **Tech Stack:** Next.js, TypeScript, Redux, Tailwind CSS

// ---

// ### **PROJECTS**

// **Planner Management Application** | Jul 2025 – Present

// * Developed a full-stack planner app with authentication and scalable data handling
// * Designed RESTful APIs and implemented secure user authentication using JWT
// * Managed global state to ensure consistent UI and smooth user experience

// **Tech Stack:** React, Redux, Context API, React Router, Express.js, MongoDB, Mongoose, Tailwind CSS

// ---

// **Wild Oasis Booking App** | Jun 2025 – Sep 2025

// * Built a responsive hotel booking platform with modern UI/UX
// * Integrated Supabase for backend services including authentication and database management
// * Implemented Google OAuth for secure and seamless login

// **Tech Stack:** Next.js, Tailwind CSS, Supabase

// ---

// ### **EDUCATION**

// **University of Calabar**
// B.Sc. Botany | 2018 – 2022

// ---

// ### **CERTIFICATIONS & TRAINING**

// * The Complete JavaScript Course — Jonas Schmedtmann (Udemy)
// * The Ultimate React & Next.js Course — Jonas Schmedtmann (Udemy)
// * The Web Developer Bootcamp (HTML & CSS) — Colt Steele
// * Backend Development (Node.js, Express, MongoDB, Mongoose) — Jonas Schmedtmann (Udemy) | 2026

// ---

// ### **ADDITIONAL STRENGTHS**

// * Cross-functional collaboration
// * Strong communication skills
// * Fast learner with high adaptability
// * Passion for continuous learning and emerging technologies

// ---
