import { DiGithubBadge } from "react-icons/di";

import Link from "@/app/_ui/Link";
import ProjectsList from "./ProjectsList";

function Projects() {
	return (
		<section id='projects' className='py-5 px-[var(--spacing-padding-inline)]'>
			<h2 className=' text-3xl sm:text-4xl font-medium text-center  my-5'>
				Projects
			</h2>

			<ProjectsList />

			<h2 className='flex items-center justify-around gap-2 sm:justify-center sm:gap-6 text-md  sm:text-2xl font-medium  '>
				<span>View other projects on </span>
				<Link
					href='https://github.com/EssienJoy?tab=repositories'
					target='_blank'
					rel='noopener noreferrer'>
					<span>Github</span>{" "}
					<DiGithubBadge className='shrink-0' size='1.5rem' />
				</Link>
			</h2>
		</section>
	);
}

export default Projects;
