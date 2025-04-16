"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";

export type FetchMethodType = "server" | "react-query" | "apollo" | "useEffect";

export function FetchingTabs() {
	const [activeTab, setActiveTab] = useState<FetchMethodType>("server");

	return (
		<Tabs
			value={activeTab}
			onValueChange={(value: string) => setActiveTab(value as FetchMethodType)}
			className="w-full">
			<TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6 neo-brutalism bg-secondary-background">
				<TabsTrigger value="server" className="font-heading">
					Server Components
				</TabsTrigger>
				<TabsTrigger value="react-query" className="font-heading">
					React Query
				</TabsTrigger>
				<TabsTrigger value="apollo" className="font-heading">
					Apollo Client
				</TabsTrigger>
				<TabsTrigger value="useEffect" className="font-heading">
					useEffect
				</TabsTrigger>
			</TabsList>

			<TabsContent value="server">
				<FetchingDemo type="server" />
			</TabsContent>

			<TabsContent value="react-query">
				<FetchingDemo type="react-query" />
			</TabsContent>

			<TabsContent value="apollo">
				<FetchingDemo type="apollo" />
			</TabsContent>

			<TabsContent value="useEffect">
				<FetchingDemo type="useEffect" />
			</TabsContent>
		</Tabs>
	);
}

// Placeholder demo component for each fetching type
// We'll implement the actual fetching logic later
function FetchingDemo({ type }: { type: FetchMethodType }) {
	return (
		<div className="space-y-6">
			<div className="neo-brutalism p-4 bg-white">
				<h3 className="text-lg font-heading font-bold mb-3">
					{type === "server" && "Next.js Server Components"}
					{type === "react-query" && "TanStack React Query"}
					{type === "apollo" && "Apollo Client GraphQL"}
					{type === "useEffect" && "useEffect Hook"}
				</h3>

				<p className="mb-4">
					{type === "server" && "Data fetched directly on the server with native fetch."}
					{type === "react-query" &&
						"Client-side fetching with powerful caching and invalidation."}
					{type === "apollo" && "GraphQL queries with Apollo Client."}
					{type === "useEffect" && "Basic React fetching with useEffect and useState."}
				</p>

				<div className="my-6">
					<button className="bg-primary text-white font-heading py-2 px-4 neo-brutalism rounded-md">
						Fetch SpaceX Data
					</button>
				</div>
			</div>

			{/* Placeholder for data display */}
			<div className="neo-brutalism p-4 overflow-hidden bg-secondary-background">
				<div className="flex items-center space-x-4">
					<Skeleton className="h-12 w-12 rounded-full" />
					<div className="space-y-2">
						<Skeleton className="h-4 w-[250px]" />
						<Skeleton className="h-4 w-[200px]" />
					</div>
				</div>
				<div className="mt-4 space-y-3">
					{Array.from({ length: 3 }).map((_, index) => (
						<Skeleton key={index} className="h-20 w-full" />
					))}
				</div>
			</div>
		</div>
	);
}
