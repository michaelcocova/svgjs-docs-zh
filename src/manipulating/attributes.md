# 属性操作

SVG.js 提供了多种方法来操作 SVG 元素的属性。以下是属性操作的方法：

## 设置属性

```ts
// 设置单个属性
element.attr('fill', 'red')

// 设置多个属性
element.attr({
  'fill': 'red',
  'stroke': 'black',
  'stroke-width': 2,
})

// 使用链式调用
element.attr('fill', 'red').attr('stroke', 'black').attr('stroke-width', 2)
```

## 获取属性

```ts
// 获取单个属性
const fill = element.attr('fill')

// 获取多个属性
const attrs = element.attr(['fill', 'stroke', 'stroke-width'])
```

## 移除属性

```ts
// 移除单个属性
element.attr('fill', null)

// 移除多个属性
element.attr({
  fill: null,
  stroke: null,
})
```

## 属性类型

```ts
// 字符串属性
element.attr('class', 'my-class')

// 数字属性
element.attr('width', 100)

// 布尔属性
element.attr('disabled', true)

// 对象属性
element.attr('transform', {
  translate: [10, 10],
  rotate: 45,
})
```

## 注意事项

1. 属性名称区分大小写
2. 属性值可以是字符串、数字、布尔值或对象
3. 设置 `null` 可以移除属性
4. 获取不存在的属性返回 `null`
5. 属性操作支持链式调用
