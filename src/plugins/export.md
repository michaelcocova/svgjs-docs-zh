# 导出插件

## 安装

### 通过 npm 安装

```bash
npm install @svgdotjs/svg.export.js
```

### 通过 CDN 引入

```html
<script src="https://cdn.jsdelivr.net/npm/@svgdotjs/svg.export.js@latest/dist/svg.export.min.js"></script>
```

## 基本用法

### 导出 SVG

```ts
// 创建元素
const rect = draw.rect(100, 100).fill('red')

// 导出 SVG
const svg = rect.export()
```

### 配置选项

```ts
// 配置导出选项
rect.export({
  format: 'svg',
  quality: 1,
  width: 800,
  height: 600,
  backgroundColor: 'white',
  includeStyles: true,
})
```

### 导出格式

```ts
// 导出为 PNG
rect.export({
  format: 'png',
})

// 导出为 JPEG
rect.export({
  format: 'jpeg',
})

// 导出为 PDF
rect.export({
  format: 'pdf',
})
```

## 高级用法

### 自定义导出行为

```ts
// 自定义导出行为
rect.export().then((data) => {
  // 处理导出数据
  console.log(data)
})
```

### 批量导出

```ts
// 批量导出
draw.selectAll('rect').export({
  format: 'png',
})
```

### 导出设置

```ts
// 设置导出质量
rect.export({
  quality: 0.8,
})

// 设置导出尺寸
rect.export({
  width: 800,
  height: 600,
})

// 设置背景颜色
rect.export({
  backgroundColor: 'white',
})
```

## 最佳实践

1. 选择合适的导出格式
2. 注意导出质量
3. 优化导出性能
4. 处理导出错误
5. 提供用户反馈
