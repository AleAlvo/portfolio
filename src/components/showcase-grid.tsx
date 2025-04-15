import React from "react";
import {
	Cpu,
	Database,
	Filter,
	Globe,
	Layout,
	Palette,
	Shield,
	Sparkles,
	Zap,
} from "lucide-react";
import { LinkCard } from "./link-card";

const showcaseItems = [
	{
		title: "Data Fetching",
		description: "Server components & React Query",
		href: "/projects",
		icon: Database,
		isExternal: false,
	},
	{
		title: "Filtering",
		description: "Client-side & server-side filtering techniques",
		href: "/projects",
		icon: Filter,
		isExternal: false,
	},
	{
		title: "Neobrutalism",
		description: "Modern design with bold aesthetics",
		href: "/",
		icon: Palette,
		isExternal: false,
	},
	{
		title: "Performance",
		description: "Optimized loading & rendering",
		href: "/projects",
		icon: Zap,
		isExternal: false,
	},
	{
		title: "Layouts",
		description: "Responsive UI with App Router",
		href: "/about",
		icon: Layout,
		isExternal: false,
	},
	{
		title: "Internationalization",
		description: "Multi-language support",
		href: "/about",
		icon: Globe,
		isExternal: false,
	},
	{
		title: "Animations",
		description: "Smooth UI transitions & effects",
		href: "/",
		icon: Sparkles,
		isExternal: false,
	},
	{
		title: "TypeScript",
		description: "Type-safe development",
		href: "/projects",
		icon: Shield,
		isExternal: false,
	},
	{
		title: "Edge Rendering",
		description: "Next.js edge runtime optimization",
		href: "/projects",
		icon: Cpu,
		isExternal: false,
	},
];

export function ShowcaseGrid() {
	return (
		<div className="w-full xl:w-[70%] xl:pl-8">
			<div className="text-foreground grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:pb-16">
				{showcaseItems.map((item) => (
					<LinkCard
						key={item.title}
						title={item.title}
						description={item.description}
						href={item.href}
						icon={item.icon}
						isExternal={item.isExternal}
					/>
				))}
			</div>
		</div>
	);
}
