# 父元素引用

父元素引用是指引用一个元素的父元素。在 SVG.js 中，可以使用多种方式来引用父元素。

## 基本用法

```ts
// 创建一个父元素
const group = draw.group()

// 添加子元素
const rect = group.rect(100, 100).fill('#f06')

// 引用父元素
const parent = rect.parent()
```

## 引用方法

### 使用 parent() 方法

```ts
// 获取直接父元素
const parent = rect.parent()

// 获取特定类型的父元素
const groupParent = rect.parent('g')
```

### 使用 parents() 方法

```ts
// 获取所有父元素
const parents = rect.parents()

// 获取特定类型的父元素
const groupParents = rect.parents('g')
```

### 使用 closest() 方法

```ts
// 获取最近的特定类型父元素
const closestGroup = rect.closest('g')
```

## 示例

### 遍历父元素

```ts
// 遍历所有父元素
rect.parents().forEach((parent) => {
  console.log(parent)
})
```

### 查找特定父元素

```ts
// 查找最近的组元素
const group = rect.closest('g')

// 查找所有组元素
const groups = rect.parents('g')
```

## 最佳实践

1. 使用 `parent()` 方法获取直接父元素
2. 使用 `parents()` 方法获取所有父元素
3. 使用 `closest()` 方法获取最近的特定类型父元素
4. 注意性能影响，避免频繁遍历父元素
5. 考虑使用 ID 或类名来引用特定父元素
