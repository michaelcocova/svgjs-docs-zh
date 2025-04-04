# SVG.Text

SVG.Text 元素用于在 SVG 中创建文本元素。它可以通过设置文本内容、位置、样式等属性来定义。

## 创建文本

```ts
// 创建文本
const text = draw.text('Hello, SVG.js!')

// 设置位置
text.move(50, 50)
```

## 文本属性

### text(content)

设置文本内容：

```ts
// 设置文本内容
text.text('Hello, SVG.js!')

// 获取文本内容
const content = text.text()
```

### font(font)

设置字体样式：

```ts
// 设置字体样式
text.font({
  family: 'Arial',
  size: 24,
  weight: 'bold',
  style: 'italic',
})
```

### leading(value)

设置行间距：

```ts
// 设置行间距
text.leading(1.5)
```

### lines(value)

设置文本行数：

```ts
// 设置文本行数
text.lines(2)
```

### tspan(content)

添加文本片段：

```ts
// 添加文本片段
text.tspan('Hello, ').tspan('SVG.js!').fill('#f06')
```

## 样式

### fill(color)

设置文本颜色：

```ts
// 设置文本颜色
text.fill('#f06')
```

### stroke(style)

设置文本描边：

```ts
// 设置文本描边
text.stroke({ width: 1, color: '#000' })
```

## 示例

### 基本用法

```ts
// 创建文本
const text = draw
  .text('Hello, SVG.js!')
  .move(50, 50)
  .font({
    family: 'Arial',
    size: 24,
    weight: 'bold',
  })
  .fill('#f06')
```

### 动画示例

```ts
// 创建文本
const text = draw
  .text('Hello, SVG.js!')
  .move(50, 50)
  .font({
    family: 'Arial',
    size: 24,
    weight: 'bold',
  })
  .fill('#f06')

// 动画
text.animate(1000, '<>').move(100, 100).font({ size: 36 }).fill('#0f6')
```

## 注意事项

1. 文本的位置是相对于其父元素的
2. 文本的变换会影响其所有子元素
3. 文本可以通过 tspan() 方法添加多个文本片段
4. 文本的字体样式可以通过 font() 方法设置
5. 文本可以用于创建标签、标题、说明等
