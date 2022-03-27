import { defineConfig } from "vitepress"

export default defineConfig({
    title: 'CookieConsent',
    description: 'Simple cross-browser cookie-consent plugin written in vanilla js',

    themeConfig: {
        docsDir: 'docs',
        docsBranch: 'docs',
        lastUpdated: 'Last Updated',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',

        nav: [
            {
                text: 'Demo Playground',
                link: 'https://orestbida.com/demo-projects/cookieconsent/'
            },
            {
                text: 'Latest release',
                link: 'https://github.com/orestbida/cookieconsent/releases'
            }
        ],

        sidebar: {
            '/': getGuideSidebar(),
            '/advanced/': getGuideSidebar(),
            '/faq/': getFaqSidebar(),
        },
    },

    markdown: {
        lineNumbers: true
    }
});


function getGuideSidebar() {
    return [
        {
            text: 'Introduction',
            children: [
                { text: 'Getting Started', link: '/introduction/get-started' },
                { text: 'Configuration', link: '/introduction/configuration' },
            ]
        },
        {
            text: 'Advanced',
            children: [
                { text: 'UI Customization', link: '/advanced/ui-customization' },
                { text: 'API Reference', link: '/advanced/api-reference' },
                { text: 'Callbacks and Events', link: '/advanced/callbacks-events' },
                { text: 'Custom data actions', link: '/advanced/data-actions' }
            ]
        },
        {
            text: 'FAQ',
            children: [
                { text: 'Consent Records', link: '/faq/consent-records' },
                { text: 'Block Iframes', link: '/faq/block-iframes' }
            ]
        }
    ]
}

function getFaqSidebar() {
    return [
        {
            text: 'App Config',
            children: [{ text: 'Basics', link: '/config/basics' }]
        },
        {
            text: 'Theme Config',
            children: [
                { text: 'Homepage', link: '/config/homepage' },
                { text: 'Algolia Search', link: '/config/algolia-search' },
                { text: 'Carbon Ads', link: '/config/carbon-ads' }
            ]
        }
    ]
}