# 调整大小插件

## 安装

### 通过 npm 安装

```bash
npm install @svgdotjs/svg.resize.js
```

### 通过 CDN 引入

```html
<script src="https://cdn.jsdelivr.net/npm/@svgdotjs/svg.resize.js@latest/dist/svg.resize.min.js"></script>
```

## 基本用法

### 启用调整大小

```ts
// 创建元素
const rect = draw.rect(100, 100).fill('red')

// 启用调整大小
rect.resize()
```

### 配置选项

```ts
// 配置调整大小选项
rect.resize({
  minWidth: 50,
  maxWidth: 800,
  minHeight: 50,
  maxHeight: 600,
  snapToGrid: 10,
  preserveAspectRatio: true,
  constrain: true,
})
```

### 事件处理

```ts
// 调整大小开始事件
rect.on('resizestart', (event) => {
  console.log('调整大小开始')
})

// 调整大小中事件
rect.on('resizemove', (event) => {
  console.log('正在调整大小')
})

// 调整大小结束事件
rect.on('resizeend', (event) => {
  console.log('调整大小结束')
})
```

## 高级用法

### 自定义调整大小行为

```ts
// 自定义调整大小行为
rect.resize().on('resizemove', function (event) {
  // 获取调整大小信息
  const width = event.detail.width
  const height = event.detail.height

  // 自定义调整大小逻辑
  this.size(width, height)
})
```

### 保持宽高比

```ts
// 保持宽高比
rect.resize({
  preserveAspectRatio: true,
})
```

### 网格对齐

```ts
// 启用网格对齐
rect.resize({
  snapToGrid: 10,
})
```

## 最佳实践

1. 合理设置最小和最大尺寸
2. 使用网格对齐提高精度
3. 注意性能优化
4. 处理边界情况
5. 提供用户反馈
