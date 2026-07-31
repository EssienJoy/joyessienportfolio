import { DiGithubBadge } from "react-icons/di";

import Link from "@/app/_components/_ui/Link";
import ProjectsList from "../_components/ProjectsList";
// import OtherProjects from "../_components/OtherProjects";
import Container from "../_components/Container";
import { projects } from "../_data/projectDetails";
import ArrowToHome from "../_components/ArrowToHome";

export default async function Projects() {
	return (
		<Container id='projects' className='py-5'>
			<ArrowToHome />
			<h2 className='text-3xl sm:text-5xl text-center font-bold  my-6'>
				Projects
			</h2>

			<ProjectsList projects={projects} />

			{/* <OtherProjects /> */}

			<p className='flex items-center justify-around gap-2 sm:justify-center sm:gap-6 text-md  sm:text-2xl font-medium  '>
				<span>View all projects on </span>
				<Link
					className='gap-2'
					href='https://github.com/EssienJoy?tab=repositories'
					target='_blank'
					rel='noopener noreferrer'
					variant='filled'>
					<span>Github</span>{" "}
					<DiGithubBadge className='shrink-0' size='1.5rem' />
				</Link>
			</p>
		</Container>
	);
}
