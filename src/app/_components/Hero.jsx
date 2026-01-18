import Link from "@/app/_components/_ui/Link";
import Container from "./Container";
import { IoIosArrowForward } from "react-icons/io";
import { heroUrl } from "../_constants/data";

function Hero() {
	return (
		<Container
			className='mb-10 mt-30 relative  grid place-items-center '
			id='home'>
			<section className='   grid place-items-center text-3xl z-50'>
				<h1 className={`text-4xl sm:text-7xl font-medium text-center`}>
					✨ Hi, I’m Essien Joy.
				</h1>

				<p className='my-8 text-lg  sm:text-2xl  lg:w-[80%] text-center mx-auto'>
					I build and develop full-stack web applications with authentication
					and security in mind.
				</p>

				<div className='grid sm:grid-cols-2 gap-2 sm:gap-4 text-xl w-full sm:w-[450px] mx-auto'>
					{heroUrl.map((hero, index) => (
						<Link
							key={hero.url}
							className={`${
								index === heroUrl.length - 1 ? "sm:col-span-2" : ""
							} ${
								hero.url === "/projects"
									? "bg-primary-black text-white dark:bg-primary"
									: ""
							} flex justify-center gap-1 hover:gap-3`}
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
