import { HiLink } from "react-icons/hi";
import { DiGithubBadge } from "react-icons/di";

import Link from "@/app/_ui/Link";

function ProjectSocials({ project }) {
	return (
		<div className='grid grid-cols-2 gap-4'>
			<Link href={project.live} target='_blank' rel='noopener noreferrer'>
				<span>Live</span>
				<HiLink size='1.5rem' />
			</Link>
			<Link href={project.github} target='_blank' rel='noopener noreferrer'>
				<span> GitHub</span>{" "}
				<DiGithubBadge className='shrink-0' size='1.5rem' />
			</Link>
		</div>
	);
}

export default ProjectSocials;
