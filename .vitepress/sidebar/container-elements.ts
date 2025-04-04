import type { DefaultTheme } from 'vitepress'
export default [{
    text: '元素',
    items: [
        {
            text: '容器元素',
            link: '/container-elements',
            collapsed: true,
            items: [
                { text: 'SVG.Svg', link: '/container-elements/svg' },
                { text: 'SVG.G', link: '/container-elements/g' },
                { text: 'SVG.Symbol', link: '/container-elements/symbol' },
                { text: 'SVG.Defs', link: '/container-elements/defs' },
                { text: 'SVG.A', link: '/container-elements/a' },
            ],
        },
        {
            text: '其他元素',
            link: '/elements',
            collapsed: true,
            items: [
                { text: 'SVG 元素通用处理', link: '/elements/general' },
                { text: 'SVG.Dom', link: '/elements/dom' },
                { text: 'SVG.Rect', link: '/elements/rect' },
                { text: 'SVG.Circle', link: '/elements/circle' },
                { text: 'SVG.Ellipse', link: '/elements/ellipse' },
                { text: 'SVG.Line', link: '/elements/line' },
                { text: 'SVG.Polyline', link: '/elements/polyline' },
                { text: 'SVG.Polygon', link: '/elements/polygon' },
                { text: 'SVG.Path', link: '/elements/path' },
                { text: 'SVG.Text', link: '/elements/text' },
                { text: 'SVG.TextPath', link: '/elements/textpath' },
                { text: 'SVG.Tspan', link: '/elements/tspane' },
                { text: 'SVG.Image', link: '/elements/image' },
                { text: 'SVG.Gradient', link: '/elements/gradient' },
                { text: 'SVG.Pattern', link: '/elements/pattern' },
                { text: 'SVG.Mask', link: '/elements/mask' },
                { text: 'SVG.ClipPath', link: '/elements/clippath' },
                { text: 'SVG.Use', link: '/elements/use' },
                { text: 'SVG.Marker', link: '/elements/marker' },
                { text: 'SVG.Style', link: '/elements/style' },
                {
                    text: 'SVG.ForeignObject',
                    link: '/elements/foreignobject',
                },
            ],
        },
    ],
}] satisfies DefaultTheme.Sidebar