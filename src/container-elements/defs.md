# SVG.Defs

SVG.Defs 元素用于定义可重用的图形元素，如渐变、图案、滤镜等。Defs 元素本身不会显示，其内容需要通过引用才能显示。

## 创建 Defs

```ts
// 创建一个 Defs
const defs = draw.defs()

// 或者直接创建并添加到画布
const defs = draw.defs().addTo('#drawing')
```

## 添加元素到 Defs

```ts
// 创建 Defs
const defs = draw.defs()

// 添加渐变
const gradient = defs.gradient('linear', (stop) => {
  stop.at(0, '#f06')
  stop.at(1, '#0f6')
})

// 添加图案
const pattern = defs.pattern(10, 10, (add) => {
  add.rect(10, 10).fill('#f06')
})
```

## 使用 Defs 中的元素

### 使用渐变

```ts
// 创建渐变
const gradient = defs.gradient('linear', (stop) => {
  stop.at(0, '#f06')
  stop.at(1, '#0f6')
})

// 使用渐变
const rect = draw.rect(100, 100).fill(gradient)
```

### 使用图案

```ts
// 创建图案
const pattern = defs.pattern(10, 10, (add) => {
  add.rect(10, 10).fill('#f06')
})

// 使用图案
const rect = draw.rect(100, 100).fill(pattern)
```

## 示例

### 渐变示例

```ts
// 创建 Defs
const defs = draw.defs()

// 创建渐变
const gradient = defs.gradient('linear', (stop) => {
  stop.at(0, '#f06')
  stop.at(1, '#0f6')
})

// 使用渐变
const rect = draw.rect(100, 100).fill(gradient)
```

### 图案示例

```ts
// 创建 Defs
const defs = draw.defs()

// 创建图案
const pattern = defs.pattern(10, 10, (add) => {
  add.rect(10, 10).fill('#f06')
})

// 使用图案
const rect = draw.rect(100, 100).fill(pattern)
```

## 注意事项

1. Defs 元素本身不会显示
2. Defs 中的元素需要通过引用才能显示
3. Defs 可以包含多种类型的元素，如渐变、图案、滤镜等
4. Defs 中的元素可以被多次引用
5. Defs 中的元素可以设置样式，但会被引用元素的样式覆盖
