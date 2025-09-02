import MuxPlayer from "@mux/mux-player-react";
import LaptopFrame from "@/app/_components/LaptopFrame";
import { createBlurUp } from "@mux/blurup";

const options = {};

async function ProjectFeatures({ project }) {
	return (
		<>
			{await Promise.all(
				project.features?.map(async (feat, index) => {
					let blurData = { blurDataURL: "", aspectRatio: "16/9" };
					if (feat?.video) {
						blurData = await createBlurUp(feat.video, options);
					}

					return (
						<section key={index} className='my-8'>
							<div className='w-full sm:w-[80%] mx-auto'>
								<h2 className='text-3xl mb-3 font-medium'>Problem</h2>
								<p className='text-lg sm:text-xl'>{feat.problem}</p>
							</div>
							<LaptopFrame>
								{feat?.video && (
									<MuxPlayer
										streamType='on-demand'
										playbackId={feat.video}
										metadataVideoTitle={project.title}
										placeholder={blurData.blurDataURL}
										style={{ aspectRatio: blurData.aspectRatio }}
										className='w-full video'
									/>
								)}
							</LaptopFrame>
							<div className='w-full sm:w-[80%] mx-auto'>
								<h2 className='text-3xl mb-3 font-medium'>Solution</h2>
								<p className='text-lg sm:text-xl'>{feat.solution}</p>
							</div>
						</section>
					);
				})
			)}
		</>
	);
}

export default ProjectFeatures;
