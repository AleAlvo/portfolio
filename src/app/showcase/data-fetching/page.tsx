import React, { Suspense } from "react";
import { Metadata } from "next";
import { SimpleBreadcrumb } from "@/components/ui/simple-breadcrumb";
import { Skeleton } from "@/components/ui/skeleton";
import { DataFetchingProvider } from "./_components/DataFetchingContext";

// Import client components directly (they already have 'use client' directive)
import { ControlPanel } from "./_components/ControlPanel";
import { LiveLaboratory } from "./_components/LiveLaboratory";
import { PerformancePanel } from "./_components/PerformancePanel";

export const metadata: Metadata = {
	title: "Data Fetching Showcase | Next.js Portfolio",
	description: "Showcase of different data fetching techniques in Next.js",
};

// Define the shape of our SpaceX launch data
export type SpaceXLaunch = {
	id: string;
	mission_name: string;
	launch_date_utc: string;
	rocket: {
		rocket_name: string;
	};
	links: {
		mission_patch_small: string | null;
		article_link: string | null;
	};
	details: string | null;
};

// Server-side data fetching function that can be imported and used by components
export async function fetchSpaceXLaunches(): Promise<SpaceXLaunch[]> {
	try {
		const response = await fetch("https://api.spacexdata.com/v3/launches/past?limit=5");

		if (!response.ok) {
			throw new Error(`Failed to fetch: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching SpaceX data:", error);
		return [];
	}
}

// Loading skeleton for the client components
function ControlPanelSkeleton() {
	return (
		<div className="neo-brutalism p-6 theme-secondary rounded-lg space-y-4">
			<Skeleton className="h-6 w-40 mb-4" />
			<Skeleton className="h-4 w-full mb-2" />
			<div className="flex gap-2">
				{Array.from({ length: 4 }).map((_, i) => (
					<Skeleton key={i} className="h-8 w-24" />
				))}
			</div>
			<Skeleton className="h-4 w-32 mt-4" />
			<Skeleton className="h-8 w-full" />
			<div className="flex gap-2">
				<Skeleton className="h-8 w-24" />
				<Skeleton className="h-8 w-24" />
			</div>
		</div>
	);
}

function LiveLabSkeleton() {
	return (
		<div className="neo-brutalism p-6 theme-white rounded-lg space-y-4">
			<Skeleton className="h-6 w-40" />
			<Skeleton className="h-4 w-full" />
			<div className="space-y-3 mt-6">
				<Skeleton className="h-16 w-full" />
				<Skeleton className="h-16 w-full" />
				<Skeleton className="h-16 w-full" />
			</div>
		</div>
	);
}

function PerformancePanelSkeleton() {
	return (
		<div className="neo-brutalism p-6 theme-secondary rounded-lg space-y-4">
			<Skeleton className="h-6 w-40" />
			<div className="space-y-3 py-6">
				{Array.from({ length: 4 }).map((_, i) => (
					<div key={i} className="space-y-1">
						<div className="flex justify-between">
							<Skeleton className="h-4 w-24" />
							<Skeleton className="h-4 w-16" />
						</div>
						<Skeleton className="h-2 w-full" />
					</div>
				))}
			</div>
		</div>
	);
}

export default function DataFetchingShowcase() {
	// Start fetching data early without awaiting - this allows React to continue rendering
	// while the data is being fetched in the background
	const dataPromise = fetchSpaceXLaunches();

	return (
		<div className="flex flex-col w-full min-h-screen">
			<div className="container mx-auto px-4 py-8">
				{/* Pass the data promise to the DataFetchingProvider */}
				<DataFetchingProvider dataPromise={dataPromise}>
					<div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
						{/* Left column for explanation and performance metrics */}
						<section className="concept-canvas flex flex-col space-y-6 lg:col-span-4">
							<div>
								<h1 className="text-3xl font-bold">Data Fetching Showcase</h1>
								<SimpleBreadcrumb
									crumbs={[
										{ label: "Home", href: "/" },
										{ label: "Showcase", href: "/showcase" },
										{ label: "Data Fetching" },
									]}
									badge="Page - server component"
									className="mb-6"
								/>

								<div className="prose max-w-none mb-8">
									<h2 className="text-2xl font-heading mb-4">
										Understanding Data Fetching in React
									</h2>
									<p className="mb-4">
										Modern React applications offer multiple approaches to fetching data,
										each with their own advantages and use cases. This showcase
										demonstrates different techniques with the SpaceX API.
									</p>
									<h3 className="text-xl font-heading mt-6 mb-3">What You&apos;ll See</h3>
									<ul className="list-disc pl-6 mb-4">
										<li>
											Server Components with native <code>fetch</code>
										</li>
										<li>Client Components with TanStack React Query</li>
										<li>Apollo Client with GraphQL</li>
										<li>
											Basic <code>useEffect</code> approach
										</li>
									</ul>
								</div>
							</div>

							{/* Performance metrics panel with its own Suspense boundary */}
							<Suspense fallback={<PerformancePanelSkeleton />}>
								<PerformancePanel />
							</Suspense>
						</section>

						{/* Right column for interactive demos */}
						<section className="code-showcase lg:col-span-6 space-y-6">
							{/* Control panel with its own Suspense boundary */}
							<Suspense fallback={<ControlPanelSkeleton />}>
								<ControlPanel />
							</Suspense>

							{/* Live laboratory with its own Suspense boundary */}
							<Suspense fallback={<LiveLabSkeleton />}>
								<LiveLaboratory />
							</Suspense>
						</section>
					</div>
				</DataFetchingProvider>
			</div>
		</div>
	);
}
