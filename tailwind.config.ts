import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			backdropBlur: {
				xs: '2px'
			}
		}
	},

	
} satisfies Config;
