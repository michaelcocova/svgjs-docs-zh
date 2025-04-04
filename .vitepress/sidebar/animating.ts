import type { DefaultTheme } from 'vitepress'
export default [
    {
        text: '交互与动画',
        items: [
            {
                text: '动画',
                link: '/animating',
                collapsed: true,
                items: [
                    { text: '动画', link: '/animating/animate' },
                    { text: 'SVG.Runner', link: '/animating/runner' },
                    { text: '缓动', link: '/animating/easing' },
                    { text: 'SVG.Timeline', link: '/animating/timeline' },
                    { text: '控制器', link: '/animating/controllers' },
                    { text: '编排动画', link: '/animating/orchestrate' },
                ],
            },
            {
                text: '事件',
                link: '/events',
                collapsed: true,
                items: [
                    { text: '基本事件', link: '/events/basic-events' },
                    { text: '事件监听器', link: '/events/event-listeners' },
                    { text: '自定义事件', link: '/events/custom-events' },
                ],
            },
        ],
    }
] satisfies DefaultTheme.Sidebar