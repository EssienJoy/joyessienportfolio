import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Container, Link } from "@/components"

function Hero() {
	return (
		<Container className="pt-6 pb-8 sm:pt-10">
			<div className="relative overflow-hidden rounded-2xl border border-border bg-surface">
				<div className="absolute inset-0 lg:hidden">
					<Image
						src="/images/portfolio-image.png"
						alt=""
						fill
						priority
						sizes="(min-width: 1024px) 380px, 100vw"
						className="object-cover object-[50%_20%]"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20" />
				</div>

				<div className="relative flex min-h-[62svh] flex-col justify-end px-5 py-8 sm:px-8 sm:py-10 lg:grid lg:min-h-0 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:justify-normal lg:gap-10 lg:px-10 lg:py-12">
					<div>
						<p className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-primary dark:text-white">
							<span className="size-2 rounded-full bg-primary dark:bg-white" />
							Available for full-time roles &amp; freelance work
						</p>

						<h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-heading">
							Software Engineer
						</h1>

						<p className="mt-3 max-w-md text-pretty text-base leading-relaxed text-white/85 sm:text-lg lg:text-muted">
							With 1+ years of experience, I design and build
							fast, responsive websites — from first sketch to
							shipped code.
						</p>

						<div className="mt-6 flex flex-wrap gap-3">
							<Link href="#projects" size="lg">
								View projects
								<ArrowRight className="size-4" />
							</Link>

							<Link
								href="/reviews"
								size="lg"
								variant="outline"
								className="border-white/50 bg-white/10 text-white hover:bg-white/20 lg:border-border lg:bg-transparent lg:text-foreground lg:hover:bg-accent/40">
								Read reviews
							</Link>
						</div>
					</div>

					<div className="relative hidden aspect-[4/5] w-full overflow-hidden rounded-xl border border-border bg-surface lg:block">
						<Image
							src="/images/portfolio-image.png"
							alt="Essien Joy"
							fill
							priority
							sizes="(min-width: 1024px) 380px, 100vw"
							className="object-cover object-top"
						/>
					</div>
				</div>
			</div>
		</Container>
	)
}

export default Hero
