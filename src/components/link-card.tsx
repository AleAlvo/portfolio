import React from "react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface LinkCardProps {
	title: string;
	description?: string;
	href: string;
	icon: LucideIcon;
	isExternal?: boolean;
}

export function LinkCard({
	title,
	description,
	href,
	icon: Icon,
	isExternal = false,
}: LinkCardProps) {
	const CardComponent = (
		<div
			className="border-border shadow-shadow text-foreground rounded-md hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none border-2 p-5 transition-all cursor-pointer h-full flex flex-col"
			style={{ backgroundColor: "var(--primary-dark)" }}>
			<div className="flex items-start justify-between">
				<Icon className="h-8 w-8 sm:h-10 sm:w-10" />
			</div>
			<div className="mt-3">
				<div className="h-[2.25rem] sm:h-[2.5rem] flex items-end">
					<h3
						className={`font-heading font-bold uppercase text-[length:var(--responsive-font-size,1.125rem)] sm:text-[length:var(--responsive-font-size,1.25rem)] leading-tight`}
						style={
							{
								"--responsive-font-size": title.length > 15 ? "0.8rem" : "1.125rem",
							} as React.CSSProperties
						}>
						{title}
					</h3>
				</div>
				{description && (
					<p className="font-heading mt-1 text-xs sm:text-sm">{description}</p>
				)}
			</div>
		</div>
	);

	if (isExternal) {
		return (
			<a href={href} target="_blank" rel="noopener noreferrer">
				{CardComponent}
			</a>
		);
	}

	return <Link href={href}>{CardComponent}</Link>;
}
