"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

export function ThemeSwitcher() {
	const { setTheme, theme } = useTheme();

	return (
		<button
			className="border-border bg-white neo-brutalism neo-brutalism-hover neo-brutalism-active mt-6 h-12 w-12 border-2 p-0 rounded-md"
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
			aria-label="Toggle theme">
			<Sun className="stroke-foreground hidden h-6 w-6 dark:inline" />
			<Moon className="stroke-foreground inline h-6 w-6 dark:hidden" />
			<span className="sr-only font-heading">Toggle theme</span>
		</button>
	);
}
