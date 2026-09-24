"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

function ThankYouButton() {
	const router = useRouter();

	return <Button onClick={() => router.push("/")}>Home</Button>;
}

export default ThankYouButton;
