import * as React from "react";
import { cn } from "@/lib/utils";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
	({ className, as = "h2", size = "xl", children, ...props }, ref) => {
		const Component = as;

		// Size mapping
		const sizeClasses = {
			xs: "text-xs",
			sm: "text-sm",
			md: "text-base",
			lg: "text-lg",
			xl: "text-xl",
			"2xl": "text-2xl",
			"3xl": "text-3xl",
			"4xl": "text-4xl",
		};

		return (
			<Component
				ref={ref}
				className={cn(
					"font-heading font-semibold", // Use the custom font variable
					sizeClasses[size],
					className,
				)}
				{...props}>
				{children}
			</Component>
		);
	},
);

Heading.displayName = "Heading";

export { Heading };
