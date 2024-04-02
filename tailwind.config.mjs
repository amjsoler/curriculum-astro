/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'background': '#1e1e1e',
				'color1': '#222821',
				'color2': '#393E46',
				'color3': '#00ADB5',
				'color4': '#EEEEEE'
			},

			fontFamily: {
				'html': ['Poppins', 'sans-serif'],
			}
		},
	},
	plugins: [],
}
