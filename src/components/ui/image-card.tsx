import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageCardProps extends React.HTMLAttributes<HTMLDivElement> {
	imageUrl: string;
	caption?: string;
	subtitle?: string;
	alt?: string;
	aspectRatio?: "square" | "video" | "wide" | "portrait" | "auto";
	className?: string;
	captionClassName?: string;
}

export function ImageCard({
	imageUrl,
	caption,
	subtitle,
	alt = "Image",
	aspectRatio = "square",
	className,
	captionClassName,
	...props
}: ImageCardProps) {
	const aspectRatioMap = {
		square: "aspect-square",
		video: "aspect-video",
		wide: "aspect-[16/9]",
		portrait: "aspect-[3/4]",
		auto: "aspect-auto",
	};

	return (
		<div
			className={cn(
				"group overflow-hidden rounded-md border-2 border-border bg-white shadow-shadow transition-all w-full",
				className,
			)}
			{...props}>
			<div
				className={cn(
					"relative h-[80%] w-full overflow-hidden",
					aspectRatio !== "auto" && aspectRatioMap[aspectRatio],
				)}>
				<Image
					src={imageUrl}
					alt={alt}
					fill
					className="object-cover transition-transform duration-300 group-hover:scale-105"
					style={{ objectPosition: "center 5%" }}
				/>
			</div>
			{(caption || subtitle) && (
				<div
					className={cn(
						"bg-primary-dark p-3 text-left h-[20%] flex flex-col justify-center w-full",
						captionClassName,
					)}>
					{caption && (
						<p className="text-xl font-black text-black font-heading leading-tight">
							{caption}
						</p>
					)}
					{subtitle && (
						<p className="text-xs font-medium text-black font-heading mt-1 leading-tight">
							{subtitle}
						</p>
					)}
				</div>
			)}
		</div>
	);
}

export default ImageCard;
