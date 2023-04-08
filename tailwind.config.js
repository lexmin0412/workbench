/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			lineHeight: {
				'12': '3rem',
				'14': '3.5rem',
			},
			colors: {
				theme: '#2a6bfe',
				desc: '#f8f8f8'
			}
		}
	},
	plugins: [],
}
