import type { DefaultTheme } from 'vitepress'
export default [
    {
        text: '基础入门',
        items: [
            {
                text: '入门',
                collapsed: false,
                items: [
                    { text: '简介', link: '/introduction' },
                    { text: '安装', link: '/installation' },
                    { text: '快速开始', link: '/getting-started' },
                ],
            },
        ],
    }
] satisfies DefaultTheme.Sidebar