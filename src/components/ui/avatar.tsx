import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
	src: string;
	alt: string;
	size?: number;
	className?: string;
}

export function Avatar({ src, alt, size = 200, className, ...props }: AvatarProps) {
	return (
		<div
			className={cn(
				"relative overflow-hidden rounded-full border-2 border-border bg-white shadow-shadow neo-brutalism",
				className,
			)}
			style={{ width: size, height: size }}
			{...props}>
			<Image
				src={src}
				alt={alt}
				fill
				className="object-cover"
				style={{ objectPosition: "center 5%" }}
			/>
		</div>
	);
}

export default Avatar;
