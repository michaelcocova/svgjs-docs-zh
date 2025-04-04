# 入门指南

## 安装

### 通过 npm 安装

```bash
npm install @svgdotjs/svg.js
```

### 通过 CDN 引入

```html
<script src="https://cdn.jsdelivr.net/npm/@svgdotjs/svg.js@latest/dist/svg.min.js"></script>
```

## 基本用法

### 创建 SVG 画布

```ts
// 创建 SVG 画布
const draw = SVG().addTo('#drawing')

// 设置画布大小
draw.size(800, 600)
```

### 创建基本图形

```ts
// 创建矩形
const rect = draw.rect(100, 100).fill('red')

// 创建圆形
const circle = draw.circle(100).fill('blue')

// 创建线条
const line = draw.line(0, 0, 100, 100).stroke({ width: 2, color: 'black' })
```

### 添加文本

```ts
// 添加文本
const text = draw.text('Hello, World!').font({ size: 20, family: 'Arial' })
```

## 常见问题

### 1. 如何设置元素样式？

```ts
// 设置填充颜色
element.fill('red')

// 设置描边颜色
element.stroke('black')

// 设置描边宽度
element.stroke({ width: 2 })

// 设置透明度
element.opacity(0.5)
```

### 2. 如何添加事件监听器？

```ts
// 添加点击事件
element.on('click', (event) => {
  console.log('元素被点击了')
})

// 添加鼠标移入事件
element.on('mouseover', (event) => {
  console.log('鼠标移入元素')
})
```

### 3. 如何创建动画？

```ts
// 创建动画
element.animate(1000).fill('red')

// 链式调用动画
element.animate(1000).fill('red').stroke('black').opacity(0.5)
```

## 最佳实践

1. 使用链式调用简化代码
2. 合理使用事件委托
3. 注意性能优化
4. 遵循 SVG 规范
5. 保持代码可维护性
