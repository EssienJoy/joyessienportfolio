'use cache'
import Image from "next/image";

import ProjectOverview from "@/app/projectdetails/[id]/_components/ProjectOverview";
import ProjectDetails from "@/app/projectdetails/[id]/_components/ProjectDetails";
import ProjectArrowBack from "@/app/projectdetails/[id]/_components/ProjectArrowBack";
import ProjectNavigation from "@/app/projectdetails/[id]/_components/ProjectNavigation";
import ProjectSocials from "@/app/_components/ProjectSocials";
import ProjectFeatures from "@/app/projectdetails/[id]/_components/ProjectFeatures";
import { projects } from "@/app/api/projects/projects";

async function page({ params }) {
	const { id } = await params;
	const project = projects.find((proj) => proj.id === Number(id));

	const { title, image } = project;
	const maxLength = projects?.length || 5;

	return (
		<section className=' px-[var(--spacing-padding-inline)]'>
			{project.note && (
				<p className='my-4 text-sm text-yellow-700 bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded'>
					⚠️ {project?.note}
				</p>
			)}
			<ProjectArrowBack />
			<h2 className='text-3xl sm:text-5xl font-medium text-center'>{title}</h2>
			<ProjectOverview project={project} />
			<section className='bg-[#cbcbcb] backdrop-blur-[2px] drop-shadow-2xl rounded-3xl  p-3 sm:p-5 my-10'>
				<figure className='relative w-full h-[250px] sm:h-[500px]'>
					<Image
						src={image}
						quality={80}
						fill
						className='object-cover object-top rounded-2xl'
						alt={title + " Image"}
					/>
				</figure>
			</section>
			<ProjectDetails project={project} />
			<ProjectFeatures project={project} />

			<ProjectSocials project={project} />
			<ProjectNavigation project={project} projectLength={maxLength} />
		</section>
	);
}

export default page;
