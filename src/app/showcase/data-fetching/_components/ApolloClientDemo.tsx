"use client";

import React, { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { SimpleBreadcrumb } from "@/components/ui/simple-breadcrumb";

export function ApolloClientDemo() {
	const [showNewPage, setShowNewPage] = useState(false);

	if (showNewPage) {
		return (
			<div className="neo-brutalism p-6 theme-secondary">
				<div className="flex flex-col mb-4">
					<SimpleBreadcrumb
						crumbs={[
							{ label: "Showcase", href: "/showcase" },
							{ label: "Data Fetching", href: "/showcase/data-fetching" },
							{ label: "Apollo Client Demo Page" },
						]}
						badge="page - client component"
						badgeBgColor="bg-secondary-dark"
						className="mb-2"
						textSize="xs"
					/>

					<div className="flex justify-between items-center mt-2">
						<h2 className="text-xl font-heading">SpaceX Launches (Apollo GraphQL)</h2>
						<button
							onClick={() => setShowNewPage(false)}
							className="neo-brutalism neo-brutalism-hover theme-secondary px-3 py-1 rounded-md font-heading text-sm">
							← Back to demo
						</button>
					</div>
				</div>

				<div className="mt-6">
					{/* This would actually use Apollo to fetch data */}
					<div className="flex items-center space-x-4">
						<Skeleton className="h-12 w-12 rounded-full" />
						<div className="space-y-2">
							<Skeleton className="h-4 w-[250px]" />
							<Skeleton className="h-4 w-[200px]" />
						</div>
					</div>
					<div className="mt-4 space-y-3">
						{Array.from({ length: 3 }).map((_, index) => (
							<Skeleton key={`apollo-skeleton-${index}`} className="h-20 w-full" />
						))}
					</div>
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
					{ label: "Apollo Client Demo" },
				]}
				badge="preview page - client component"
				badgeBgColor="bg-secondary-dark"
				className="mb-2"
				textSize="xs"
			/>

			<h3 className="text-lg font-heading mb-3">Apollo Client GraphQL</h3>

			<p className="mb-4">
				GraphQL queries with Apollo Client. Request exactly the data you need and benefit
				from a normalized cache for consistent UI.
			</p>

			<div className="my-6">
				<button
					onClick={() => setShowNewPage(true)}
					className="neo-brutalism neo-brutalism-hover theme-secondary-dark text-black font-heading py-2 px-4 rounded-md">
					View as New Page
				</button>
			</div>

			<div className="text-sm neo-brutalism theme-white p-3 rounded-md mb-6">
				<p className="font-mono mb-2">{"// Apollo GraphQL example"}</p>
				<p className="font-mono">
					const &#123; data, loading &#125; = useQuery(LAUNCHES_QUERY);
				</p>
			</div>

			<div className="border-t-2 border-border pt-6">
				<h4 className="text-base font-heading mb-4">
					Live Data Preview{" "}
					<span className="text-sm font-normal opacity-70">
						(fetched with Apollo Client)
					</span>
				</h4>

				<div className="space-y-3">
					<div className="flex items-center space-x-4">
						<Skeleton className="h-12 w-12 rounded-full" />
						<div className="space-y-2">
							<Skeleton className="h-4 w-[250px]" />
							<Skeleton className="h-4 w-[200px]" />
						</div>
					</div>
					<div className="mt-4 space-y-3">
						{Array.from({ length: 2 }).map((_, index) => (
							<div
								key={`apollo-preview-${index}`}
								className="neo-brutalism p-3 theme-white">
								<div className="space-y-3">
									<Skeleton className="h-4 w-32" />
									<Skeleton className="h-3 w-full" />
								</div>
							</div>
						))}
					</div>
					<div className="text-center text-sm p-2">... and 3 more items</div>
				</div>
			</div>
		</div>
	);
}
