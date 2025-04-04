# DOM 元素

SVG.js 支持引用现有的 DOM 元素。以下是引用 DOM 元素的方法：

## 引用元素

```ts
// 引用 ID 元素
const element = SVG(document.getElementById('my-element'))

// 引用类元素
const elements = SVG(document.getElementsByClassName('my-class'))

// 引用标签元素
const elements = SVG(document.getElementsByTagName('rect'))

// 引用选择器元素
const element = SVG(document.querySelector('#my-element'))
const elements = SVG(document.querySelectorAll('.my-class'))
```

## 引用 SVG 元素

```ts
// 引用 SVG 元素
const svg = SVG(document.querySelector('svg'))

// 引用 SVG 子元素
const rect = SVG(document.querySelector('svg rect'))
const circle = SVG(document.querySelector('svg circle'))

// 引用 SVG 组元素
const group = SVG(document.querySelector('svg g'))
```

## 引用自定义元素

```ts
// 引用自定义元素
const element = SVG(document.querySelector('my-element'))

// 引用自定义 SVG 元素
const element = SVG(document.querySelector('my-svg-element'))

// 引用自定义组元素
const group = SVG(document.querySelector('my-group-element'))
```

## 注意事项

1. DOM 元素引用区分大小写
2. DOM 元素引用支持链式调用
3. DOM 元素引用可能会影响性能
4. DOM 元素引用应该考虑浏览器兼容性
5. DOM 元素引用应该遵循最佳实践
