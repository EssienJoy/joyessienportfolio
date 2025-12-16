"use client";
import { useRouter } from "next/navigation";
import { IoIosArrowRoundBack } from "react-icons/io";

import Button from "@/app/_components/_ui/Button";

function ArrowBack() {
	const router = useRouter();
	return (
		<Button className='p-1 ' onClick={() => router.back()}>
			<IoIosArrowRoundBack
				size='2rem'
				className='text-primary-black dark:text-primary-white'
			/>
		</Button>
	);
}

export default ArrowBack;
