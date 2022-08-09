/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["public/**/*.{html, js}"],
	theme: {
		extend: {
			colors: {
				"dark-blue": "#134679",
				"light-blue": "#25B3B4",
				"dark-brown": "#A87D33",
				"light-brown": "#FFFFC9",
				"dark-gray": "#252C3B",
				"dark-neutral": "#111827",
			},
			backgroundImage: {
				"hero-pattern": "url('/assets/img/Vector.svg')",
			},
			aspectRatio: {
				"4/3": "4 / 3",
			},
			container: {
				center: true,
				padding: {
					default: "1rem",
					sm: "1.5rem",
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
	},
	plugins: [require("prettier-plugin-tailwindcss")],
};
