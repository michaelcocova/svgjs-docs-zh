import type { DefaultTheme } from 'vitepress'
export default [
    {
        text: '进阶功能',
        items: [
            {
                text: '类',
                link: '/classes',
                collapsed: true,
                items: [
                    { text: 'SVG.Box', link: '/classes/box' },
                    { text: 'SVG.List', link: '/classes/list' },
                    { text: 'SVG.Array', link: '/classes/array' },
                    { text: 'SVG.PointArray', link: '/classes/pointarray' },
                    { text: 'SVG.PathArray', link: '/classes/patharray' },
                    { text: 'SVG.Color', link: '/classes/color' },
                    { text: 'SVG.Matrix', link: '/classes/matrix' },
                    { text: 'SVG.Number', link: '/classes/number' },
                    { text: 'SVG.Point', link: '/classes/point' },
                    { text: 'SVG.EventTarget', link: '/classes/eventtarget' },
                ],
            },
            {
                text: '导入/导出',
                link: '/importing-exporting',
                collapsed: true,
                items: [
                    { text: '导入', link: '/importing-exporting/importing' },
                    { text: '导出', link: '/importing-exporting/exporting' },
                ],
            },
            {
                text: '扩展',
                link: '/extending',
                collapsed: true,
                items: [
                    { text: 'SVG.extend', link: '/extending/svg.extend' },
                    { text: '子类化', link: '/extending/subclassing' },
                ],
            },
            {
                text: '插件',
                link: '/plugins',
                collapsed: true,
                items: [
                    { text: 'svg.easing.js', link: '/plugins/easing' },
                    { text: 'svg.draggable.js', link: '/plugins/draggable' },
                    { text: 'svg.filter.js', link: '/plugins/filter' },
                    { text: 'svg.topath.js', link: '/plugins/topath' },
                    { text: 'svg.topoly.js', link: '/plugins/topoly' },
                    { text: 'svg.panzoom.js', link: '/plugins/panzoom' },
                    { text: 'ngx-svg', link: '/plugins/ngx-svg' },
                ],
            },
        ],
    }
] satisfies DefaultTheme.Sidebar