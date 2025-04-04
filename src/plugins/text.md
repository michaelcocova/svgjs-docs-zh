# 文本插件

## 安装

### 通过 npm 安装

```bash
npm install @svgdotjs/svg.text.js
```

### 通过 CDN 引入

```html
<script src="https://cdn.jsdelivr.net/npm/@svgdotjs/svg.text.js@latest/dist/svg.text.min.js"></script>
```

## 基本用法

### 创建文本

```ts
// 创建元素
const text = draw.text('Hello, World!')

// 设置样式
text
  .font({
    family: 'Arial',
    size: 20,
    weight: 'bold',
  })
  .fill('red')
```

### 配置选项

```ts
// 配置文本选项
const text = draw.text('Hello, World!', {
  'font': {
    family: 'Arial',
    size: 20,
    weight: 'bold',
  },
  'fill': 'red',
  'stroke': 'black',
  'stroke-width': 1,
})
```

### 文本类型

```ts
// 普通文本
const normal = draw.text('Hello, World!')

// 多行文本
const multiline = draw.text('Hello,\nWorld!')

// 路径文本
const path = draw.path('M 0 0 L 100 100')
const pathText = draw.text('Hello, World!').path(path)
```

## 高级用法

### 自定义文本行为

```ts
// 自定义文本行为
const text = draw.text((add) => {
  // 添加自定义文本内容
  add.tspan('Hello, ').font({ weight: 'bold' })
  add.tspan('World!').font({ style: 'italic' })
})

// 设置样式
text
  .font({
    family: 'Arial',
    size: 20,
  })
  .fill('red')
```

### 组合文本

```ts
// 组合文本
const text = draw.text((add) => {
  // 添加多个文本片段
  add.tspan('Hello, ').font({ weight: 'bold' })
  add.tspan('World!').font({ style: 'italic' })
  add.tspan('!').font({ weight: 'bold' })
})

// 设置样式
text
  .font({
    family: 'Arial',
    size: 20,
  })
  .fill('red')
```

### 文本控制

```ts
// 更新文本
text.text('New Text')

// 添加文本片段
text.tspan('New Span').font({ weight: 'bold' })

// 清除文本
text.clear()
```

## 最佳实践

1. 合理设置文本样式
2. 使用合适的文本类型
3. 注意性能优化
4. 处理文本错误
5. 提供用户反馈
