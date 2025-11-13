import Image from "next/image";

function Navbar() {
	return (
		<figure className='relative w-15 h-15 border-2 border-primary-white border-solid rounded-full overflow-hidden'>
			<Image
				src='/images/icon.png'
				alt='profile image'
				fill
				className='object-cover object-top '
			/>
		</figure>
	);
}

export default Navbar;
