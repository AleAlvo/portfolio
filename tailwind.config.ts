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
				border: "var(--border)",
				input: "var(--input)",
				ring: "var(--ring)",
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary: {
					DEFAULT: "var(--primary)",
					foreground: "var(--primary-foreground)",
					main: "var(--primary-main)",
					dark: "var(--primary-dark)",
					darker: "var(--primary-darker)",
				},
				secondary: {
					DEFAULT: "var(--secondary)",
					foreground: "var(--secondary-foreground)",
					main: "var(--secondary-main)",
					dark: "var(--secondary-dark)",
					darker: "var(--secondary-darker)",
				},
				tertiary: {
					DEFAULT: "var(--tertiary)",
					foreground: "var(--tertiary-foreground)",
					main: "var(--tertiary-main)",
					dark: "var(--tertiary-dark)",
					darker: "var(--tertiary-darker)",
				},
				destructive: {
					DEFAULT: "var(--destructive)",
					foreground: "var(--destructive-foreground)",
				},
				muted: {
					DEFAULT: "var(--muted)",
					foreground: "var(--muted-foreground)",
				},
				accent: {
					DEFAULT: "var(--accent)",
					foreground: "var(--accent-foreground)",
				},
				popover: {
					DEFAULT: "var(--popover)",
					foreground: "var(--popover-foreground)",
				},
				card: {
					DEFAULT: "var(--card)",
					foreground: "var(--card-foreground)",
				},
				// System status colors
				success: {
					DEFAULT: "var(--success)",
					foreground: "var(--success-foreground)",
				},
				warning: {
					DEFAULT: "var(--warning)",
					foreground: "var(--warning-foreground)",
				},
				error: {
					DEFAULT: "var(--error)",
					foreground: "var(--error-foreground)",
				},
				info: {
					DEFAULT: "var(--info)",
					foreground: "var(--info-foreground)",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			boxShadow: {
				neobrutalism:
					"var(--neo-shadow-x) var(--neo-shadow-y) 0 0 var(--neo-shadow-color)",
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
