# 文档树操作

SVG.js 提供了多种方法来操作 SVG 文档树。以下是文档树操作的方法：

## 添加元素

```ts
// 添加子元素
parent.add(element)

// 添加多个子元素
parent.add([element1, element2])

// 使用链式调用
parent.add(element1).add(element2)
```

## 移除元素

```ts
// 移除子元素
parent.remove(element)

// 移除多个子元素
parent.remove([element1, element2])

// 移除所有子元素
parent.clear()

// 使用链式调用
parent.remove(element1).remove(element2)
```

## 移动元素

```ts
// 移动元素到指定位置
parent.put(element, 0)

// 移动元素到开头
parent.first(element)

// 移动元素到末尾
parent.last(element)

// 使用链式调用
parent.first(element1).last(element2)
```

## 查找元素

```ts
// 查找子元素
const child = parent.get(0)

// 查找第一个子元素
const first = parent.first()

// 查找最后一个子元素
const last = parent.last()

// 查找所有子元素
const children = parent.children()
```

## 注意事项

1. 文档树操作支持链式调用
2. 文档树操作应该谨慎使用
3. 文档树操作可能会影响性能
4. 文档树操作应该考虑浏览器兼容性
5. 文档树操作应该遵循最佳实践
