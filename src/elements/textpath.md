# SVG.TextPath

SVG.TextPath 元素用于创建路径文本，可以用于设置文本的样式和位置。它通过设置文本的内容和路径来定义。

## 创建路径文本

```ts
// 创建路径文本
const textPath = new SVG.TextPath()

// 或者使用参数
const textPath = new SVG.TextPath('Hello, World!', 'M 0 0 L 100 100')
```

## 路径文本属性

### text

设置或获取文本内容：

```ts
// 设置文本内容
textPath.text = 'Hello, World!'

// 获取文本内容
const text = textPath.text
```

### path

设置或获取路径：

```ts
// 设置路径
textPath.path = 'M 0 0 L 100 100'

// 获取路径
const path = textPath.path
```

### startOffset

设置或获取起始偏移：

```ts
// 设置起始偏移
textPath.startOffset = 0

// 获取起始偏移
const startOffset = textPath.startOffset
```

### method

设置或获取方法：

```ts
// 设置方法
textPath.method = 'align'

// 获取方法
const method = textPath.method
```

### spacing

设置或获取间距：

```ts
// 设置间距
textPath.spacing = 'auto'

// 获取间距
const spacing = textPath.spacing
```

## 路径文本方法

### font(family, size)

设置字体：

```ts
// 设置字体
textPath.font('Arial', 12)
```

### fill(color)

设置填充颜色：

```ts
// 设置填充颜色
textPath.fill('red')
```

### stroke(color, width)

设置描边：

```ts
// 设置描边
textPath.stroke('black', 1)
```

### opacity(value)

设置透明度：

```ts
// 设置透明度
textPath.opacity(0.5)
```

### toString()

转换为字符串：

```ts
// 转换为字符串
const string = textPath.toString()
```

## 示例

### 基本用法

```ts
// 创建路径文本
const textPath = new SVG.TextPath('Hello, World!', 'M 0 0 L 100 100')

// 设置起始偏移
textPath.startOffset = 0

// 设置样式
textPath.font('Arial', 12).fill('red').stroke('black', 1).opacity(0.5)
```

### 路径文本操作

```ts
// 创建路径文本
const textPath = new SVG.TextPath('Hello, World!', 'M 0 0 L 100 100')

// 设置起始偏移和样式
textPath.startOffset = 0
textPath.font('Arial', 12).fill('red').stroke('black', 1).opacity(0.5)
```

## 注意事项

1. 路径文本的内容和属性可以通过属性直接访问和修改
2. 路径文本的方法会返回新的路径文本，不会修改原路径文本
3. 路径文本的操作可以用于创建复杂的文本效果
4. 路径文本的组合可以用于创建复合文本
5. 路径文本的字符串可以用于设置元素的 textPath 属性
