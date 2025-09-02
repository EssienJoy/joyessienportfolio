import MuxPlayer from "@mux/mux-player-react";

import AboutMeFaq from "@/app/_components/AboutMeFaq";
import PhoneFrame from "@/app/_components/PhoneFrame";

function AboutMe() {
	return (
		<section id='aboutme' className='py-5'>
			<h2 className='text-3xl sm:text-4xl font-medium text-center mb-6'>
				About me
			</h2>

			<PhoneFrame>
				<MuxPlayer
					streamType='on-demand'
					playbackId={process.env.NEXT_PUBLIC_MUX_PLAYBACK_ID_PORTFOLIO_VIDEO}
					metadataVideoTitle='My Demo Video'
					className='w-full  video'
				/>
			</PhoneFrame>
			<AboutMeFaq />
		</section>
	);
}

export default AboutMe;
