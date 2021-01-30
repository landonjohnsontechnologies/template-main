module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				unlit: "#202124",
				lit: "#fcfcfc",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
