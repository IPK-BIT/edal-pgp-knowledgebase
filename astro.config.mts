// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi'
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
	redirects: {
		'/': '/edal-pgp-knowledgebase/01-about/',
	},
	integrations: [
		icon(),
		starlight({
			title: 'e!DAL-PGP Knowledge Base',
			favicon: "favicon.png",
			logo: {
				src: './src/assets/images/logos/edal.png',
				alt: 'e!DAL-PGP logo',
			},
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
			social: [
				{ icon: 'github', href: 'https://github.com/IPK-BIT/edal-pgp-knowledgebase', label: 'GitHub' },
			],
			plugins: [
				starlightLinksValidator(),
				starlightImageZoom(),
				starlightOpenAPI([
					{
					base: 'api',
					schema: 'src/schemas/api-schema.yaml',
					},
				]),
			],
			sidebar: [
				{ slug: '01-about' },
				{
					label: 'Data Submission',
					autogenerate: { directory: '02-data-submission' },
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
					items: [
						{ slug: '05-developer-docs/edal' },
						{ slug: '05-developer-docs/edal/download' },
						{ slug: '05-developer-docs/edal/developer-info' },
						{ slug: '05-developer-docs/edal/user-info' },
						{ slug: '05-developer-docs/edal-web' },
					],
				},
				...openAPISidebarGroups,
				{ slug: '01-about/acknowledgements' },
				{ slug: 'publications' },
				{ slug: '01-about/contact' },
				{ slug: '05-developer-docs/edal/license-disclaimer' },
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
