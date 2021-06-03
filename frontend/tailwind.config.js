const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: [],
	darkMode: 'class', // or 'media' or 'class'
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
	variants: {
		extend: {},
	},
	plugins: [],
};
