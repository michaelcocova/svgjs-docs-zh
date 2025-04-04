# SVG.Symbol

SVG.Symbol 元素用于定义可重用的图形模板。Symbol 元素本身不会显示，需要通过 SVG.Use 元素来使用。

## 创建 Symbol

```ts
// 创建一个 Symbol
const symbol = draw.symbol()

// 或者直接创建并添加到画布
const symbol = draw.symbol().addTo('#drawing')
```

## 添加元素到 Symbol

```ts
// 创建 Symbol
const symbol = draw.symbol()

// 添加元素到 Symbol
const rect = symbol.rect(100, 100).fill('#f06')
const circle = symbol.circle(100).fill('#f06')
```

## 使用 Symbol

使用 SVG.Use 元素来显示 Symbol：

```ts
// 创建 Symbol
const symbol = draw.symbol()
symbol.rect(100, 100).fill('#f06')

// 使用 Symbol
const use = draw.use(symbol)
```

## Symbol 属性

### viewBox(x, y, width, height)

设置 Symbol 的视口：

```ts
// 设置视口
symbol.viewBox(0, 0, 100, 100)

// 获取视口
const { x, y, width, height } = symbol.viewBox()
```

### preserveAspectRatio(align, meetOrSlice)

设置 Symbol 的宽高比保持方式：

```ts
// 设置宽高比保持方式
symbol.preserveAspectRatio('xMidYMid', 'meet')
```

## 示例

### 基本用法

```ts
// 创建 Symbol
const symbol = draw.symbol()
symbol.rect(100, 100).fill('#f06')

// 使用 Symbol
const use = draw.use(symbol)
use.move(100, 100)
```

### 多个实例

```ts
// 创建 Symbol
const symbol = draw.symbol()
symbol.rect(100, 100).fill('#f06')

// 创建多个实例
const use1 = draw.use(symbol).move(100, 100)
const use2 = draw.use(symbol).move(200, 200)
const use3 = draw.use(symbol).move(300, 300)
```

## 注意事项

1. Symbol 元素本身不会显示
2. Symbol 可以通过 SVG.Use 元素多次使用
3. Symbol 内的元素可以设置样式，但会被 SVG.Use 元素的样式覆盖
4. Symbol 可以包含动画，但动画会在所有实例中同步播放
