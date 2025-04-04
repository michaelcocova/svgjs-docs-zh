# 导入插件

## 安装

### 通过 npm 安装

```bash
npm install @svgdotjs/svg.import.js
```

### 通过 CDN 引入

```html
<script src="https://cdn.jsdelivr.net/npm/@svgdotjs/svg.import.js@latest/dist/svg.import.min.js"></script>
```

## 基本用法

### 导入 SVG

```ts
// 创建画布
const draw = SVG().addTo('#drawing')

// 导入 SVG
draw.import('path/to/file.svg')
```

### 配置选项

```ts
// 配置导入选项
draw.import('path/to/file.svg', {
  format: 'svg',
  width: 800,
  height: 600,
  preserveAspectRatio: true,
  includeStyles: true,
})
```

### 导入格式

```ts
// 导入 PNG
draw.import('path/to/file.png', {
  format: 'png',
})

// 导入 JPEG
draw.import('path/to/file.jpg', {
  format: 'jpeg',
})

// 导入 PDF
draw.import('path/to/file.pdf', {
  format: 'pdf',
})
```

## 高级用法

### 自定义导入行为

```ts
// 自定义导入行为
draw.import('path/to/file.svg').then((data) => {
  // 处理导入数据
  console.log(data)
})
```

### 批量导入

```ts
// 批量导入
const files = ['file1.svg', 'file2.svg', 'file3.svg']
files.forEach((file) => {
  draw.import(file)
})
```

### 导入设置

```ts
// 设置导入尺寸
draw.import('path/to/file.svg', {
  width: 800,
  height: 600,
})

// 保持宽高比
draw.import('path/to/file.svg', {
  preserveAspectRatio: true,
})

// 包含样式
draw.import('path/to/file.svg', {
  includeStyles: true,
})
```

## 最佳实践

1. 选择合适的导入格式
2. 注意导入质量
3. 优化导入性能
4. 处理导入错误
5. 提供用户反馈
