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
		<div className="neo-brutalism theme-secondary p-6 rounded-md">
			<div className="flex items-center justify-between mb-4">
				<h2 className="font-heading text-xl">Control Panel</h2>
				<Badge variant={isLoading ? "neutral" : "default"} className="neo-brutalism">
					{isLoading ? "Loading..." : "Ready"}
				</Badge>
			</div>

			<div className="space-y-6">
				{/* Fetch method selection */}
				<div className="space-y-2">
					<h3 className="font-heading text-sm mb-2">Select Fetch Method</h3>
					<div className="flex flex-wrap gap-2">
						{fetchMethods.map((method) => (
							<Button
								key={method.value}
								variant={selectedMethod === method.value ? "default" : "secondary"}
								size="sm"
								onClick={() => setSelectedMethod(method.value as FetchMethodType)}
								className="neo-brutalism-hover font-heading text-xs">
								{method.label}
							</Button>
						))}
					</div>
				</div>

				{/* Fetch controls */}
				<div className="space-y-2">
					<h3 className="font-heading text-sm mb-2">Fetch Controls</h3>
					<div className="flex flex-wrap gap-2">
						<Button
							variant="default"
							size="sm"
							onClick={triggerFetch}
							disabled={isLoading || selectedMethod === "server"}
							className="neo-brutalism-hover theme-primary-dark w-full sm:w-auto">
							Fetch Data
						</Button>
						<Button
							variant="secondary"
							size="sm"
							onClick={clearCache}
							className="neo-brutalism-hover w-full sm:w-auto">
							Clear Cache
						</Button>
					</div>
				</div>

				{/* Fetch configuration */}
				<div className="space-y-4">
					<h3 className="font-heading text-sm">Configuration</h3>

					{/* Simulate delay */}
					<div className="space-y-2">
						<div className="flex justify-between items-center">
							<label htmlFor="delay-slider" className="text-sm font-heading">
								Simulated Delay
							</label>
							<span className="text-xs neo-brutalism bg-secondary-dark px-2 py-1 rounded-sm">
								{fetchConfig.simulateDelay}ms
							</span>
						</div>
						<div className="neo-brutalism p-2 bg-white rounded-md">
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
								className="w-full"
							/>
						</div>
					</div>

					{/* Simulate error toggle */}
					<div className="flex items-center justify-between space-x-2 p-3 neo-brutalism bg-white rounded-md">
						<label htmlFor="simulate-error" className="text-sm font-heading">
							Simulate Error
						</label>
						<Switch
							id="simulate-error"
							checked={fetchConfig.simulateError}
							onCheckedChange={(checked) => updateFetchConfig({ simulateError: checked })}
							className="neo-brutalism"
						/>
					</div>

					{/* Cache time */}
					<div className="space-y-2">
						<div className="flex justify-between items-center">
							<label htmlFor="cache-slider" className="text-sm font-heading">
								Cache Time
							</label>
							<span className="text-xs neo-brutalism bg-secondary-dark px-2 py-1 rounded-sm">
								{Math.round(fetchConfig.cacheTime / 1000)}s
							</span>
						</div>
						<div className="neo-brutalism p-2 bg-white rounded-md">
							<input
								id="cache-slider"
								type="range"
								min={0}
								max={300000}
								step={10000}
								value={fetchConfig.cacheTime}
								onChange={(e) =>
									updateFetchConfig({ cacheTime: parseInt(e.target.value) })
								}
								className="w-full"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
