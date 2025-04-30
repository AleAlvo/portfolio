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
		<div className="neo-brutalism theme-secondary p-3 rounded-md">
			<div className="flex items-center justify-between mb-2">
				<Badge variant="default" className="text-xs font-normal">
					Control Panel
				</Badge>
				{isLoading && (
					<Badge variant="neutral" className="neo-brutalism text-xs">
						Loading...
					</Badge>
				)}
			</div>

			<div className="space-y-3">
				{/* Fetch method selection */}
				<div className="space-y-1">
					<div className="flex w-full gap-4">
						{fetchMethods.map((method) => (
							<Button
								key={method.value}
								variant={selectedMethod === method.value ? "default" : "secondary"}
								size="sm"
								onClick={() => setSelectedMethod(method.value as FetchMethodType)}
								className="neo-brutalism-hover font-black text-xs h-8 px-2 flex-1">
								{method.label}
							</Button>
						))}
					</div>
				</div>

				{/* Combined row for fetch buttons and configuration toggles */}
				<div className="flex items-center gap-2 flex-wrap">
					<Button
						variant="secondary-alt"
						size="sm"
						onClick={triggerFetch}
						disabled={isLoading || selectedMethod === "server"}
						className="h-7 px-2 text-xs">
						Fetch Data
					</Button>
					<Button
						variant="secondary-alt"
						size="sm"
						onClick={clearCache}
						className="h-7 px-2 text-xs">
						Clear Cache
					</Button>

					<div className="bg-white rounded-md flex items-center space-x-2 text-xs border-2 border-black p-1">
						<label htmlFor="simulate-error" className="font-black pl-1">
							Error
						</label>
						<Switch
							id="simulate-error"
							checked={fetchConfig.simulateError}
							onCheckedChange={(checked) => updateFetchConfig({ simulateError: checked })}
						/>
					</div>

					<div className="bg-white rounded-md flex-1 flex items-center space-x-1 border-2 border-black p-1">
						<label
							htmlFor="delay-slider"
							className="text-xs font-black pl-1 whitespace-nowrap">
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
