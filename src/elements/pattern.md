# SVG.Pattern

SVG.Pattern 元素用于创建图案，可以用于填充和描边。它通过设置图案内容和图案属性来定义。

## 创建图案

```ts
// 创建图案
const pattern = draw.pattern(20, 20, (add) => {
  // 添加图案内容
  add.rect(10, 10).fill('#f06')
  add.rect(10, 10).move(10, 10).fill('#0f6')
})
```

## 图案属性

### size(width, height)

设置图案尺寸：

```ts
// 设置图案尺寸
pattern.size(20, 20)
```

### update(update)

更新图案内容：

```ts
// 更新图案内容
pattern.update((add) => {
  add.rect(10, 10).fill('#f06')
  add.rect(10, 10).move(10, 10).fill('#0f6')
})
```

### url()

获取图案的 URL：

```ts
// 获取图案的 URL
const url = pattern.url()
```

## 使用图案

### fill(pattern)

使用图案填充：

```ts
// 创建图案
const pattern = draw.pattern(20, 20, (add) => {
  add.rect(10, 10).fill('#f06')
  add.rect(10, 10).move(10, 10).fill('#0f6')
})

// 创建元素
const rect = draw.rect(100, 100)

// 使用图案填充
rect.fill(pattern)
```

### stroke(pattern)

使用图案描边：

```ts
// 创建图案
const pattern = draw.pattern(20, 20, (add) => {
  add.rect(10, 10).fill('#f06')
  add.rect(10, 10).move(10, 10).fill('#0f6')
})

// 创建元素
const rect = draw.rect(100, 100)

// 使用图案描边
rect.stroke({ width: 2, color: pattern })
```

## 示例

### 基本用法

```ts
// 创建图案
const pattern = draw.pattern(20, 20, (add) => {
  add.rect(10, 10).fill('#f06')
  add.rect(10, 10).move(10, 10).fill('#0f6')
})

// 创建元素
const rect = draw.rect(100, 100)

// 使用图案填充
rect.fill(pattern)
```

### 动画示例

```ts
// 创建图案
const pattern = draw.pattern(20, 20, (add) => {
  add.rect(10, 10).fill('#f06')
  add.rect(10, 10).move(10, 10).fill('#0f6')
})

// 创建元素
const rect = draw.rect(100, 100)

// 使用图案填充
rect.fill(pattern)

// 动画
pattern
  .animate(1000, '<>')
  .size(40, 40)
  .update((add) => {
    add.rect(20, 20).fill('#f06')
    add.rect(20, 20).move(20, 20).fill('#0f6')
  })
```

## 注意事项

1. 图案的内容可以是任意 SVG 元素
2. 图案的尺寸决定了图案的重复方式
3. 图案可以通过 update() 方法动态修改
4. 图案的 URL 可以通过 url() 方法获取
5. 图案可以用于创建纹理、背景、边框等效果
