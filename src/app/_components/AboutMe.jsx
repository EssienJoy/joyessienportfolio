import { GrContactInfo } from "react-icons/gr";

async function AboutMe() {
	return (
		<section id='aboutme'>
			<h2 className='text-2xl font-bold mb-5 flex items-center gap-3'>
				<GrContactInfo />
				<span>About</span>{" "}
			</h2>

			<div className='space-y-5'>
				<p>
					I am a Frontend Developer,focused on building responsive frontend web
					applications by combining desingn and user expereince. My primary
					tools are HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS.
				</p>
				<p>
					I enjoy turning ideas into interactive interfaces while continuously
					improving my understanding of modern frontend development and web
					performance.I'm currently expanding my skills by building real-world
					projects and exploring backend technologies to become a well-rounded
					full-stack developer.
				</p>

				<p>
					I'm open to remote internship and junior frontend opportunities where
					I can contribute, learn from experienced engineers, and continue
					growing.Outside of coding, I enjoy creating and editing, youtube
					videos.
				</p>
			</div>
		</section>
	);
}

export default AboutMe;
