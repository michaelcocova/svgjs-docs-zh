# SVG.Svg

SVG.Svg 是 SVG.js 中最基础的容器元素，用于创建 SVG 画布。

## 创建 SVG 画布

```ts
// 创建一个 SVG 画布
const draw = SVG().addTo('#drawing')

// 或者指定尺寸
const draw = SVG().size(300, 200).addTo('#drawing')
```

## 属性

### size(width, height)

设置 SVG 画布的尺寸。

```ts
// 设置尺寸
draw.size(300, 200)

// 获取尺寸
const { width, height } = draw.size()
```

### viewbox(x, y, width, height)

设置 SVG 的视口。

```ts
// 设置视口
draw.viewbox(0, 0, 300, 200)

// 获取视口
const { x, y, width, height } = draw.viewbox()
```

### clear()

清空 SVG 画布中的所有元素。

```ts
draw.clear()
```

## 示例

### 基本用法

```ts
// 创建画布
const draw = SVG().size(300, 200).addTo('#drawing')

// 创建矩形
const rect = draw.rect(100, 100).fill('#f06')

// 创建圆形
const circle = draw.circle(100).fill('#f06')
```

### 视口示例

```ts
// 创建画布
const draw = SVG().size(300, 200).addTo('#drawing')

// 设置视口
draw.viewbox(0, 0, 100, 100)

// 创建元素（相对于视口）
const rect = draw.rect(50, 50).fill('#f06')
```

## 注意事项

1. SVG 画布是其他所有 SVG 元素的容器
2. 一个页面可以创建多个 SVG 画布
3. 视口设置会影响所有子元素的坐标系统
