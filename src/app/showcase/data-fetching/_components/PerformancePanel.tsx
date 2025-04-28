"use client";

import React from "react";
import { useDataFetching } from "./DataFetchingContext";

export function PerformancePanel() {
	const { selectedMethod, performanceMetrics, isLoading } = useDataFetching();

	// Get the metrics for the currently selected method
	const currentMetrics = performanceMetrics[selectedMethod];

	return (
		<div className="neo-brutalism p-6 theme-secondary rounded-lg">
			<h2 className="font-heading text-xl mb-4">Performance Metrics</h2>

			{isLoading ? (
				<div className="text-center py-10">
					<p className="text-sm animate-pulse">Measuring performance...</p>
				</div>
			) : !currentMetrics ? (
				<div className="text-center py-6">
					<p className="text-sm text-muted-foreground">
						No performance data available yet. Run a fetch operation to collect metrics.
					</p>
				</div>
			) : (
				<div className="space-y-4">
					{/* Fetch Duration */}
					<div className="space-y-1">
						<div className="flex justify-between text-sm">
							<span>Fetch Duration:</span>
							<span className="font-mono">{currentMetrics.fetchDuration}ms</span>
						</div>
						<div className="w-full bg-secondary-dark/20 h-2 rounded-full overflow-hidden">
							<div
								className="bg-primary h-full"
								style={{
									width: `${Math.min(100, (currentMetrics.fetchDuration / 1000) * 100)}%`,
								}}
							/>
						</div>
					</div>

					{/* Loading Time */}
					<div className="space-y-1">
						<div className="flex justify-between text-sm">
							<span>Loading Time:</span>
							<span className="font-mono">{currentMetrics.loadingTime}ms</span>
						</div>
						<div className="w-full bg-secondary-dark/20 h-2 rounded-full overflow-hidden">
							<div
								className="bg-primary h-full"
								style={{
									width: `${Math.min(100, (currentMetrics.loadingTime / 1000) * 100)}%`,
								}}
							/>
						</div>
					</div>

					{/* Render Time */}
					<div className="space-y-1">
						<div className="flex justify-between text-sm">
							<span>Render Time:</span>
							<span className="font-mono">{currentMetrics.renderTime}ms</span>
						</div>
						<div className="w-full bg-secondary-dark/20 h-2 rounded-full overflow-hidden">
							<div
								className="bg-primary h-full"
								style={{
									width: `${Math.min(100, (currentMetrics.renderTime / 200) * 100)}%`,
								}}
							/>
						</div>
					</div>

					{/* Bundle Size (if available) */}
					{currentMetrics.bundleSize !== null && (
						<div className="space-y-1">
							<div className="flex justify-between text-sm">
								<span>Bundle Size:</span>
								<span className="font-mono">{currentMetrics.bundleSize}kb</span>
							</div>
							<div className="w-full bg-secondary-dark/20 h-2 rounded-full overflow-hidden">
								<div
									className="bg-primary h-full"
									style={{
										width: `${Math.min(100, (currentMetrics.bundleSize / 100) * 100)}%`,
									}}
								/>
							</div>
						</div>
					)}

					{/* Cache status */}
					<div className="flex items-center justify-between mt-6 text-sm">
						<span>Cache Hit:</span>
						<span
							className={`px-2 py-1 rounded ${
								currentMetrics.cacheHit
									? "bg-green-100 text-green-800"
									: "bg-zinc-100 text-zinc-800"
							}`}>
							{currentMetrics.cacheHit ? "Yes" : "No"}
						</span>
					</div>
				</div>
			)}
		</div>
	);
}
