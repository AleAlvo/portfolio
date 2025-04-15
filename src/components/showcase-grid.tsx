import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDatabase,
	faFilter,
	faBolt,
	faTableCellsLarge,
	faGlobe,
	faStar,
	faShield,
	faMicrochip,
	faPalette,
} from "@fortawesome/free-solid-svg-icons";
import { LinkCard } from "./link-card";

const showcaseItems = [
	{
		title: "Data Fetching",
		description: "Server components & React Query",
		href: "/projects",
		icon: (
			<FontAwesomeIcon icon={faDatabase} size="2x" className="h-8 w-8 sm:h-10 sm:w-10" />
		),
		isExternal: false,
	},
	{
		title: "Filtering",
		description: "Client-side & server-side filtering techniques",
		href: "/projects",
		icon: (
			<FontAwesomeIcon icon={faFilter} size="2x" className="h-8 w-8 sm:h-10 sm:w-10" />
		),
		isExternal: false,
	},
	{
		title: "Neobrutalism",
		description: "Modern design with bold aesthetics",
		href: "/",
		icon: (
			<FontAwesomeIcon icon={faPalette} size="2x" className="h-8 w-8 sm:h-10 sm:w-10" />
		),
		isExternal: false,
	},
	{
		title: "Performance",
		description: "Optimized loading & rendering",
		href: "/projects",
		icon: <FontAwesomeIcon icon={faBolt} size="2x" className="h-8 w-8 sm:h-10 sm:w-10" />,
		isExternal: false,
	},
	{
		title: "Layouts",
		description: "Responsive UI with App Router",
		href: "/about",
		icon: (
			<FontAwesomeIcon
				icon={faTableCellsLarge}
				size="2x"
				className="h-8 w-8 sm:h-10 sm:w-10"
			/>
		),
		isExternal: false,
	},
	{
		title: "Internationalization",
		description: "Multi-language support",
		href: "/about",
		icon: (
			<FontAwesomeIcon icon={faGlobe} size="2x" className="h-8 w-8 sm:h-10 sm:w-10" />
		),
		isExternal: false,
	},
	{
		title: "Animations",
		description: "Smooth UI transitions & effects",
		href: "/",
		icon: <FontAwesomeIcon icon={faStar} size="2x" className="h-8 w-8 sm:h-10 sm:w-10" />,
		isExternal: false,
	},
	{
		title: "TypeScript",
		description: "Type-safe development",
		href: "/projects",
		icon: (
			<FontAwesomeIcon icon={faShield} size="2x" className="h-8 w-8 sm:h-10 sm:w-10" />
		),
		isExternal: false,
	},
	{
		title: "Edge Rendering",
		description: "Next.js edge runtime optimization",
		href: "/projects",
		icon: (
			<FontAwesomeIcon icon={faMicrochip} size="2x" className="h-8 w-8 sm:h-10 sm:w-10" />
		),
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
