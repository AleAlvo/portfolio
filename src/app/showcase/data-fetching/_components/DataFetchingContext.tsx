"use client";

import React, {
	createContext,
	useContext,
	useState,
	useCallback,
	useMemo,
	ReactNode,
} from "react";
import { SpaceXLaunch } from "../page";

export type FetchMethodType = "server" | "react-query" | "apollo" | "useEffect";

interface FetchConfig {
	simulateDelay: number; // Delay in ms
	simulateError: boolean;
	cacheTime: number; // Cache time in ms
}

interface PerformanceMetrics {
	fetchDuration: number; // Time taken to fetch in ms
	loadingTime: number; // Time in loading state
	bundleSize: number | null; // Estimated bundle size in kb
	cacheHit: boolean;
	renderTime: number; // Time taken to render in ms
}

interface DataFetchingContextType {
	// State
	selectedMethod: FetchMethodType;
	isLoading: boolean;
	error: Error | null;
	serverData: SpaceXLaunch[] | null;
	clientData: SpaceXLaunch[] | null;
	fetchConfig: FetchConfig;
	performanceMetrics: Record<FetchMethodType, PerformanceMetrics | null>;

	// Actions
	setSelectedMethod: (method: FetchMethodType) => void;
	triggerFetch: () => void;
	clearCache: () => void;
	updateFetchConfig: (config: Partial<FetchConfig>) => void;
	updatePerformanceMetrics: (
		method: FetchMethodType,
		metrics: Partial<PerformanceMetrics>,
	) => void;
}

const defaultFetchConfig: FetchConfig = {
	simulateDelay: 0,
	simulateError: false,
	cacheTime: 5 * 60 * 1000, // 5 minutes
};

const defaultPerformanceMetrics: PerformanceMetrics = {
	fetchDuration: 0,
	loadingTime: 0,
	bundleSize: null,
	cacheHit: false,
	renderTime: 0,
};

const DataFetchingContext = createContext<DataFetchingContextType | null>(null);

export function useDataFetching() {
	const context = useContext(DataFetchingContext);
	if (!context) {
		throw new Error("useDataFetching must be used within a DataFetchingProvider");
	}
	return context;
}

interface DataFetchingProviderProps {
	children: ReactNode;
	initialServerData?: SpaceXLaunch[] | null;
}

export function DataFetchingProvider({
	children,
	initialServerData = null,
}: DataFetchingProviderProps) {
	// Core state
	const [selectedMethod, setSelectedMethod] = useState<FetchMethodType>("react-query");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);
	const [clientData, setClientData] = useState<SpaceXLaunch[] | null>(null);
	const [fetchConfig, setFetchConfig] = useState<FetchConfig>(defaultFetchConfig);
	const [performanceMetrics, setPerformanceMetrics] = useState<
		Record<FetchMethodType, PerformanceMetrics | null>
	>({
		server: null,
		"react-query": null,
		apollo: null,
		useEffect: null,
	});

	// Actions
	const triggerFetch = useCallback(() => {
		setIsLoading(true);
		setError(null);

		// This would be handled by the specific implementation components
		// We'll just signal that a fetch was triggered here

		// Simulate the end of loading state after configured delay
		if (selectedMethod !== "server") {
			setTimeout(() => {
				setIsLoading(false);
			}, fetchConfig.simulateDelay);
		}
	}, [selectedMethod, fetchConfig.simulateDelay]);

	const clearCache = useCallback(() => {
		// This would communicate with the specific fetching libraries to clear cache
		// For now, we'll just reset our client data to simulate cache clearing
		setClientData(null);

		// Reset performance metrics for the selected method
		setPerformanceMetrics((prev) => ({
			...prev,
			[selectedMethod]: null,
		}));
	}, [selectedMethod]);

	const updateFetchConfig = useCallback((config: Partial<FetchConfig>) => {
		setFetchConfig((prev) => ({ ...prev, ...config }));
	}, []);

	const updatePerformanceMetrics = useCallback(
		(method: FetchMethodType, metrics: Partial<PerformanceMetrics>) => {
			setPerformanceMetrics((prev) => ({
				...prev,
				[method]: {
					...(prev[method] || defaultPerformanceMetrics),
					...metrics,
				},
			}));
		},
		[],
	);

	// Memoized context value to prevent unnecessary re-renders
	const contextValue = useMemo(
		() => ({
			// State
			selectedMethod,
			isLoading,
			error,
			serverData: initialServerData,
			clientData,
			fetchConfig,
			performanceMetrics,

			// Actions
			setSelectedMethod,
			triggerFetch,
			clearCache,
			updateFetchConfig,
			updatePerformanceMetrics,
		}),
		[
			selectedMethod,
			isLoading,
			error,
			initialServerData,
			clientData,
			fetchConfig,
			performanceMetrics,
			triggerFetch,
			clearCache,
			updateFetchConfig,
			updatePerformanceMetrics,
		],
	);

	return (
		<DataFetchingContext.Provider value={contextValue}>
			{children}
		</DataFetchingContext.Provider>
	);
}
