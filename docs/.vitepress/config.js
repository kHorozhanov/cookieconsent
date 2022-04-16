import { defineConfig } from "vitepress"
import 'dotenv/config'
import { GithubIcon, HeartIcon } from "../components/icons";

export default defineConfig({
    lang: 'en-US',
    title: 'CookieConsent',
    description: 'Simple cross-browser cookie-consent plugin written in vanilla js',
    lastUpdated: false,

    head: [
        ['link', {rel: 'preconnect', href: 'https://fonts.googleapis.com'}],
        ['link', {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true}],
        ['link', {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap'}],
        ['link', {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap'}]
    ],

    themeConfig: {
        repo: 'orestbida/cookieconsent',
        docsDir: 'docs',
        docsBranch: 'docs',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        algolia: {
            appId: process.env.ALGOLIA_APP_ID,
            apiKey: process.env.ALGOLIA_API_KEY,
            indexName: process.env.ALGOLIA_INDEX_NAME
        },

        nav: [
            {
                text: 'Config Reference',
                link: '/reference/configuration-reference.html'
            },
            {
                text: 'API Reference',
                link: '/reference/api-reference.html'
            },
            {
                icon: GithubIcon,
                ariaLabel: 'Github page',
                link: 'https://orestbida.com/demo-projects/cookieconsent/'
            },
            {
                icon: HeartIcon,
                ariaLabel: 'Donations',
                link: '/#todo'
            }
        ],

        sidebar: {
            '/': getGuideSidebar(),
            '/advanced/': getGuideSidebar(),
            '/reference/': getGuideSidebar()
        },
    }
});


function getGuideSidebar() {
    return [
        {
            text: 'Getting Started',
            children: [
                { text: 'Introduction', link: '/guide/introduction' },
                { text: 'QuickStart', link: '/guide/quickstart' },
            ]
        },
        {
            text: 'References',
            children: [
                { text: 'Config Options', link: '/reference/configuration-reference' },
                { text: 'API Methods', link: '/reference/api-reference' },
            ]
        },
        {
            text: 'Advanced',
            children: [
                { text: 'UI Customization', link: '/advanced/ui-customization' },
                { text: 'Callbacks and Events', link: '/advanced/callbacks-events' },
                { text: 'Custom Button Actions', link: '/advanced/button-actions' },
                { text: 'Scripts Management', link: '/advanced/manage-scripts' },
                { text: 'Revision Management', link: '/advanced/revision-management'}
            ]
        },
        {
            text: 'Additional resources',
            children: [
                { text: 'FAQ', link: '/additional/faq' },
                { text: 'Troubleshooting', link: '/additional/troubleshooting' },
                { text: 'License', link: '/additional/license' },
            ]
        }
    ]
}