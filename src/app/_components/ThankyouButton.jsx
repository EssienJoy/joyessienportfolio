"use client";

import { useRouter } from "next/navigation";
import Button from "@/app/_ui/Button";

function ThankYouButton() {
	const router = useRouter();

	return (
		<Button
			className=' bg-primary-black text-primary-grey py-3 px-6 font-medium text-2xl rounded-2xl'
			onClick={() => router.push("/")}>
			Home
		</Button>
	);
}

export default ThankYouButton;
