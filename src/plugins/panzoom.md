# 平移缩放插件

## 安装

### 通过 npm 安装

```bash
npm install @svgdotjs/svg.panzoom.js
```

### 通过 CDN 引入

```html
<script src="https://cdn.jsdelivr.net/npm/@svgdotjs/svg.panzoom.js@latest/dist/svg.panzoom.min.js"></script>
```

## 基本用法

### 启用平移缩放

```ts
// 创建画布
const draw = SVG().addTo('#drawing')

// 启用平移缩放
draw.panZoom()
```

### 配置选项

```ts
// 配置平移缩放选项
draw.panZoom({
  zoomFactor: 1.1,
  minZoom: 0.5,
  maxZoom: 10,
  panning: true,
  zooming: true,
})
```

### 平移缩放类型

```ts
// 仅平移
draw.panZoom({
  panning: true,
  zooming: false,
})

// 仅缩放
draw.panZoom({
  panning: false,
  zooming: true,
})

// 平移和缩放
draw.panZoom({
  panning: true,
  zooming: true,
})
```

## 高级用法

### 自定义平移缩放行为

```ts
// 自定义平移缩放行为
draw.panZoom({
  onPan(dx, dy) {
    // 自定义平移行为
  },
  onZoom(zoom) {
    // 自定义缩放行为
  },
})
```

### 组合平移缩放

```ts
// 组合多个平移缩放
draw.panZoom().panZoom().panZoom()
```

### 平移缩放控制

```ts
// 平移
draw.pan(100, 100)

// 缩放
draw.zoom(2)

// 重置
draw.reset()
```

## 最佳实践

1. 选择合适的平移缩放参数
2. 注意平移缩放性能
3. 优化平移缩放效果
4. 处理平移缩放错误
5. 提供用户反馈
