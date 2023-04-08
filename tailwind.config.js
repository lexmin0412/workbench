/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			lineHeight: {
				'14': '3.5rem',
			}
		}
	},
	plugins: [],
}
