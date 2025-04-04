# 导出

SVG.js 提供了多种导出 SVG 内容的方法，可以将 SVG 内容导出为不同的格式。

## 基本用法

```ts
// 获取 SVG 字符串
const svgString = draw.svg()

// 获取 SVG 元素
const svgElement = draw.node

// 获取 SVG 数据 URL
const dataUrl = draw.toDataUrl()
```

## 导出方法

### 导出为字符串

```ts
// 获取 SVG 字符串
var svgString = draw.svg()

// 获取带缩进的 SVG 字符串
var svgString = draw.svg(true)
```

### 导出为元素

```ts
// 获取 SVG 元素
const svgElement = draw.node

// 获取 SVG 元素的克隆
const svgClone = draw.node.cloneNode(true)
```

### 导出为数据 URL

```ts
// 获取 SVG 数据 URL
const dataUrl = draw.toDataUrl()

// 获取 PNG 数据 URL
const pngUrl = draw.toDataUrl('png')

// 获取 JPEG 数据 URL
const jpegUrl = draw.toDataUrl('jpeg')
```

## 示例

### 导出为字符串

```ts
// 创建画布
const draw = SVG('drawing')

// 创建矩形
const rect = draw.rect(100, 100).fill('#f06')

// 获取 SVG 字符串
var svgString = draw.svg()

// 获取带缩进的 SVG 字符串
var svgString = draw.svg(true)
```

### 导出为元素

```ts
// 创建画布
const draw = SVG('drawing')

// 创建矩形
const rect = draw.rect(100, 100).fill('#f06')

// 获取 SVG 元素
const svgElement = draw.node

// 获取 SVG 元素的克隆
const svgClone = draw.node.cloneNode(true)
```

### 导出为数据 URL

```ts
// 创建画布
const draw = SVG('drawing')

// 创建矩形
const rect = draw.rect(100, 100).fill('#f06')

// 获取 SVG 数据 URL
const dataUrl = draw.toDataUrl()

// 获取 PNG 数据 URL
const pngUrl = draw.toDataUrl('png')

// 获取 JPEG 数据 URL
const jpegUrl = draw.toDataUrl('jpeg')
```

## 最佳实践

1. 使用适当的导出方法
2. 注意导出的性能影响
3. 考虑导出的格式需求
4. 注意导出的内存使用
5. 使用导出进行数据备份
6. 注意导出的边界情况
