/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', 'node_modules/preline/dist/*.js'],
	safelist: [
		'text-red-400',
		'text-yellow-400',
		'text-green-400',
		'text-blue-400',
		'text-purple-400',
		'text-pink-400',

		'bg-red-400/10',
		'bg-yellow-400/10',
		'bg-green-400/10',
		'bg-blue-400/10',
		'bg-purple-400/10',
		'bg-pink-400/10',

		'ring-red-400/20',
		'ring-yellow-400/20',
		'ring-green-400/20',
		'ring-blue-400/20',
		'ring-purple-400/20',
		'ring-pink-400/20'
	],
	theme: {
		extend: {
			colors: {
				primary: '#b9b9b9',
				'primary-2': '#898884',
				'primary-3': '#73BFB8',
				secondary: '#FEC601',
				accent: '#EA7317'
			}
		}
	},
	plugins: [require('preline/plugin')]
};
