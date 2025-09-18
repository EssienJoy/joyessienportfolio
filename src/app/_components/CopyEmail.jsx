"use client";

import { BiLogoGmail } from "react-icons/bi";
import toast from "react-hot-toast";

export default function EmailCopy() {
	const email = "essienjoyidaratechie@gmail.com";

	const handleCopy = async () => {
		await navigator.clipboard.writeText(email);
		toast.success("Email copied!");
	};

	return (
		<button
			onClick={handleCopy}
			aria-label='Copy Email'
			className='cursor-pointer'>
			<BiLogoGmail size='2rem' />
		</button>
	);
}
