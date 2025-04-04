# 几何操作

SVG.js 提供了多种方法来操作 SVG 元素的几何属性。以下是几何操作的方法：

## 位置操作

```ts
// 获取位置
const x = element.x()
const y = element.y()

// 设置位置
element.x(100)
element.y(100)

// 使用链式调用
element.x(100).y(100)
```

## 大小操作

```ts
// 获取大小
const width = element.width()
const height = element.height()

// 设置大小
element.width(100)
element.height(100)

// 使用链式调用
element.width(100).height(100)
```

## 边界操作

```ts
// 获取边界
const bbox = element.bbox()

// 获取变换后的边界
const tbbox = element.tbbox()

// 使用链式调用
element.bbox().tbbox()
```

## 路径操作

```ts
// 获取路径
const path = element.path()

// 设置路径
element.plot('M 0 0 L 100 100')

// 使用链式调用
element.path().plot('M 0 0 L 100 100')
```

## 注意事项

1. 几何操作支持链式调用
2. 几何操作应该谨慎使用
3. 几何操作可能会影响性能
4. 几何操作应该考虑浏览器兼容性
5. 几何操作应该遵循最佳实践
