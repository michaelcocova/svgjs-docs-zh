# 导入和导出

SVG.js 提供了多种方式来导入和导出 SVG 内容。

## 导入 SVG

### 从字符串导入

```ts
const draw = SVG()
draw.svg('<svg>...</svg>')
```

### 从文件导入

```ts
// 使用 fetch
fetch('image.svg')
  .then(response => response.text())
  .then((svg) => {
    draw.svg(svg)
  })
```

## 导出 SVG

### 导出为字符串

```ts
const svgString = draw.svg()
```

### 导出为文件

```ts
// 创建下载链接
const link = document.createElement('a')
link.download = 'image.svg'
link.href = `data:image/svg+xml;utf8,${encodeURIComponent(draw.svg())}`
link.click()
```

## 注意事项

- 确保导入的 SVG 格式正确
- 处理跨域问题
- 考虑文件大小限制

## 更多信息

请参考官方文档获取完整的导入导出参考和用法说明。
