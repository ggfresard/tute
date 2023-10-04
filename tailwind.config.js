/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				eggshell: {
					DEFAULT: '#f4f1de',
					100: '#463f17',
					200: '#8b7f2e',
					300: '#c5b651',
					400: '#dcd397',
					500: '#f4f1de',
					600: '#f6f3e3',
					700: '#f8f6ea',
					800: '#faf9f1',
					900: '#fdfcf8'
				},
				burnt_sienna: {
					DEFAULT: '#e07a5f',
					100: '#36140a',
					200: '#6c2715',
					300: '#a23b1f',
					400: '#d7502b',
					500: '#e07a5f',
					600: '#e79680',
					700: '#edb1a0',
					800: '#f3cbc0',
					900: '#f9e5df'
				},
				delft_blue: {
					DEFAULT: '#3d405b',
					100: '#0c0d12',
					200: '#181a25',
					300: '#252737',
					400: '#313349',
					500: '#3d405b',
					600: '#5a5e87',
					700: '#7e83a9',
					800: '#a9acc6',
					900: '#d4d6e2'
				},
				cambridge_blue: {
					DEFAULT: '#81b29a',
					100: '#17261f',
					200: '#2f4c3e',
					300: '#46725d',
					400: '#5d987b',
					500: '#81b29a',
					600: '#9ac1ae',
					700: '#b3d0c2',
					800: '#cce0d7',
					900: '#e6efeb'
				},
				sunset: {
					DEFAULT: '#f2cc8f',
					100: '#442d08',
					200: '#895b10',
					300: '#cd8818',
					400: '#eaac48',
					500: '#f2cc8f',
					600: '#f4d5a4',
					700: '#f7e0bb',
					800: '#faead1',
					900: '#fcf5e8'
				}
			}
		}
	},
	plugins: [
		require('@tailwindcss/forms')
		// ...
	]
}
