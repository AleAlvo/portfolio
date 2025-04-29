"use client";

import React from "react";
import { useDataFetching } from "./DataFetchingContext";
import { ServerComponentDemo } from "./ServerComponentDemo";
import { ReactQueryDemo } from "./ReactQueryDemo";
import { ApolloClientDemo } from "./ApolloClientDemo";
import { UseEffectDemo } from "./UseEffectDemo";

export function LiveLaboratory() {
	const { selectedMethod, serverData } = useDataFetching();

	// Render the appropriate demo component based on selectedMethod
	return (
		<div className="w-full h-full neo-brutalism p-6 theme-white rounded-lg border-2 border-black">
			<div className="mb-4 border-b border-border pb-3">
				<h2 className="text-2xl font-heading">Live Laboratory</h2>
				<p className="text-sm text-muted-foreground">
					Demonstrating{" "}
					<span className="font-semibold text-foreground">
						{getDemoTitle(selectedMethod)}
					</span>
				</p>
			</div>

			<div className="mt-4">
				{selectedMethod === "react-query" && <ReactQueryDemo />}
				{selectedMethod === "server" && <ServerComponentDemo serverData={serverData} />}
				{selectedMethod === "apollo" && <ApolloClientDemo />}
				{selectedMethod === "useEffect" && <UseEffectDemo />}
			</div>
		</div>
	);
}

// Helper function to get a display title for the selected method
function getDemoTitle(method: string): string {
	switch (method) {
		case "react-query":
			return "React Query";
		case "server":
			return "Server Components";
		case "apollo":
			return "Apollo Client";
		case "useEffect":
			return "useEffect Hook";
		default:
			return method;
	}
}
