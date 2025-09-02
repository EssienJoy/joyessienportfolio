import MuxPlayer from "@mux/mux-player-react";

import AboutMeFaq from "@/app/_components/AboutMeFaq";
import PhoneFrame from "@/app/_components/PhoneFrame";

import { createBlurUp } from "@mux/blurup";

const options = {};
const muxPlaybackId = process.env.NEXT_PUBLIC_MUX_PLAYBACK_ID_PORTFOLIO_VIDEO;

async function getPlaceholder() {
	const { blurDataURL, aspectRatio } = await createBlurUp(
		muxPlaybackId,
		options
	);
	return { blurDataURL, aspectRatio };
}

async function AboutMe() {
	const { blurDataURL, aspectRatio } = await getPlaceholder();

	return (
		<section id='aboutme' className='py-5'>
			<h2 className='text-3xl sm:text-4xl font-medium text-center mb-6'>
				About me
			</h2>

			<PhoneFrame>
				<MuxPlayer
					streamType='on-demand'
					playbackId={muxPlaybackId}
					metadataVideoTitle='Portfolio Video'
					thumbnailTime='2'
					className='w-full  video'
					placeholder={blurDataURL}
					style={{ aspectRatio }}
				/>
			</PhoneFrame>
			<AboutMeFaq />
		</section>
	);
}

export default AboutMe;
