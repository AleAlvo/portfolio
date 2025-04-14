import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 neo-brutalism neo-brutalism-hover neo-brutalism-active",
	{
		variants: {
			variant: {
				default:
					"bg-white text-[hsl(var(--primary-foreground))] border-[hsl(var(--neo-shadow-color))]",
				destructive:
					"bg-[hsl(var(--destructive))] text-[hsl(var(--destructive-foreground))] border-[hsl(var(--neo-shadow-color))]",
				outline: "bg-[hsl(var(--background))] text-[hsl(var(--foreground))]",
				secondary: "bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))]",
				ghost:
					"hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))] shadow-none border-none",
				link: "text-[hsl(var(--primary))] underline-offset-4 hover:underline shadow-none border-none",
			},
			size: {
				default: "h-10 px-5 py-2",
				sm: "h-9 px-4 py-2",
				lg: "h-12 px-8 py-3",
				icon: "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";

export { Button, buttonVariants };
