# 初始化时生成两个 SVG 是 bug 吗？

## 问题描述

当使用 SVG.js 初始化时，有时会看到生成了两个 SVG 元素。这是否是一个 bug？

## 原因分析

这不是一个 bug，而是 SVG.js 的正常行为。当您调用 `SVG()` 时，会创建一个新的 SVG 元素，而当您调用 `addTo()` 时，如果目标元素中已经存在一个 SVG 元素，SVG.js 会保留现有的 SVG 元素并添加一个新的。

## 解决方案

### 方法一：使用 `clear()` 方法

```ts
// 创建画布
const draw = SVG().addTo('#drawing')

// 清除现有内容
draw.clear()
```

### 方法二：手动删除现有 SVG

```ts
// 删除现有 SVG
document.querySelector('#drawing svg')?.remove()

// 创建画布
const draw = SVG().addTo('#drawing')
```

### 方法三：使用 `size()` 方法

```ts
// 创建画布并设置大小
const draw = SVG().size(800, 600).addTo('#drawing')
```

## 最佳实践

1. 在初始化前检查目标元素
2. 使用 `clear()` 方法清除现有内容
3. 设置合适的画布大小
4. 避免重复初始化
5. 提供用户反馈
