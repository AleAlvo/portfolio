"use client";

import React, { useState } from "react";
import { SpaceXLaunch } from "../page";
import { Button } from "@/components/ui/button";
import { SimpleBreadcrumb } from "@/components/ui/simple-breadcrumb";

interface ServerComponentDemoProps {
	serverData: SpaceXLaunch[] | null;
}

// Helper function to format date
function formatDate(dateString: string): string {
	const date = new Date(dateString);
	return date.toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
}

export function ServerComponentDemo({ serverData }: ServerComponentDemoProps) {
	const [showDetailedView, setShowDetailedView] = useState(false);

	// Handle empty state
	if (!serverData || serverData.length === 0) {
		return (
			<div className="space-y-4">
				<SimpleBreadcrumb
					crumbs={[
						{ label: "Data Fetching", href: "/showcase/data-fetching" },
						{ label: "Server Component Demo" },
					]}
					badge="'use client' + server data"
					className="mb-2 text-xs"
				/>
				<div className="text-center py-8 border-2 border-dashed border-gray-200 rounded-lg">
					<p className="text-muted-foreground">No launch data available.</p>
				</div>
			</div>
		);
	}

	return (
		<div className="space-y-4">
			<div className="flex justify-between items-start mb-4">
				<div>
					<SimpleBreadcrumb
						crumbs={[
							{ label: "Data Fetching", href: "/showcase/data-fetching" },
							{ label: "Server Component Demo" },
						]}
						badge="'use client' + server data"
						className="mb-2 text-xs"
					/>
					<h3 className="text-xl font-heading">SpaceX Launches</h3>
				</div>
				<Button
					variant="secondary"
					size="sm"
					onClick={() => setShowDetailedView(!showDetailedView)}
					className="text-xs">
					{showDetailedView ? "Simple View" : "Detailed View"}
				</Button>
			</div>

			{showDetailedView ? (
				<div className="space-y-4">
					{serverData.map((launch) => (
						<div
							key={launch.id}
							className="p-4 border-2 border-black rounded-lg neo-brutalism-outline hover:shadow-lg transition-shadow">
							<div className="flex flex-col sm:flex-row gap-4">
								{launch.links.mission_patch_small && (
									<div className="flex-shrink-0">
										<img
											src={launch.links.mission_patch_small}
											alt={`${launch.mission_name} patch`}
											className="w-16 h-16 object-contain"
										/>
									</div>
								)}
								<div className="flex-grow">
									<h4 className="font-heading text-lg">{launch.mission_name}</h4>
									<div className="text-sm text-muted-foreground mb-2">
										<span className="font-semibold">Launch Date:</span>{" "}
										{formatDate(launch.launch_date_utc)}
									</div>
									<div className="text-sm mb-3">
										<span className="font-semibold">Rocket:</span>{" "}
										{launch.rocket.rocket_name}
									</div>
									{launch.details && (
										<p className="text-sm text-muted-foreground line-clamp-3">
											{launch.details}
										</p>
									)}
									{launch.links.article_link && (
										<a
											href={launch.links.article_link}
											target="_blank"
											rel="noopener noreferrer"
											className="text-sm text-blue-600 hover:underline mt-2 inline-block">
											Read Article
										</a>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			) : (
				<div className="border-2 border-black rounded-lg overflow-hidden">
					<table className="min-w-full divide-y divide-gray-200">
						<thead className="bg-gray-50">
							<tr>
								<th
									scope="col"
									className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Mission
								</th>
								<th
									scope="col"
									className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Date
								</th>
								<th
									scope="col"
									className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Rocket
								</th>
							</tr>
						</thead>
						<tbody className="bg-white divide-y divide-gray-200">
							{serverData.map((launch) => (
								<tr key={launch.id} className="hover:bg-gray-50">
									<td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
										{launch.mission_name}
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										{formatDate(launch.launch_date_utc)}
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										{launch.rocket.rocket_name}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
}
