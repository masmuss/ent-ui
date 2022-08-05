/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["public/**/*.{html, js}"],
	theme: {
		extend: {},
		colors: {
			/**
			 * example:
			 * 'blue': '#1fb6ff',
			 */
			// primary
			// secondary
			// accent
			// background
		},
		container: {
			center: true,
			padding: {
				default: "1rem",
				sm: "1rem",
				md: "1.5rem",
				lg: "2rem",
				xl: "3rem",
				"2xl": "4rem",
			},
		},
		fontFamily: {
			sans: ["Inter", "sans-serif"],
		},
	},
	plugins: [require("prettier-plugin-tailwindcss")],
};
