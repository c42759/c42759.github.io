const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	darkMode: 'class',
	content: ["./src/**/*.{html,jsx}"],
	theme: {
		maxWidth: {
			'1/4': '25%',
			'1/2': '50%',
			'3/4': '75%',
		},
		fontFamily: {
			sans: ['Poppins', ...defaultTheme.fontFamily.sans],
		},
		extend: {},
	},
	plugins: [],
};
