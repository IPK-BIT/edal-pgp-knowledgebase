// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeSlug from 'rehype-slug';
import { rehypeAutolink } from './plugins/rehype-autolink';
import tailwind from '@astrojs/tailwind';
import starlightLinksValidator from 'starlight-links-validator'
import starlightImageZoom from 'starlight-image-zoom'
import icon from "astro-icon";

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	base: '/edal-pgp-knowledgebase',
	integrations: [
		icon(), 
		starlight({
			title: 'e!DAL-PGP Knowledge Base',
			favicon: "favicon.png",
			customCss: [
      // Relative path to your custom CSS file
      './src/styles/tailwind.css',
      './src/styles/custom.css',
    ],
    components: {
      MarkdownContent: '@components/starlight/MarkdownContent.astro',
      Footer: '@components/starlight/Footer.astro',
    },
    editLink: {
      baseUrl: 'https://github.com/IPK-BIT/edal-pgp-knowledgebase/edit/main/'
    },
			social: {
      	github: 'https://github.com/IPK-BIT/edal-pgp-knowledgebase',
    	},
			plugins: [
				starlightLinksValidator(),
				starlightImageZoom(),
    	],
			sidebar: [
				{
					label: 'About',
					collapsed: true,
					autogenerate: { directory: '01-about' },
				},
				{
					label: 'edal-Web Submission',
					autogenerate: { directory: '02-edal-web-submission' },
				},
				{
					label: 'Review Process',
					collapsed: true,
					autogenerate: { directory: '03-review-process' },
				},
				{
					label: 'The e!DAL-PGP repository',
					autogenerate: { directory: '04-pgp-repository' },
				},
				{
					label: 'Developer Docs',
					collapsed: true,
					badge: { text: 'For Developers', variant: 'note' },
					autogenerate: { directory: '05-developer-docs' },
				},
			],
    expressiveCode: {
      defaultProps: {
        // Enable wrap for specific languages
        overridesByLang: {
          'txt,md,bash': { wrap: true },
        },
      },
    },
  }),
	tailwind({
    // Disable the default base styles:
    applyBaseStyles: false,
  }),
	react()],
  markdown: {
    rehypePlugins: [rehypeSlug, ...rehypeAutolink()],
  },
});
