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
					I’m a frontend developer focused on building intuitive, user-friendly
					interfaces and seamless web experiences. I enjoy working on API-driven
					applications, especially those involving real-time features and data
					integration.
				</p>

				<p>
					Beyond technical skills, I bring strong collaboration and
					communication abilities developed through working with diverse teams.
					This has shaped how I approach problem-solving—with clarity,
					adaptability, and a user-first mindset.
				</p>

				<p>
					I actively leverage modern tools, including AI-assisted workflows, to
					improve efficiency and accelerate learning. I’m passionate about
					continuous growth and currently seeking opportunities where I can
					contribute, learn from experienced developers, and build meaningful
					products.
				</p>
			</div>
		</section>
	);
}

export default AboutMe;
