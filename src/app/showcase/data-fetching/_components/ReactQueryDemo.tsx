"use client";

import React, { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { SimpleBreadcrumb } from "@/components/ui/simple-breadcrumb";

interface Launch {
	id: string;
	mission_name: string;
	launch_date_utc: string;
	details: string | null;
	links: {
		mission_patch_small: string | null;
	};
	rocket: {
		rocket_name: string;
	};
}

async function fetchSpaceXLaunches(): Promise<Launch[]> {
	const response = await fetch("https://api.spacexdata.com/v3/launches?limit=5");
	if (!response.ok) {
		throw new Error("Failed to fetch SpaceX launches");
	}
	return response.json();
}

export function ReactQueryDemo() {
	const [showNewPage, setShowNewPage] = useState(false);
	const [hasInitiallyLoaded, setHasInitiallyLoaded] = useState(false);
	const queryClient = useQueryClient();

	const {
		data: launches,
		isLoading,
		isError,
		error,
		refetch,
	} = useQuery({
		queryKey: ["spacex-launches"],
		queryFn: fetchSpaceXLaunches,
		enabled: showNewPage, // Only fetch when showNewPage is true
	});

	// If we have data and showNewPage was previously true, update state
	React.useEffect(() => {
		if (launches && !hasInitiallyLoaded) {
			setHasInitiallyLoaded(true);
		}
	}, [launches, hasInitiallyLoaded]);

	// Determine if we should show cached data in preview
	const showCachedData = hasInitiallyLoaded && !showNewPage;
	const launchesArray = (launches as Launch[]) || [];

	// Function to clear cached data
	const clearCachedData = () => {
		queryClient.removeQueries({ queryKey: ["spacex-launches"] });
		setHasInitiallyLoaded(false);
	};

	if (showNewPage) {
		return (
			<div className="neo-brutalism p-6 theme-secondary">
				<div className="flex flex-col mb-4">
					<SimpleBreadcrumb
						crumbs={[
							{ label: "Showcase", href: "/showcase" },
							{ label: "Data Fetching", href: "/showcase/data-fetching" },
							{ label: "React Query Demo" },
						]}
						badge="page - client component"
						badgeBgColor="bg-secondary-dark"
						className="mb-2"
						textSize="xs"
					/>

					<div className="flex justify-between items-center mt-2">
						<h2 className="text-xl font-heading">SpaceX Launches (React Query)</h2>
						<button
							onClick={() => setShowNewPage(false)}
							className="neo-brutalism neo-brutalism-hover theme-secondary px-3 py-1 rounded-md font-heading text-sm">
							← Back to demo
						</button>
					</div>
				</div>

				<div className="mb-4 flex justify-end">
					<button
						onClick={() => refetch()}
						className="neo-brutalism neo-brutalism-hover theme-primary-dark text-white font-heading py-1 px-3 rounded-md text-sm">
						Refetch Data
					</button>
				</div>

				{isLoading ? (
					<div className="space-y-4">
						{Array.from({ length: 3 }).map((_, i) => (
							<div
								key={`loading-skeleton-${i}`}
								className="neo-brutalism p-4 theme-white">
								<div className="flex items-center gap-3">
									<Skeleton className="w-12 h-12 rounded-full" />
									<div className="space-y-2">
										<Skeleton className="h-4 w-32" />
										<Skeleton className="h-3 w-24" />
									</div>
								</div>
								<Skeleton className="h-4 w-full mt-2" />
								<Skeleton className="h-3 w-48 mt-2" />
							</div>
						))}
					</div>
				) : isError ? (
					<div
						className="neo-brutalism p-4"
						style={{ backgroundColor: "var(--error)", color: "var(--error-foreground)" }}>
						<p>Error: {error instanceof Error ? error.message : "Unknown error"}</p>
					</div>
				) : (
					<div className="space-y-4">
						{launchesArray.length > 0 ? (
							launchesArray.map((launch, index) => (
								<div
									key={`${launch.id}-${index}`}
									className="neo-brutalism p-4 theme-white">
									<div className="flex items-center gap-3">
										{launch.links.mission_patch_small ? (
											<div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center overflow-hidden">
												<div
													className="w-full h-full bg-contain bg-center bg-no-repeat"
													style={{
														backgroundImage: `url('${launch.links.mission_patch_small}')`,
													}}
													aria-label={`${launch.mission_name} patch`}
												/>
											</div>
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
							<div className="neo-brutalism p-4 theme-white">
								<p>No launches available.</p>
							</div>
						)}
					</div>
				)}
			</div>
		);
	}

	return (
		<div className="neo-brutalism p-6 theme-secondary">
			<SimpleBreadcrumb
				crumbs={[
					{ label: "Showcase", href: "/showcase" },
					{ label: "Data Fetching", href: "/showcase/data-fetching" },
					{ label: "React Query Demo" },
				]}
				badge="preview page - client component"
				badgeBgColor="bg-secondary-dark"
				className="mb-2"
				textSize="xs"
			/>

			<h3 className="text-lg font-heading mb-3">TanStack React Query</h3>
			<p className="mb-4">
				React Query provides declarative, always-up-to-date auto-managed queries with
				built-in caching, background updates, and stale data management.
			</p>

			<div className="my-6 flex gap-3">
				<button
					onClick={() => setShowNewPage(true)}
					className="neo-brutalism neo-brutalism-hover theme-secondary-dark text-black font-heading py-2 px-4 rounded-md">
					Navigate to new page
				</button>
				{hasInitiallyLoaded && (
					<button
						onClick={clearCachedData}
						className="neo-brutalism neo-brutalism-hover theme-secondary-dark text-black font-heading py-2 px-4 rounded-md">
						Clear cached data
					</button>
				)}
			</div>

			<div className="text-sm theme-white neo-brutalism p-3 rounded-md mb-6">
				<p className="font-mono mb-2">
					{"// Declarative data fetching with control over when to fetch"}
				</p>
				<p className="font-mono">
					{`const { data } = useQuery({ queryKey: ['launches'], queryFn: fetchLaunches, enabled: isPageMounted });`}
				</p>
			</div>

			<div className="border-t-2 border-border pt-6">
				<h4 className="text-base font-heading mb-4">Live Data Preview</h4>
				<p className="mb-4 text-sm">
					{showCachedData
						? "This data has been previously fetched and is now cached by React Query."
						: "Data will only be fetched when you navigate to the page. React Query will then cache it for future use."}
				</p>

				<div className="space-y-3">
					{showCachedData ? (
						<>
							{launchesArray.slice(0, 2).map((launch, index) => (
								<div
									key={`${launch.id}-preview-${index}`}
									className="neo-brutalism p-3 theme-white">
									<h4 className="font-heading">{launch.mission_name}</h4>
									<p className="text-sm truncate">
										{launch.details || "No details available."}
									</p>
								</div>
							))}
							{launchesArray.length > 2 && (
								<div key="more-info" className="text-center text-sm p-2">
									... and {launchesArray.length - 2} more
								</div>
							)}
						</>
					) : (
						<>
							{Array.from({ length: 2 }).map((_, i) => (
								<div
									key={`loading-preview-skeleton-${i}`}
									className="neo-brutalism p-3 theme-white">
									<div className="space-y-3">
										<Skeleton className="h-4 w-32" />
										<Skeleton className="h-3 w-full" />
									</div>
								</div>
							))}
							<div className="text-center text-sm italic p-2">
								Click &quot;View as New Page&quot; to fetch data
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
}
