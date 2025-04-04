# SVG.TSpan

SVG.TSpan 元素用于创建文本片段，可以用于设置文本的样式和位置。它通过设置文本的内容和属性来定义。

## 创建文本片段

```ts
// 创建文本片段
const tspan = new SVG.TSpan()

// 或者使用参数
const tspan = new SVG.TSpan('Hello, World!')
```

## 文本片段属性

### text

设置或获取文本内容：

```ts
// 设置文本内容
tspan.text = 'Hello, World!'

// 获取文本内容
const text = tspan.text
```

### x

设置或获取文本的 x 坐标：

```ts
// 设置 x 坐标
tspan.x = 0

// 获取 x 坐标
const x = tspan.x
```

### y

设置或获取文本的 y 坐标：

```ts
// 设置 y 坐标
tspan.y = 0

// 获取 y 坐标
const y = tspan.y
```

### dx

设置或获取文本的水平偏移：

```ts
// 设置水平偏移
tspan.dx = 10

// 获取水平偏移
const dx = tspan.dx
```

### dy

设置或获取文本的垂直偏移：

```ts
// 设置垂直偏移
tspan.dy = 10

// 获取垂直偏移
const dy = tspan.dy
```

## 文本片段方法

### font(family, size)

设置字体：

```ts
// 设置字体
tspan.font('Arial', 12)
```

### fill(color)

设置填充颜色：

```ts
// 设置填充颜色
tspan.fill('red')
```

### stroke(color, width)

设置描边：

```ts
// 设置描边
tspan.stroke('black', 1)
```

### opacity(value)

设置透明度：

```ts
// 设置透明度
tspan.opacity(0.5)
```

### toString()

转换为字符串：

```ts
// 转换为字符串
const string = tspan.toString()
```

## 示例

### 基本用法

```ts
// 创建文本片段
const tspan = new SVG.TSpan('Hello, World!')

// 设置位置
tspan.x = 0
tspan.y = 0

// 设置样式
tspan.font('Arial', 12).fill('red').stroke('black', 1).opacity(0.5)
```

### 文本片段操作

```ts
// 创建文本片段
const tspan = new SVG.TSpan('Hello, World!')

// 设置位置和样式
tspan.x = 0
tspan.y = 0
tspan.font('Arial', 12).fill('red').stroke('black', 1).opacity(0.5)
```

## 注意事项

1. 文本片段的内容和属性可以通过属性直接访问和修改
2. 文本片段的方法会返回新的文本片段，不会修改原文本片段
3. 文本片段的操作可以用于创建复杂的文本效果
4. 文本片段的组合可以用于创建复合文本
5. 文本片段的字符串可以用于设置元素的 tspan 属性
