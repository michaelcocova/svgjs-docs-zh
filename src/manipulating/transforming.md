# 变换操作

SVG.js 提供了多种方法来操作 SVG 元素的变换。以下是变换操作的方法：

## 基本变换

```ts
// 平移
element.transform({ translate: [10, 10] })

// 旋转
element.transform({ rotate: 45 })

// 缩放
element.transform({ scale: 2 })

// 倾斜
element.transform({ skew: [10, 10] })

// 使用链式调用
element
  .transform({ translate: [10, 10] })
  .transform({ rotate: 45 })
  .transform({ scale: 2 })
  .transform({ skew: [10, 10] })
```

## 组合变换

```ts
// 组合变换
element.transform({
  translate: [10, 10],
  rotate: 45,
  scale: 2,
  skew: [10, 10],
})

// 使用链式调用
element.translate(10, 10).rotate(45).scale(2).skew(10, 10)
```

## 矩阵变换

```ts
// 使用矩阵
element.transform({
  matrix: [1, 0, 0, 1, 10, 10],
})

// 使用链式调用
element.matrix(1, 0, 0, 1, 10, 10)
```

## 相对变换

```ts
// 相对平移
element.dtransform({ translate: [10, 10] })

// 相对旋转
element.dtransform({ rotate: 45 })

// 相对缩放
element.dtransform({ scale: 2 })

// 使用链式调用
element
  .dtransform({ translate: [10, 10] })
  .dtransform({ rotate: 45 })
  .dtransform({ scale: 2 })
```

## 注意事项

1. 变换操作支持链式调用
2. 变换可以组合使用
3. 变换可以是绝对的或相对的
4. 变换操作会影响元素的位置、大小和形状
5. 变换操作应该考虑性能影响
