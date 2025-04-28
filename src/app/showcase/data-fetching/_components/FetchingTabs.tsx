"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SpaceXLaunch } from "@/app/showcase/data-fetching/page";

// Import the separate demo components
import { ServerComponentDemo } from "./ServerComponentDemo";
import { ReactQueryDemo } from "./ReactQueryDemo";
import { ApolloClientDemo } from "./ApolloClientDemo";
import { UseEffectDemo } from "./UseEffectDemo";

export type FetchMethodType = "server" | "react-query" | "apollo" | "useEffect";

interface FetchingTabsProps {
	serverData: SpaceXLaunch[];
}

export function FetchingTabs({ serverData }: FetchingTabsProps) {
	const [activeTab, setActiveTab] = useState<FetchMethodType>("react-query");

	return (
		<div className="space-y-4">
			<Tabs
				value={activeTab}
				onValueChange={(value: string) => setActiveTab(value as FetchMethodType)}
				className="w-full">
				<TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-6 neo-brutalism theme-secondary">
					<TabsTrigger value="react-query" className="font-heading">
						React Query
					</TabsTrigger>
					<TabsTrigger value="server" className="font-heading">
						Server Components
					</TabsTrigger>
					<TabsTrigger value="apollo" className="font-heading">
						Apollo Client
					</TabsTrigger>
					<TabsTrigger value="useEffect" className="font-heading">
						useEffect
					</TabsTrigger>
				</TabsList>

				<TabsContent value="react-query">
					<ReactQueryDemo />
				</TabsContent>

				<TabsContent value="server">
					<ServerComponentDemo serverData={serverData} />
				</TabsContent>

				<TabsContent value="apollo">
					<ApolloClientDemo />
				</TabsContent>

				<TabsContent value="useEffect">
					<UseEffectDemo />
				</TabsContent>
			</Tabs>
		</div>
	);
}
