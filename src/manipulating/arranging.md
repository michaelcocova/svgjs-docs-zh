# 排列操作

SVG.js 提供了多种方法来操作 SVG 元素的排列。以下是排列操作的方法：

## 对齐操作

```ts
// 左对齐
element.align('left')

// 右对齐
element.align('right')

// 顶部对齐
element.align('top')

// 底部对齐
element.align('bottom')

// 居中对齐
element.align('center')

// 使用链式调用
element.align('left').align('top')
```

## 分布操作

```ts
// 水平分布
element.distribute('horizontal')

// 垂直分布
element.distribute('vertical')

// 使用链式调用
element.distribute('horizontal').distribute('vertical')
```

## 排序操作

```ts
// 按 x 坐标排序
element.sort('x')

// 按 y 坐标排序
element.sort('y')

// 按自定义函数排序
element.sort((a, b) => {
  return a.x() - b.x()
})

// 使用链式调用
element.sort('x').sort('y')
```

## 布局操作

```ts
// 网格布局
element.layout('grid', {
  columns: 3,
  rows: 2,
  spacing: 10,
})

// 流式布局
element.layout('flow', {
  direction: 'horizontal',
  spacing: 10,
})

// 使用链式调用
element
  .layout('grid', { columns: 3, rows: 2 })
  .layout('flow', { direction: 'horizontal' })
```

## 注意事项

1. 排列操作支持链式调用
2. 排列操作应该谨慎使用
3. 排列操作可能会影响性能
4. 排列操作应该考虑浏览器兼容性
5. 排列操作应该遵循最佳实践
