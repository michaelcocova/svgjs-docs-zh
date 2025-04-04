# 常见问题

这里收集了 SVG.js 使用过程中的常见问题和解决方案。

## 安装和导入

### 如何安装 SVG.js？

```bash
npm install @svgdotjs/svg.js
```

### 如何在项目中使用？

```ts
import { SVG } from '@svgdotjs/svg.js'
```

## 基本使用

### 如何创建 SVG 画布？

```ts
const draw = SVG().addTo('body')
```

### 如何设置 SVG 大小？

```ts
draw.size(300, 300)
```

## 常见问题

### 元素不显示？

- 检查 SVG 容器是否正确创建
- 确认元素是否添加到正确的容器中
- 验证元素的尺寸和位置是否在可视区域内

### 动画不工作？

- 检查动画参数是否正确设置
- 确认元素是否已经添加到文档中
- 验证动画目标属性是否有效

## 更多帮助

如果这里没有找到你需要的答案，请参考：

- 官方文档
- GitHub Issues
- Stack Overflow
