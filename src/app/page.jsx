import Experience from "./_components/Experience";
import AboutMe from "./_components/AboutMe";
import Container from "./_components/Container";
import Skills from "./_components/Skills";
import Header from "./_components/Header";
// import Footer from "./_components/Footer";
import { ProjectsCertPreview } from "./_components/ProjectsCertPreview";

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Container>
					<section className='flex sm:flex-row flex-col gap-3 my-5'>
						<div className='sm:w-3/5'>
							<AboutMe />
							<Skills />
						</div>

						<div className='sm:w-2/5'>
							<Experience />
						</div>
					</section>

					<ProjectsCertPreview />
				</Container>
			</main>
		</>
	);
}
