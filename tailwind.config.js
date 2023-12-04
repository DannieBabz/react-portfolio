/** @type {import('tailwindcss').Config} */

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		colors: {
			bgcolor: "#071013",
			btnColor: "#EB5160",
			txtColor: "#B7999C",
			primary: "#AAAAAA",
			secColor: "#DFE0E2",
		},
		fontFamily: {
			raleway: ["raleway", "sans-serif"],
			tillana: ["tillana", "sans-serif"],
			sans: ["dosis", "sans-serif"],
		},
	},
	plugins: [],
};
