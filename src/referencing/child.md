# 子元素引用

子元素引用是指引用一个元素的子元素。在 SVG.js 中，可以使用多种方式来引用子元素。

## 基本用法

```ts
// 创建一个父元素
const group = draw.group()

// 添加子元素
const rect = group.rect(100, 100).fill('#f06')

// 引用子元素
const child = group.children()[0]
```

## 引用方法

### 使用 children() 方法

```ts
// 获取所有子元素
const children = group.children()

// 获取特定索引的子元素
const firstChild = group.children()[0]
```

### 使用 find() 方法

```ts
// 查找特定类型的子元素
const rects = group.find('rect')

// 查找特定类的子元素
const redElements = group.find('.red')
```

### 使用 first() 和 last() 方法

```ts
// 获取第一个子元素
const first = group.first()

// 获取最后一个子元素
const last = group.last()
```

## 示例

### 遍历子元素

```ts
// 遍历所有子元素
group.children().forEach((child) => {
  console.log(child)
})
```

### 查找特定子元素

```ts
// 查找所有矩形元素
const rects = group.find('rect')

// 查找所有红色元素
const redElements = group.find('.red')
```

## 最佳实践

1. 使用 `children()` 方法获取所有子元素
2. 使用 `find()` 方法查找特定子元素
3. 使用 `first()` 和 `last()` 方法获取第一个和最后一个子元素
4. 注意性能影响，避免频繁遍历子元素
5. 考虑使用 ID 或类名来引用特定子元素
