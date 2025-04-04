# 可拖动插件

## 安装

### 通过 npm 安装

```bash
npm install @svgdotjs/svg.draggable.js
```

### 通过 CDN 引入

```html
<script src="https://cdn.jsdelivr.net/npm/@svgdotjs/svg.draggable.js@latest/dist/svg.draggable.min.js"></script>
```

## 基本用法

### 启用拖动

```ts
// 创建元素
const rect = draw.rect(100, 100).fill('red')

// 启用拖动
rect.draggable()
```

### 配置选项

```ts
// 配置拖动选项
rect.draggable({
  minX: 0,
  maxX: 800,
  minY: 0,
  maxY: 600,
  snapToGrid: 10,
  snapToAngle: 45,
  constrain: true,
})
```

### 事件处理

```ts
// 拖动开始事件
rect.on('dragstart', (event) => {
  console.log('拖动开始')
})

// 拖动中事件
rect.on('dragmove', (event) => {
  console.log('正在拖动')
})

// 拖动结束事件
rect.on('dragend', (event) => {
  console.log('拖动结束')
})
```

## 高级用法

### 自定义拖动行为

```ts
// 自定义拖动行为
rect.draggable().on('dragmove', function (event) {
  // 获取拖动位置
  const x = event.detail.x
  const y = event.detail.y

  // 自定义拖动逻辑
  this.move(x, y)
})
```

### 拖动限制

```ts
// 限制拖动范围
rect.draggable({
  constrain: true,
  minX: 0,
  maxX: 800,
  minY: 0,
  maxY: 600,
})
```

### 网格对齐

```ts
// 启用网格对齐
rect.draggable({
  snapToGrid: 10,
})
```

## 最佳实践

1. 合理设置拖动范围
2. 使用网格对齐提高精度
3. 注意性能优化
4. 处理边界情况
5. 提供用户反馈
