# 选择插件

## 安装

### 通过 npm 安装

```bash
npm install @svgdotjs/svg.select.js
```

### 通过 CDN 引入

```html
<script src="https://cdn.jsdelivr.net/npm/@svgdotjs/svg.select.js@latest/dist/svg.select.min.js"></script>
```

## 基本用法

### 启用选择

```ts
// 创建元素
const rect = draw.rect(100, 100).fill('red')

// 启用选择
rect.select()
```

### 配置选项

```ts
// 配置选择选项
rect.select({
  multiple: true,
  deepSelect: true,
  tolerance: 5,
  snapToGrid: 10,
  constrain: true,
})
```

### 事件处理

```ts
// 选择开始事件
rect.on('selectstart', (event) => {
  console.log('选择开始')
})

// 选择中事件
rect.on('selectmove', (event) => {
  console.log('正在选择')
})

// 选择结束事件
rect.on('selectend', (event) => {
  console.log('选择结束')
})
```

## 高级用法

### 自定义选择行为

```ts
// 自定义选择行为
rect.select().on('selectmove', function (event) {
  // 获取选择信息
  const x = event.detail.x
  const y = event.detail.y
  const width = event.detail.width
  const height = event.detail.height

  // 自定义选择逻辑
  this.move(x, y).size(width, height)
})
```

### 多选模式

```ts
// 启用多选
rect.select({
  multiple: true,
})

// 获取选中的元素
const selected = rect.selected()
```

### 网格对齐

```ts
// 启用网格对齐
rect.select({
  snapToGrid: 10,
})
```

## 最佳实践

1. 合理设置选择范围
2. 使用网格对齐提高精度
3. 注意性能优化
4. 处理边界情况
5. 提供用户反馈
