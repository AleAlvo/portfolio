"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";
import { IconButton } from "./ui/icon-button";

export function ThemeSwitcher() {
	const { setTheme, theme } = useTheme();

	return (
		<IconButton
			ariaLabel="Toggle theme"
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
			icon={
				<>
					<Sun className="stroke-foreground hidden h-6 w-6 dark:inline" />
					<Moon className="stroke-foreground inline h-6 w-6 dark:hidden" />
				</>
			}
		/>
	);
}
