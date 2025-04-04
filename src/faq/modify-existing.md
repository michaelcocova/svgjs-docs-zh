# 如何修改 DOM 中已存在的元素？

## 问题描述

如何修改 DOM 中已经存在的 SVG 元素？

## 原因分析

SVG.js 提供了多种方法来引用和修改已存在的 SVG 元素。这些方法可以帮助您在不重新创建元素的情况下修改它们。

## 解决方案

### 方法一：使用 CSS 选择器

```ts
// 使用 CSS 选择器引用元素
const rect = SVG('#myRect')
rect.fill('red')
```

### 方法二：使用 DOM 元素

```ts
// 使用 DOM 元素引用
const domRect = document.getElementById('myRect')
const rect = SVG(domRect)
rect.fill('red')
```

### 方法三：使用 jQuery 或 Zepto

```ts
// 使用 jQuery 引用
const rect = SVG($('#myRect'))
rect.fill('red')
```

### 方法四：使用 SVG.js 的引用方法

```ts
// 使用 SVG.js 的引用方法
const draw = SVG('#drawing')
const rect = draw.findOne('#myRect')
rect.fill('red')
```

## 最佳实践

1. 选择合适的引用方法
2. 注意元素的存在性
3. 处理引用错误
4. 优化性能
5. 提供用户反馈
