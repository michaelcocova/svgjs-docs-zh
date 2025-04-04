import type { DefaultTheme } from 'vitepress'
export default [
    {
        text: '其他',
        items: [
            {
                text: '常见问题',
                link: '/faq',
                collapsed: true,
                items: [
                    {
                        text: '初始化时生成两个 SVG 是 bug 吗？',
                        link: '/faq/two-svgs',
                    },
                    {
                        text: 'SVG.js 可以在 Node.js 中运行吗？',
                        link: '/faq/nodejs',
                    },
                    {
                        text: '如何修改 DOM 中已存在的元素？',
                        link: '/faq/modify-existing',
                    },
                    { text: '我需要帮助...', link: '/faq/help' },
                    {
                        text: '我发现了 bug，在哪里报告？',
                        link: '/faq/bug-report',
                    },
                    { text: '在哪里可以找到教程？', link: '/faq/tutorials' },
                    { text: '如何贡献或修复文档？', link: '/faq/contribute' },
                ],
            },
        ],
    }
] satisfies DefaultTheme.Sidebar