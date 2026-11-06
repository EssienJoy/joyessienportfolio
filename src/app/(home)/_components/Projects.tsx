"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Eye, ExternalLink, X } from "lucide-react"
import { FaGithub } from "react-icons/fa6"

import { Container, buttonVariants } from "@/components"
import { projects } from "@/lib/data/projectDetails"

type Project = (typeof projects)[number]

function Projects() {
	const [activeProject, setActiveProject] = useState<Project | null>(null)

	useEffect(() => {
		if (!activeProject) return

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") setActiveProject(null)
		}

		const previousOverflow = document.body.style.overflow
		document.body.style.overflow = "hidden"
		window.addEventListener("keydown", onKeyDown)

		return () => {
			document.body.style.overflow = previousOverflow
			window.removeEventListener("keydown", onKeyDown)
		}
	}, [activeProject])

	return (
		<section id="projects" className="py-14 sm:py-16">
			<Container>
				<div className="max-w-2xl">
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
						Selected work
					</p>

					<h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
						Projects
					</h2>

					<p className="mt-3 text-muted">
						A few things I&apos;ve built. Tap the eye icon for
						details, or open the live site and code directly.
					</p>
				</div>

				<div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5">
					{projects.map((project) => (
						<article
							key={project.id}
							className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-accent">
							<div className="relative aspect-video overflow-hidden border-b border-border">
								<Image
									src={project.image}
									alt={project.title}
									fill
									sizes="50vw"
									className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
								/>
							</div>

							<div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 p-2.5 sm:p-4">
								<div className="flex w-full min-w-0 items-center justify-between gap-2 sm:w-auto sm:flex-1">
									<h3 className="truncate text-sm font-semibold text-heading sm:text-lg">
										{project.title}
									</h3>

									<button
										type="button"
										onClick={() =>
											setActiveProject(project)
										}
										aria-label={`View details for ${project.title}`}
										aria-haspopup="dialog"
										title="View details"
										className="inline-flex size-7 shrink-0 items-center justify-center rounded-md text-muted transition-colors hover:bg-accent/20 hover:text-heading sm:size-8">
										<Eye className="size-3.5 sm:size-4" />
									</button>
								</div>

								<div className="ml-auto flex shrink-0 items-center gap-0.5">
									{project.github && (
										<a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={`${project.title} code on GitHub`}
											title="View code"
											className="inline-flex size-7 items-center justify-center rounded-md text-muted transition-colors hover:bg-accent/20 hover:text-heading sm:size-8">
											<FaGithub className="size-3.5 sm:size-4" />
										</a>
									)}

									<a
										href={project.live}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={`${project.title} live site`}
										title="Open live site"
										className="inline-flex size-7 items-center justify-center rounded-md bg-accent text-primary shadow-sm transition-colors hover:bg-accent/90 dark:text-white sm:size-8">
										<ExternalLink className="size-3.5 sm:size-4" />
									</a>
								</div>
							</div>
						</article>
					))}
				</div>
			</Container>

			{activeProject && (
				<div
					className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
					onClick={() => setActiveProject(null)}>
					<div
						role="dialog"
						aria-modal="true"
						aria-labelledby="project-dialog-title"
						className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-background shadow-2xl"
						onClick={(event) => event.stopPropagation()}>
						<button
							type="button"
							onClick={() => setActiveProject(null)}
							aria-label="Close project details"
							autoFocus
							className="absolute right-3 top-3 z-10 inline-flex size-9 items-center justify-center rounded-full bg-background/90 text-heading shadow-sm transition-colors hover:bg-accent hover:text-primary dark:hover:text-white">
							<X className="size-5" />
						</button>

						<div className="relative aspect-video w-full overflow-hidden border-b border-border">
							<Image
								src={activeProject.image}
								alt={activeProject.title}
								fill
								sizes="(min-width: 768px) 672px, 100vw"
								className="object-cover object-top"
							/>
						</div>

						<div className="p-5 sm:p-6">
							<h3
								id="project-dialog-title"
								className="text-2xl font-semibold tracking-tight text-heading">
								{activeProject.title}
							</h3>

							<p className="mt-1 text-sm text-muted">
								{activeProject.info}
							</p>

							<p className="mt-4 text-sm leading-relaxed text-muted">
								{activeProject.description}
							</p>

							<div className="mt-5">
								<p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
									Stack
								</p>

								<div className="mt-2 flex flex-wrap gap-1.5">
									{activeProject.stack?.map((tech) => (
										<span
											key={tech}
											className="rounded-full bg-accent/15 px-2.5 py-1 text-xs text-primary dark:text-foreground">
											{tech}
										</span>
									))}
								</div>
							</div>

							<div className="mt-6 flex flex-col gap-2 sm:flex-row">
								<a
									href={activeProject.live}
									target="_blank"
									rel="noopener noreferrer"
									className={buttonVariants({ size: "lg" })}>
									<ExternalLink className="size-4" />
									Live site
								</a>

								{activeProject.github && (
									<a
										href={activeProject.github}
										target="_blank"
										rel="noopener noreferrer"
										className={buttonVariants({
											size: "lg",
											variant: "outline",
										})}>
										<FaGithub className="size-4" />
										View code
									</a>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
		</section>
	)
}

export default Projects
