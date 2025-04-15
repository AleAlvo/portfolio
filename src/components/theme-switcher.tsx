"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";
import * as React from "react";
import { IconButton } from "./ui/icon-button";

export function ThemeSwitcher() {
	const { setTheme, theme } = useTheme();

	return (
		<IconButton
			ariaLabel="Toggle theme"
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
			className="[--component-bg:var(--secondary-main)]"
			icon={
				<>
					{theme === "dark" ? (
						<FontAwesomeIcon icon={faSun} size="2x" />
					) : (
						<FontAwesomeIcon icon={faMoon} size="2x" />
					)}
				</>
			}
		/>
	);
}
