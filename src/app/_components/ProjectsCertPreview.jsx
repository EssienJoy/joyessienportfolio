"use client";
import React, { useState } from "react";
import Link from "next/link";

import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { projects as data } from "../_data/projectDetails";
import { RiExternalLinkLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";

const CHAR_LIMIT = 50;

export const ProjectsCertPreview = () => {
	const [expandedIds, setExpandedIds] = useState({});
	const projects = data?.slice(0, 4);

	const toggleExpanded = (id) => {
		setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
	};

	return (
		<section className='my-10 flex gap-10'>
			<section className='w-1/2 space-y-5'>
				<div className='flex items-center justify-between'>
					<h2 className='text-2xl flex items-center gap-3 font-bold'>
						<GrProjects />
						<span>Projects</span>
					</h2>
					<Link className='flex items-center gap-2' href='/projects'>
						<span>View All</span>
						<MdKeyboardArrowRight />
					</Link>
				</div>

				<div>
					<ul className='grid grid-cols-2 gap-5'>
						{projects.map((proj) => {
							const isExpanded = expandedIds[proj.id];
							const isLong = proj.description.length > CHAR_LIMIT;
							const displayText =
								isExpanded || !isLong
									? proj.description
									: proj.description.slice(0, CHAR_LIMIT) + "...";

							return (
								<li
									key={proj.id}
									className='space-y-5 p-3 border dark:bg-[#140c29] border-primary-black dark:border-[#342752]  rounded-lg'>
									<h3 className='text-xl font-bold'>{proj.title}</h3>
									<p className='text-sm'>
										<span>{displayText}</span>
										{isLong && (
											<button
												onClick={() => toggleExpanded(proj.id)}
												className='text-blue-300  flex items-center gap-1 mt-1'>
												<span>{isExpanded ? "Read Less" : "Read more"}</span>
												<svg
													stroke='currentColor'
													fill='none'
													strokeWidth='2'
													viewBox='0 0 24 24'
													strokeLinecap='round'
													strokeLinejoin='round'
													className={`w-3 h-3 transition-transform ${isExpanded ? "rotate-180" : ""}`}
													height='1em'
													width='1em'
													xmlns='http://www.w3.org/2000/svg'>
													<polyline points='6 9 12 15 18 9'></polyline>
												</svg>
											</button>
										)}
									</p>
									<div className='flex gap-2 flex-wrap'>
										{proj.stack.map((stack) => (
											<p
												key={stack}
												className='text-center text-primary-white bg-primary-black p-1 rounded-sm text-sm dark:bg-primary'>
												{stack}
											</p>
										))}
									</div>

									<div className='flex justify-between items-center'>
										<Link
											href={proj.github}
											className='flex items-center gap-1'>
											<FiGithub />
											<span>Github</span>
										</Link>
										<Link href={proj.live} className='flex items-center gap-1'>
											<RiExternalLinkLine />
											<span>Live</span>
										</Link>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</section>

			<section>
				<div className='flex items-center justify-between'>
					<h2 className='text-2xl flex items-center gap-3 font-bold'>
						<AiOutlineSafetyCertificate />
						<span>Certificates</span>
					</h2>
				</div>
			</section>
		</section>
	);
};
