# 大小调整操作

SVG.js 提供了多种方法来操作 SVG 元素的大小。以下是大小调整操作的方法：

## 设置大小

```ts
// 设置宽度和高度
element.size(100, 100)

// 设置宽度
element.width(100)

// 设置高度
element.height(100)

// 使用链式调用
element.width(100).height(100)
```

## 获取大小

```ts
// 获取宽度和高度
const width = element.width()
const height = element.height()

// 获取大小对象
const size = element.size()
console.log(size.width, size.height)
```

## 相对调整

```ts
// 相对调整
element.dsize(10, 10) // 增加宽度和高度 10 个单位

// 使用链式调用
element.dsize(10, 10).dsize(-5, -5)
```

## 保持比例

```ts
// 保持宽高比
element.size(100, null) // 只设置宽度，高度按比例调整

// 使用链式调用
element.width(100).height(null)
```

## 注意事项

1. 大小可以是数字或字符串（带单位）
2. 相对调整可以是正数或负数
3. 保持比例时，可以只设置一个维度
4. 大小调整支持链式调用
5. 某些元素可能有最小或最大大小限制
