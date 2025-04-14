import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			fontFamily: {
				sans: ["var(--font-geist-sans)"],
				mono: ["var(--font-geist-mono)"],
				heading: ["var(--font-lexend-mega)"],
				"alt-sans": ["var(--font-public-sans)"],
				display: ["var(--font-archivo)"],
			},
			colors: {
				border: "hsl(var(--border) / <alpha-value>)",
				input: "hsl(var(--input) / <alpha-value>)",
				ring: "hsl(var(--ring) / <alpha-value>)",
				background: "hsl(var(--background) / <alpha-value>)",
				foreground: "hsl(var(--foreground) / <alpha-value>)",
				primary: {
					DEFAULT: "hsl(var(--primary) / <alpha-value>)",
					foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
					dark: "hsl(var(--primary-dark) / <alpha-value>)",
					darker: "hsl(var(--primary-darker) / <alpha-value>)",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
					foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
					dark: "hsl(var(--secondary-dark) / <alpha-value>)",
					darker: "hsl(var(--secondary-darker) / <alpha-value>)",
				},
				tertiary: {
					DEFAULT: "hsl(var(--tertiary) / <alpha-value>)",
					foreground: "hsl(var(--tertiary-foreground) / <alpha-value>)",
					dark: "hsl(var(--tertiary-dark) / <alpha-value>)",
					darker: "hsl(var(--tertiary-darker) / <alpha-value>)",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
					foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
				},
				muted: {
					DEFAULT: "hsl(var(--muted) / <alpha-value>)",
					foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
				},
				accent: {
					DEFAULT: "hsl(var(--accent) / <alpha-value>)",
					foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
				},
				popover: {
					DEFAULT: "hsl(var(--popover) / <alpha-value>)",
					foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
				},
				card: {
					DEFAULT: "hsl(var(--card) / <alpha-value>)",
					foreground: "hsl(var(--card-foreground) / <alpha-value>)",
				},
				// Skill level specific colors
				junior: {
					DEFAULT: "hsl(var(--junior-color) / <alpha-value>)",
					dark: "hsl(var(--junior-dark) / <alpha-value>)",
					darker: "hsl(var(--junior-darker) / <alpha-value>)",
				},
				mid: {
					DEFAULT: "hsl(var(--mid-color) / <alpha-value>)",
					dark: "hsl(var(--mid-dark) / <alpha-value>)",
					darker: "hsl(var(--mid-darker) / <alpha-value>)",
				},
				senior: {
					DEFAULT: "hsl(var(--senior-color) / <alpha-value>)",
					dark: "hsl(var(--senior-dark) / <alpha-value>)",
					darker: "hsl(var(--senior-darker) / <alpha-value>)",
				},
				// System status colors
				success: {
					DEFAULT: "hsl(var(--success) / <alpha-value>)",
					foreground: "hsl(var(--success-foreground) / <alpha-value>)",
				},
				warning: {
					DEFAULT: "hsl(var(--warning) / <alpha-value>)",
					foreground: "hsl(var(--warning-foreground) / <alpha-value>)",
				},
				error: {
					DEFAULT: "hsl(var(--error) / <alpha-value>)",
					foreground: "hsl(var(--error-foreground) / <alpha-value>)",
				},
				info: {
					DEFAULT: "hsl(var(--info) / <alpha-value>)",
					foreground: "hsl(var(--info-foreground) / <alpha-value>)",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			boxShadow: {
				neobrutalism:
					"var(--neo-shadow-x) var(--neo-shadow-y) 0 0 hsl(var(--neo-shadow-color))",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [animate],
};

export default config;
