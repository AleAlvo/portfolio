import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
	"inline-flex items-center justify-center rounded-base border-2 border-border px-2.5 py-0.5 font-base w-fit whitespace-nowrap shrink-0 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] overflow-hidden",
	{
		variants: {
			variant: {
				default: "bg-main text-main-foreground",
				neutral: "bg-secondary-background text-foreground",
			},
			size: {
				default: "text-xs [&>svg]:size-3 gap-1",
				sm: "text-[10px] px-1.5 py-0 [&>svg]:size-2.5 gap-0.5 border",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

interface BadgeProps
	extends React.ComponentProps<"span">,
		VariantProps<typeof badgeVariants> {
	asChild?: boolean;
	bgColor?: string;
	theme?:
		| "theme-primary"
		| "theme-primary-dark"
		| "theme-secondary"
		| "theme-secondary-dark"
		| "theme-tertiary"
		| "theme-tertiary-dark"
		| "theme-white";
}

function Badge({
	className,
	variant,
	size,
	asChild = false,
	bgColor,
	theme,
	...props
}: BadgeProps) {
	const Comp = asChild ? Slot : "span";

	return (
		<Comp
			data-slot="badge"
			className={cn(badgeVariants({ variant, size }), bgColor, theme, className)}
			{...props}
		/>
	);
}

export { Badge, badgeVariants, type BadgeProps };
