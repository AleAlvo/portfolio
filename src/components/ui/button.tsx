import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-black uppercase transition-all disabled:pointer-events-none disabled:opacity-50 neo-brutalism neo-brutalism-hover neo-brutalism-active rounded-md font-heading",
	{
		variants: {
			variant: {
				default: "bg-junior-dark border-black text-black",
				secondary: "bg-mid-dark border-black text-black",
				tertiary: "bg-senior-dark border-black text-black",
				destructive: "bg-error border-black text-black",
				ghost: "bg-white/30 text-foreground border-none",
				info: "bg-info border-black text-black",
				success: "bg-success border-black text-black",
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
