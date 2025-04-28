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
		<div className="w-full h-full neo-brutalism p-6 theme-white rounded-lg">
			<h2 className="text-xl font-heading mb-4">Live Laboratory</h2>
			<p className="mb-6 text-sm">
				Demonstrating the{" "}
				<span className="font-semibold">{getDemoTitle(selectedMethod)}</span> approach to
				data fetching
			</p>

			<div className="mt-4">
				{selectedMethod === "react-query" && <ReactQueryDemo />}
				{selectedMethod === "server" && serverData && (
					<ServerComponentDemo serverData={serverData} />
				)}
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
