// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
// export const instant = false;

function page() {
	return (
		<section className='h-screen pt-[12rem]'>
			<p className='my-4 text-sm text-yellow-700 bg-yellow-50 border-l-4 border-yellow-400 p-3 pt-[] rounded'>
				⚠️ This project is currently linked externally or is undergoing a work
				in-progress, but will soon be available here on the website.
			</p>
		</section>
	);
}

export default page;
