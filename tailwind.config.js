const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
		colors: {
			...colors,
			primary: '#ef1617',
			secondary: '#9c48e1',
			disabled: '#d5d7dc',
		},
	},
	plugins: [],
}
