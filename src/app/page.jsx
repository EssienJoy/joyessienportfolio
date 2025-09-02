import AboutMe from "@/app/_components/AboutMe";
import Contactme from "@/app/_components/Contactme";
import Hero from "@/app/_components/Hero";
import Projects from "@/app/_components/Projects";
import Skills from "@/app/_components/Skills";
import ArrowToHome from "@/app/_components/ArrowToHome";

export default function Home() {
	return (
		<>
			<ArrowToHome />
			<Hero />
			<Projects />
			<Skills />
			<AboutMe />
			<Contactme />
		</>
	);
}
