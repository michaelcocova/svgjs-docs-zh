# CSS 选择器

SVG.js 支持使用 CSS 选择器来引用 SVG 元素。以下是使用 CSS 选择器的方法：

## 基本选择器

```ts
// ID 选择器
const element = SVG('#my-element')

// 类选择器
const elements = SVG('.my-class')

// 标签选择器
const elements = SVG('rect')

// 属性选择器
const elements = SVG('[fill="red"]')
```

## 组合选择器

```ts
// 后代选择器
const elements = SVG('g rect')

// 子元素选择器
const elements = SVG('g > rect')

// 相邻兄弟选择器
const elements = SVG('rect + circle')

// 通用兄弟选择器
const elements = SVG('rect ~ circle')
```

## 伪类选择器

```ts
// 第一个子元素
const element = SVG('rect:first-child')

// 最后一个子元素
const element = SVG('rect:last-child')

// 第 n 个子元素
const element = SVG('rect:nth-child(2)')

// 奇数子元素
const elements = SVG('rect:nth-child(odd)')

// 偶数子元素
const elements = SVG('rect:nth-child(even)')
```

## 注意事项

1. CSS 选择器区分大小写
2. CSS 选择器支持链式调用
3. CSS 选择器可能会影响性能
4. CSS 选择器应该考虑浏览器兼容性
5. CSS 选择器应该遵循最佳实践
