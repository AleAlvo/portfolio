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
	// Check if a custom background color is provided in className
	const hasCustomBg =
		className &&
		(className.includes("bg-") ||
			className.includes("background") ||
			className.includes("--component-bg"));

	// Generate class order to ensure background colors take precedence
	const buttonClasses = cn(
		// Base neo-brutalism styles with configurable background
		"border-border border-2 h-12 w-12 p-0 rounded-md flex items-center justify-center neo-brutalism neo-brutalism-hover neo-brutalism-active",
		// Only apply default background if no custom background is provided
		!hasCustomBg && "bg-white",
		// Custom classes come last for higher specificity
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
