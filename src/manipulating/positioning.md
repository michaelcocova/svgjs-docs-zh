# 定位操作

SVG.js 提供了多种方法来操作 SVG 元素的位置。以下是定位操作的方法：

## 设置位置

```ts
// 设置 x 和 y 坐标
element.move(100, 100)

// 设置 x 坐标
element.x(100)

// 设置 y 坐标
element.y(100)

// 使用链式调用
element.x(100).y(100)
```

## 获取位置

```ts
// 获取 x 和 y 坐标
const x = element.x()
const y = element.y()

// 获取位置对象
const position = element.position()
console.log(position.x, position.y)
```

## 相对移动

```ts
// 相对移动
element.dmove(10, 10) // 向右和向下移动 10 个单位

// 使用链式调用
element.dmove(10, 10).dmove(-5, -5)
```

## 居中对齐

```ts
// 相对于父元素居中
element.center()

// 相对于指定元素居中
element.center(anotherElement)

// 相对于指定坐标居中
element.center(100, 100)
```

## 注意事项

1. 位置坐标以左上角为原点
2. 相对移动可以是正数或负数
3. 居中对齐可以相对于父元素、其他元素或指定坐标
4. 位置操作支持链式调用
5. 位置坐标可以是数字或字符串（带单位）
