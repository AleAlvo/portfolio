import React from "react";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Badge, type BadgeProps } from "@/components/ui/badge";

export interface CrumbItem {
	label: string;
	href?: string;
}

interface SimpleBreadcrumbProps {
	crumbs: CrumbItem[];
	badge?: string;
	className?: string;
	textSize?: "xs" | "sm" | "base";
	badgeBgColor?: string;
	badgeTheme?: BadgeProps["theme"];
	badgeVariant?: BadgeProps["variant"];
}

export function SimpleBreadcrumb({
	crumbs,
	badge,
	className = "",
	textSize = "xs",
	badgeBgColor,
	badgeTheme,
	badgeVariant,
}: SimpleBreadcrumbProps) {
	const textSizeClass = {
		xs: "text-xs",
		sm: "text-sm",
		base: "text-base",
	}[textSize];

	return (
		<div className={`flex items-center gap-2 ${className}`}>
			<Breadcrumb>
				<BreadcrumbList className={textSizeClass}>
					{crumbs.map((crumb, index) => (
						<React.Fragment key={index}>
							{index > 0 && <BreadcrumbSeparator />}
							<BreadcrumbItem>
								{index === crumbs.length - 1 ? (
									<BreadcrumbPage>{crumb.label}</BreadcrumbPage>
								) : crumb.href ? (
									<BreadcrumbLink href={crumb.href}>{crumb.label}</BreadcrumbLink>
								) : (
									<BreadcrumbPage>{crumb.label}</BreadcrumbPage>
								)}
							</BreadcrumbItem>
						</React.Fragment>
					))}
				</BreadcrumbList>
			</Breadcrumb>
			{badge && (
				<Badge
					size="sm"
					className="ml-2"
					bgColor={badgeBgColor}
					theme={badgeTheme}
					variant={badgeVariant}>
					{badge}
				</Badge>
			)}
		</div>
	);
}
