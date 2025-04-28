"use client";

import React, { useState } from "react";
import { SpaceXLaunch } from "@/app/showcase/data-fetching/page";
import { SimpleBreadcrumb } from "@/components/ui/simple-breadcrumb";
import Image from "next/image";

export function ServerComponentDemo({ serverData }: { serverData: SpaceXLaunch[] }) {
	const [showNewPage, setShowNewPage] = useState(false);

	if (showNewPage) {
		return (
			<div className="neo-brutalism p-6 theme-secondary">
				<div className="flex flex-col mb-4">
					<SimpleBreadcrumb
						crumbs={[
							{ label: "Showcase", href: "/showcase" },
							{ label: "Data Fetching", href: "/showcase/data-fetching" },
							{ label: "Server Demo Page" },
						]}
						badge="page - client component"
						badgeBgColor="bg-secondary-dark"
						className="mb-2"
						textSize="xs"
					/>

					<div className="flex justify-between items-center mt-2">
						<h2 className="text-xl font-heading">SpaceX Launches (Server-Rendered)</h2>
						<button
							onClick={() => setShowNewPage(false)}
							className="neo-brutalism neo-brutalism-hover theme-secondary px-3 py-1 rounded-md font-heading text-sm">
							← Back to demo
						</button>
					</div>
				</div>

				<div className="space-y-4 mt-6">
					{serverData.length > 0 ? (
						serverData.map((launch, index) => (
							<div
								key={`${launch.id}-${index}`}
								className="neo-brutalism p-4 theme-white">
								<div className="flex items-center gap-3">
									{launch.links.mission_patch_small ? (
										<Image
											src={launch.links.mission_patch_small}
											alt={`${launch.mission_name} patch`}
											width={48}
											height={48}
											className="object-contain"
										/>
									) : (
										<div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
											🚀
										</div>
									)}
									<div>
										<h3 className="font-heading">{launch.mission_name}</h3>
										<p className="text-sm">
											{new Date(launch.launch_date_utc).toLocaleDateString()}
										</p>
									</div>
								</div>
								<p className="mt-2 text-sm">
									{launch.details || "No details available."}
								</p>
								<div className="mt-2 text-sm">
									<span className="font-semibold">Rocket:</span>{" "}
									{launch.rocket.rocket_name}
								</div>
							</div>
						))
					) : (
						<div className="text-center p-4">No launch data available</div>
					)}
				</div>
			</div>
		);
	}

	return (
		<div className="neo-brutalism p-6 theme-secondary">
			<SimpleBreadcrumb
				crumbs={[
					{ label: "Showcase", href: "/showcase" },
					{ label: "Data Fetching", href: "/showcase/data-fetching" },
					{ label: "Server Demo" },
				]}
				badge="preview page - client component"
				badgeBgColor="bg-secondary-dark"
				className="mb-2"
				textSize="xs"
			/>

			<h3 className="text-lg font-heading mb-3">Loading directly on the server</h3>

			<p className="mb-4">
				Data is pre-fetched on the server using native fetch. No client-side JavaScript is
				required for the initial data load, reducing bundle size and improving
				performance.
			</p>

			<div className="my-6">
				<button
					onClick={() => setShowNewPage(true)}
					className="neo-brutalism neo-brutalism-hover theme-secondary-dark text-black font-heading py-2 px-4 rounded-md">
					View as New Page
				</button>
			</div>

			<div className="text-sm neo-brutalism theme-white p-3 rounded-md mb-6">
				<p className="font-mono mb-2">{"// Data already loaded on server"}</p>
				<p className="font-mono">const launches = await fetchSpaceXLaunches();</p>
			</div>

			<div className="border-t-2 border-border pt-6">
				<h4 className="text-base font-heading mb-4">
					Live Data Preview{" "}
					<span className="text-sm font-normal opacity-70">(pre-fetched on server)</span>
				</h4>

				<div className="space-y-3">
					{serverData && serverData.length > 0 ? (
						serverData.slice(0, 2).map((launch, index) => (
							<div
								key={`${launch.id}-preview-${index}`}
								className="neo-brutalism p-3 theme-white">
								<h4 className="font-heading">{launch.mission_name}</h4>
								<p className="text-sm truncate">
									{launch.details || "No details available."}
								</p>
							</div>
						))
					) : (
						<div className="neo-brutalism p-3 theme-white">
							<p className="text-sm">No data available</p>
						</div>
					)}
					{serverData && serverData.length > 2 && (
						<div key="more-info" className="text-center text-sm p-2">
							... and {serverData.length - 2} more
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
