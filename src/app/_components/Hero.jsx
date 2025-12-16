import Link from "@/app/_components/_ui/Link";
import Container from "./Container";
import { IoIosArrowForward } from "react-icons/io";
import { heroUrl } from "../_constants/data";
import Blob from "./Blob";

function Hero() {
	return (
		<Container className='my-5 sm:py-10 relative ' id='home'>
			{/* <Blob className='top-[5%] -right-[35%] absolute w-[550px] h-[550px]' /> */}
			<h1 className='text-4xl sm:text-6xl font-bold my-7 tracking-tight'>
				Frontend Web <br /> Developer
			</h1>
			<section className='lg:w-[80%] mx-auto   grid place-items-center '>
				<h2 className={`text-3xl sm:text-5xl font-medium sm:text-center`}>
					✨ Hi, I’m Essien Joy.
				</h2>

				<p className='my-8 text-lg  sm:text-2xl  lg:w-[80%] sm:text-center mx-auto'>
					I create interactive, responsive user interfaces that turn clean
					designs into functional, user-friendly products 🎨⚡
				</p>

				<div className='grid sm:grid-cols-2 gap-4 text-xl max-w-[450px] mx-auto'>
					{heroUrl.map((hero, index) => (
						<Link
							key={hero.url}
							className={` flex justify-center gap-1 hover:gap-3`}
							href={hero.url}>
							<span>{hero.text}</span>
							<span>
								<IoIosArrowForward />
							</span>
						</Link>
					))}
				</div>
			</section>
		</Container>
	);
}

export default Hero;
