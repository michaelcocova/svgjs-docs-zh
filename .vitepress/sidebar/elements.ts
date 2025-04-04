import type { DefaultTheme } from 'vitepress'
export default [
    {
        text: '元素操作',
        link: '/elements',
        items: [
            {
                text: '引用/创建元素',
                link: '/referencing',
                collapsed: true,
                items: [
                    {
                        text: '使用 CSS 选择器引用',
                        link: '/referencing/css-selectors',
                    },
                    {
                        text: '引用现有 DOM 元素',
                        link: '/referencing/dom-elements',
                    },
                    {
                        text: '使用 jQuery 或 Zepto',
                        link: '/referencing/jquery-zepto',
                    },
                    { text: '循环引用', link: '/referencing/circular' },
                    { text: '子元素引用', link: '/referencing/child' },
                    { text: '父元素引用', link: '/referencing/parent' },
                    { text: 'URI 引用', link: '/referencing/uri' },
                    { text: '创建元素', link: '/referencing/creating' },
                ],
            },
            {
                text: '操作',
                link: '/manipulating',
                collapsed: true,
                items: [
                    { text: '属性', link: '/manipulating/attributes' },
                    { text: '定位', link: '/manipulating/positioning' },
                    { text: '调整大小', link: '/manipulating/resizing' },
                    { text: '语法糖', link: '/manipulating/syntactic-sugar' },
                    { text: '变换', link: '/manipulating/transforming' },
                    { text: '样式', link: '/manipulating/styles' },
                    { text: '类', link: '/manipulating/classes' },
                    { text: '数据', link: '/manipulating/data' },
                    { text: '内存', link: '/manipulating/memory' },
                    { text: '文档树', link: '/manipulating/document-tree' },
                    { text: '排列', link: '/manipulating/arranging' },
                    { text: '几何', link: '/manipulating/geometry' },
                ],
            },
        ],
    }
] satisfies DefaultTheme.Sidebar