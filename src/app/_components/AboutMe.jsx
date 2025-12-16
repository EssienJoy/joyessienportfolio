import AboutMeFaq from "@/app/_components/AboutMeFaq";
import Container from "./Container";
import Link from "next/link";

async function AboutMe() {
	return (
		<Container id='aboutme' className='my-20'>
			<h2 className='text-3xl sm:text-5xl font-bold my-6'>About me</h2>

			<p className='text-4xl sm:text-5xl md:text-7xl uppercase font-bold my-20'>
				Explore the FAQs to <br className='hidden sm:block' /> learn more about
				me
			</p>

			<AboutMeFaq />
			<p className='my-5 text-center sm:text-right'>
				Feel free to send me an{" "}
				<Link className=' underline dark:text-primary-white' href='/contact-me'>
					email
				</Link>{" "}
				if you have any questions or opportunities to discuss.
			</p>
		</Container>
	);
}

export default AboutMe;
