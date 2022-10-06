/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				tindog: ["Ubuntu"],
			},
			rotate: {
				25: "25deg",
			},
			padding: {
				"15%": "15%",
			},
		},
	},
	plugins: [],
};
