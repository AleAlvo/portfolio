"use client";

import React, {
	createContext,
	useContext,
	useState,
	useCallback,
	useMemo,
	ReactNode,
	useEffect,
	use,
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
	dataPromise?: Promise<SpaceXLaunch[]>;
}

export function DataFetchingProvider({
	children,
	initialServerData = null,
	dataPromise,
}: DataFetchingProviderProps) {
	// Core state
	const [selectedMethod, setSelectedMethod] = useState<FetchMethodType>("react-query");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);
	const [clientData, setClientData] = useState<SpaceXLaunch[] | null>(null);
	const [serverData, setServerData] = useState<SpaceXLaunch[] | null>(initialServerData);
	const [fetchConfig, setFetchConfig] = useState<FetchConfig>(defaultFetchConfig);
	const [performanceMetrics, setPerformanceMetrics] = useState<
		Record<FetchMethodType, PerformanceMetrics | null>
	>({
		server: null,
		"react-query": null,
		apollo: null,
		useEffect: null,
	});

	// Use the data promise if provided
	// This acts like Suspense - if the promise hasn't resolved yet, this component will suspend
	// When the server is selected as the method
	const resolvedServerData =
		selectedMethod === "server" && dataPromise ? use(dataPromise) : null;

	// When the server method is selected and we have resolved data, update the state
	useEffect(() => {
		if (selectedMethod === "server" && resolvedServerData) {
			setServerData(resolvedServerData);

			// Record performance metrics for server fetching
			// Since this is server-side, these are simulated values
			updatePerformanceMetrics("server", {
				fetchDuration: 50, // Server fetch is typically fast as it's closer to the data source
				loadingTime: 0, // No client loading time for server components
				renderTime: 10, // Render time is minimal as the data is ready before hydration
				cacheHit: false, // We're not caching in this demo
				bundleSize: 0, // No additional JS bundle size for server components
			});
		}
	}, [selectedMethod, resolvedServerData]);

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
			serverData: serverData || resolvedServerData,
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
			serverData,
			resolvedServerData,
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
