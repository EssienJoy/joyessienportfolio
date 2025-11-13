import MuxPlayer from "@mux/mux-player-react";
import { Suspense } from "react";

import AboutMeFaq from "@/app/_components/AboutMeFaq";
import PhoneFrame from "@/app/_components/PhoneFrame";

import { getBlurredPlaceholder } from "../_services/apidata";
import Spinner from "./Spinner";

async function AboutMe() {
	const options = {};
	const muxPlaybackId = process.env.NEXT_PUBLIC_MUX_PLAYBACK_ID_PORTFOLIO_VIDEO;

	const { blurDataURL, aspectRatio } = await getBlurredPlaceholder(
		muxPlaybackId,
		options
	);

	return (
		<section id='aboutme' className='py-5'>
			<h2 className='text-3xl sm:text-4xl font-medium text-center mb-6'>
				About me
			</h2>

			<Suspense fallback={<Spinner />}>
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
			</Suspense>
			<AboutMeFaq />
		</section>
	);
}

export default AboutMe;
