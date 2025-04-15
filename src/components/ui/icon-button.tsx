import * as React from "react";
import { cn } from "@/lib/utils";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	icon: React.ReactNode;
	href?: string;
	ariaLabel: string;
	className?: string;
	external?: boolean;
}

export function IconButton({
	icon,
	href,
	ariaLabel,
	className,
	external = true,
	...props
}: IconButtonProps) {
	const buttonClasses = cn(
		"border-border bg-white neo-brutalism neo-brutalism-hover neo-brutalism-active h-12 w-12 border-2 p-0 rounded-md flex items-center justify-center",
		className,
	);

	// If href is provided, render as an anchor tag
	if (href) {
		return (
			<a
				href={href}
				target={external ? "_blank" : undefined}
				rel={external ? "noopener noreferrer" : undefined}
				aria-label={ariaLabel}
				className={buttonClasses}>
				{icon}
				<span className="sr-only font-heading">{ariaLabel}</span>
			</a>
		);
	}

	// Otherwise, render as a button
	return (
		<button type="button" aria-label={ariaLabel} className={buttonClasses} {...props}>
			{icon}
			<span className="sr-only font-heading">{ariaLabel}</span>
		</button>
	);
}

export default IconButton;
