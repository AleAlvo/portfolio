"use client";

import React from "react";
import { useDataFetching } from "./DataFetchingContext";
import { FetchMethodType } from "./FetchingTabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

export function ControlPanel() {
	const {
		selectedMethod,
		setSelectedMethod,
		triggerFetch,
		clearCache,
		fetchConfig,
		updateFetchConfig,
		isLoading,
	} = useDataFetching();

	// Fetch method options
	const fetchMethods = [
		{ value: "react-query", label: "React Query" },
		{ value: "server", label: "Server Components" },
		{ value: "apollo", label: "Apollo Client" },
		{ value: "useEffect", label: "useEffect" },
	];

	return (
		<div className="neo-brutalism theme-tertiary-dark p-3 rounded-md">
			<div className="flex items-center justify-between mb-2">
				<h2 className="font-heading text-base">Control Panel</h2>
				{isLoading && (
					<Badge variant="neutral" className="neo-brutalism text-xs">
						Loading...
					</Badge>
				)}
			</div>

			<div className="space-y-3">
				{/* Fetch method selection */}
				<div className="space-y-1">
					<div className="flex flex-wrap gap-1">
						{fetchMethods.map((method) => (
							<Button
								key={method.value}
								variant={selectedMethod === method.value ? "default" : "secondary"}
								size="sm"
								onClick={() => setSelectedMethod(method.value as FetchMethodType)}
								className="neo-brutalism-hover font-heading text-xs h-8 px-2">
								{method.label}
							</Button>
						))}
					</div>
				</div>

				{/* Fetch controls */}
				<div className="flex flex-wrap gap-1">
					<Button
						variant="default"
						size="sm"
						onClick={triggerFetch}
						disabled={isLoading || selectedMethod === "server"}
						className="neo-brutalism-hover theme-primary-dark h-8 px-2 text-xs">
						Fetch Data
					</Button>
					<Button
						variant="secondary"
						size="sm"
						onClick={clearCache}
						className="neo-brutalism-hover h-8 px-2 text-xs">
						Clear Cache
					</Button>
				</div>

				{/* Configuration toggles in a compact row */}
				<div className="flex items-center gap-2 flex-wrap">
					<div className="neo-brutalism p-1 bg-white rounded-md flex items-center space-x-1 text-xs">
						<label htmlFor="simulate-error" className="font-heading pl-1">
							Error
						</label>
						<Switch
							id="simulate-error"
							checked={fetchConfig.simulateError}
							onCheckedChange={(checked) => updateFetchConfig({ simulateError: checked })}
							className="neo-brutalism h-4 w-8"
						/>
					</div>

					<div className="neo-brutalism p-1 bg-white rounded-md flex-1 flex items-center space-x-1">
						<label
							htmlFor="delay-slider"
							className="text-xs font-heading pl-1 whitespace-nowrap">
							Delay: {fetchConfig.simulateDelay}ms
						</label>
						<input
							id="delay-slider"
							type="range"
							min={0}
							max={3000}
							step={100}
							value={fetchConfig.simulateDelay}
							onChange={(e) =>
								updateFetchConfig({ simulateDelay: parseInt(e.target.value) })
							}
							className="w-full h-2"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
