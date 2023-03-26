/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1400px'
			},
			colors: {
				primary: '#6444DF',
				'primary-dark': '#7958FC',
				'primary-light': '#AB97FC',
				secondary: '#9E38ED',
				'secondary-dark': '#B454FF',
				'secondary-light': '#D49DFF',
				black: '#2D3047',
				'black-dark': '#494F7A',
				'black-light': '#AAAFD6',
				'gray-dark': '#F6F6FC',
				'gray-light': '#F9F9F9',
				'white-light': '#FDFDFD'
			},
			backgroundImage: {
				'primary-gradient': 'linear-gradient(127.11deg, #7958FC 2.93%, #B454FF 93.91%)'
			},
			fontFamily: {
				primary: ['Poppins', ...defaultTheme.fontFamily.sans]
			},
			fontSize: {
				sm: ['0.75rem', '1.5'],
				base: ['1rem', '1.5'],
				lg: ['1.25rem', '1.5'],
				xl: ['1.5rem', '1.4'],
				'2xl': ['2rem', '1.3'],
				'3xl': ['3rem', '1.3'],
				'4xl': ['4.5rem', '1.1']
			},
			boxShadow: {
				'shadow-1': '0px 125px 50px rgba(0, 0, 0, 0.01), 0px 31px 31px rgba(0, 0, 0, 0.04)'
			},
			borderRadius: {
				'5xl': '2.5rem'
			}
		},
		container: {
			center: true,
			padding: '1rem'
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp')
	]
};
