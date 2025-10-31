import Link from "@/app/_ui/Link";

function Hero() {
	return (
		<section className=' grid mx-auto pt-[10rem] sm:pt-[12rem] ' id='home'>
			<section className='lg:w-[80%] mx-auto px-[var(--spacing-padding-inline)]'>
				<h1 className={`text-3xl sm:text-5xl font-medium `}>
					✨ Hi, I’m Essien Joy.
				</h1>

				<p className='my-[2rem] text-lg  sm:text-2xl '>
					A self-taught frontend web developer 💻 passionate about transforming
					concepts 💡 into sleek, interactive designs 🎨⚡
				</p>

				<div className='grid grid-cols-2 gap-4 text-xl '>
					<Link href='#projects'>View Projects</Link>
					<Link href='#aboutme'>About me</Link>
					<Link href='#skills'>My Skills</Link>
					<Link href='#socials'>View Socials</Link>
					<Link href='#contactme'>Contact me</Link>
					<Link href='/essien-joy-cv.pdf' download>
-						Download Cv
					</Link>
				</div>
			</section>
		</section>
	);
}

export default Hero;
