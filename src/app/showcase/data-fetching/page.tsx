import React from "react";
import { Metadata } from "next";
import { FetchingTabs } from "@/components/showcase/data-fetching/FetchingTabs";

export const metadata: Metadata = {
	title: "Data Fetching Showcase | Next.js Portfolio",
	description: "Showcase of different data fetching techniques in Next.js",
};

export default function DataFetchingShowcase() {
	return (
		<div className="flex flex-col w-full min-h-screen">
			<div className="container mx-auto px-4 py-8">
				<h1 className="text-3xl font-bold font-heading mb-8">Data Fetching Showcase</h1>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Concept Canvas - Left column for explanation */}
					<section className="concept-canvas flex flex-col space-y-6">
						<div className="prose max-w-none">
							<h2 className="text-2xl font-heading font-bold mb-4">
								Understanding Data Fetching in React
							</h2>
							<p className="mb-4">
								Modern React applications offer multiple approaches to fetching data, each
								with their own advantages and use cases. This showcase demonstrates
								different techniques with the SpaceX API.
							</p>
							<h3 className="text-xl font-heading font-semibold mt-6 mb-3">
								What You&apos;ll See
							</h3>
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

						<div className="mt-6">
							<h3 className="text-xl font-heading font-semibold mb-3">
								Performance Metrics
							</h3>
							<div className="neo-brutalism bg-secondary-background p-6 rounded-md">
								<p className="italic text-muted-foreground">
									Select a fetching method in the demo to see performance metrics
								</p>
								{/* Performance metrics panel will go here */}
							</div>
						</div>
					</section>

					{/* Code Showcase - Right column for interactive demos */}
					<section className="code-showcase border-2 border-border bg-secondary-background rounded-md shadow-shadow overflow-hidden">
						<div className="p-6">
							<h2 className="text-2xl font-heading font-bold mb-4">Live Laboratory</h2>
							<p className="mb-6">
								Interact with the demos below to compare different fetching approaches
							</p>

							{/* Using our FetchingTabs component */}
							<FetchingTabs />
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
