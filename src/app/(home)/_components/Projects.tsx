import Image from "next/image"
import { AiOutlineCalendar } from "react-icons/ai"
import { RiExternalLinkLine } from "react-icons/ri"

import { Container, Link } from "@/components"
import { projects } from "@/lib/data/projectDetails"
import Reveal from "./Reveal"

const certificates = [
	{
		id: 1,
		title: "Node js, Express, Mongo Db & More: The Complete Bootcamp",
		issuer: "Udemy • Jonas Schmedtmann",
		date: "Jan 12th",
		image: "/images/jonasnodejs.jpg",
	},
	{
		id: 2,
		title: "Html and Css Bootcamp",
		issuer: "Udemy • Jonas Schmedtmann",
		date: "June 26th",
		image: "/images/htmlcssbootcamp.jpg",
	},
]

function Projects() {
	return (
		<section id="projects" className="my-20">
			<Container>
				<div className="max-w-3xl">
					<Reveal>
						<p
							className="inline-flex items-center gap-2 rounded-full
						 bg-accent px-4 py-1.5 text-sm font-medium text-primary
						  dark:text-white">
							<span
								className="size-2 rounded-full 
						dark:bg-white bg-primary"
							/>
							Helping others achieve success
						</p>
					</Reveal>

					<Reveal>
						<h2 className="text-balance text-3xl font-semibold tracking-tight text-heading sm:text-5xl">
							Recent Projects
						</h2>
					</Reveal>
				</div>

				<Reveal>
					<div className="mt-12 grid gap-6 sm:grid-cols-2">
						{projects.map((project) => (
							<article
								key={project.id}
								className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface">
								<figure className="relative aspect-video overflow-hidden">
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
									/>
								</figure>

								<div className="flex grow flex-col p-5">
									<h3 className="text-xl font-semibold text-heading">
										{project.title}
									</h3>

									<p className="mt-2 text-sm leading-relaxed text-muted">
										{project.description}
									</p>

									<div className="mt-4 flex flex-wrap gap-2">
										{project.stack?.map((tech) => (
											<span
												key={tech}
												className="rounded-full bg-foreground px-3 py-1 text-xs text-background">
												{tech}
											</span>
										))}
									</div>

									<Link
										href={project.live}
										target="_blank"
										rel="noopener noreferrer"
										variant="outline"
										size="sm"
										className="mt-5 w-full">
										View Live Project
										<RiExternalLinkLine />
									</Link>
								</div>
							</article>
						))}
					</div>
				</Reveal>
				<div className="mt-16">
					<div className="mx-auto max-w-3xl text-center">
						<p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary dark:text-foreground">
							Credentials
						</p>

						<h2 className="text-balance text-3xl font-semibold tracking-tight text-heading sm:text-5xl">
							Certificates
						</h2>
					</div>

					<div className="mt-10 grid gap-4 sm:grid-cols-2">
						{certificates.map((certificate) => (
							<article
								key={certificate.id}
								className="grid gap-5 rounded-xl border border-border bg-surface p-5 sm:grid-cols-2">
								<figure className="relative aspect-[4/3] overflow-hidden rounded-lg">
									<Image
										src={certificate.image}
										alt={certificate.title}
										fill
										className="object-cover"
									/>
								</figure>

								<div className="flex flex-col justify-center gap-4">
									<div>
										<h3 className="text-sm font-semibold text-heading">
											{certificate.title}
										</h3>

										<p className="mt-1 text-xs text-muted">
											{certificate.issuer}
										</p>
									</div>

									<div className="flex items-center gap-2 text-sm text-faint">
										<AiOutlineCalendar />
										{certificate.date}
									</div>
								</div>
							</article>
						))}
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Projects
