# 图案插件

## 安装

### 通过 npm 安装

```bash
npm install @svgdotjs/svg.pattern.js
```

### 通过 CDN 引入

```html
<script src="https://cdn.jsdelivr.net/npm/@svgdotjs/svg.pattern.js@latest/dist/svg.pattern.min.js"></script>
```

## 基本用法

### 创建图案

```ts
// 创建元素
const rect = draw.rect(100, 100)

// 创建图案
const pattern = draw.pattern(20, 20, (add) => {
  add.rect(20, 20).fill('red')
})

// 应用图案
rect.fill(pattern)
```

### 配置选项

```ts
// 配置图案选项
const pattern = draw.pattern(
  20,
  20,
  (add) => {
    add.rect(20, 20).fill('red')
  },
  {
    x: 0,
    y: 0,
    width: 20,
    height: 20,
    patternUnits: 'userSpaceOnUse',
    patternContentUnits: 'userSpaceOnUse',
  }
)

// 应用图案
rect.fill(pattern)
```

### 图案类型

```ts
// 矩形图案
const rectPattern = draw.pattern(20, 20, (add) => {
  add.rect(20, 20).fill('red')
})

// 圆形图案
const circlePattern = draw.pattern(20, 20, (add) => {
  add.circle(10).fill('red')
})

// 线条图案
const linePattern = draw.pattern(20, 20, (add) => {
  add.line(0, 0, 20, 20).stroke({ width: 2, color: 'red' })
})
```

## 高级用法

### 自定义图案行为

```ts
// 自定义图案行为
const pattern = draw.pattern(
  20,
  20,
  (add) => {
    // 添加自定义图案元素
    add.rect(20, 20).fill('red')
  },
  {
    // 自定义图案参数
    x: 0,
    y: 0,
    width: 20,
    height: 20,
  }
)

// 应用图案
rect.fill(pattern)
```

### 组合图案

```ts
// 组合图案
const pattern = draw.pattern(20, 20, (add) => {
  // 添加多个图案元素
  add.rect(20, 20).fill('red')
  add.circle(10).fill('blue')
  add.line(0, 0, 20, 20).stroke({ width: 2, color: 'green' })
})

// 应用图案
rect.fill(pattern)
```

### 图案控制

```ts
// 更新图案
pattern.update({
  // 更新参数
})

// 添加图案元素
pattern.add((add) => {
  add.rect(20, 20).fill('red')
})

// 移除图案元素
pattern.clear()
```

## 最佳实践

1. 合理设置图案尺寸
2. 使用合适的图案类型
3. 注意性能优化
4. 处理图案错误
5. 提供用户反馈
