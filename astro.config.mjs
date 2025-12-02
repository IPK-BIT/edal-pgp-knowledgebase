// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	base: '/edal-pgp-knowledgebase',
	integrations: [
		starlight({
			title: 'edal-PGP',
			favicon: "favicon.png",
			customCss: [
      // Relative path to your custom CSS file
      './src/styles/tailwind.css',
      // './src/styles/custom.css',
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/IPK-BIT/edal-pgp-knowledgebase' }],
			sidebar: [
				{
					label: 'About',
					autogenerate: { directory: '01-about' },
				},
				{
					label: 'edal-Web Submission',
					autogenerate: { directory: '02-edal-web-submission' },
				},
				{
					label: 'Review Process',
					autogenerate: { directory: '03-review-process' },
				},
				{
					label: 'The PGP repository',
					autogenerate: { directory: '04-pgp-repository' },
				},
			],
		}),
	],
});
