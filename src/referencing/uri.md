# URI 引用

URI 引用是指使用统一资源标识符（URI）来引用 SVG 元素。在 SVG.js 中，可以使用多种方式来创建和使用 URI 引用。

## 基本用法

```ts
// 创建一个元素并设置 ID
const rect = draw.rect(100, 100).fill('#f06').id('myRect')

// 使用 URI 引用
const reference = draw.reference('url(#myRect)')
```

## 引用方法

### 使用 reference() 方法

```ts
// 使用 ID 引用
var reference = draw.reference('#myRect')

// 使用完整 URI 引用
var reference = draw.reference('url(#myRect)')
```

### 使用 use() 方法

```ts
// 使用 use 元素引用
const use = draw.use('#myRect')
```

## 示例

### 创建和使用 URI 引用

```ts
// 创建一个元素并设置 ID
const rect = draw.rect(100, 100).fill('#f06').id('myRect')

// 使用 URI 引用
const reference = draw.reference('url(#myRect)')

// 使用 use 元素引用
const use = draw.use('#myRect')
```

### 使用多个 URI 引用

```ts
// 创建多个元素并设置 ID
const rect1 = draw.rect(100, 100).fill('#f06').id('rect1')
const rect2 = draw.rect(100, 100).fill('#00f').id('rect2')

// 使用多个 URI 引用
const reference1 = draw.reference('#rect1')
const reference2 = draw.reference('#rect2')
```

## 最佳实践

1. 使用 `id` 属性为元素设置唯一标识符
2. 使用 `reference()` 方法创建 URI 引用
3. 使用 `use()` 方法创建 use 元素引用
4. 注意性能影响，避免创建过多的 URI 引用
5. 考虑使用相对 URI 引用
