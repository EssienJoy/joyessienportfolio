import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
	title: string;
	icon?: ReactNode;
	className?: string;
};

function SectionHeading({ title, icon, className }: SectionHeadingProps) {
	return (
		<h2
			className={cn(
				"flex items-center gap-3 text-2xl font-bold text-heading mb-6",
				className,
			)}>
			{icon}
			<span>{title}</span>
		</h2>
	);
}

export default SectionHeading;