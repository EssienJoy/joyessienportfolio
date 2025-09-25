"use client";
import Image from "next/image";
import Link from "next/link";
import { otherProjects as data } from "../_data/projectDetails";
import ToggleOtherProjects from "./ToggleOtherProjects";
import { useState } from "react";

export default function OtherProjects() {
	const [expanded, setExpanded] = useState(false);

	const visibleProjects = expanded ? data : data.slice(0, 2) || data;

	return (
		<section className='my-10 '>
			<ToggleOtherProjects setExpanded={setExpanded} expanded={expanded} />
			<ul className='grid md:grid-cols-2 gap-5'>
				{visibleProjects.map((project, i) => (
					<li
						key={i}
						className='self-start flex flex-col rounded-3xl shadow-2xl overflow-hidden'>
						<div className='bg-[#cbcbcb] backdrop-blur-[2px] p-4 lg:p-8'>
							<Link
								href={project.link}
								target='_blank'
								rel='noopener noreferrer'>
								<figure className='relative h-[200px] sm:h-[300px] lg:h-[250px]'>
									<Image
										src={project.image}
										quality={80}
										fill
										className='object-cover object-top rounded-2xl'
										alt={`${project.title} screenshot`}
										placeholder='blur'
									/>
								</figure>
							</Link>
						</div>

						<div className=' grid grid-cols-2 gap-3 p-5 border backdrop-blur-[2px] border-[#cbcbcb] rounded-b-3xl'>
							{project.stack.map((stack, idx) => (
								<p
									key={idx}
									className='text-center border border-primary-black p-2 bg-black text-primary-grey '>
									{stack}
								</p>
							))}
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
