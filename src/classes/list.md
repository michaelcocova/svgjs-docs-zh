# SVG.List

SVG.List 类用于管理 SVG 元素的集合，提供了一系列方法来操作和管理这些元素。

## 基本用法

```ts
// 创建元素列表
const list = new SVG.List()

// 添加元素到列表
list.add(element1, element2, element3)

// 从列表中移除元素
list.remove(element1)
```

## 列表方法

### 添加元素

```ts
// 添加单个元素
list.add(element)

// 添加多个元素
list.add(element1, element2, element3)

// 添加数组中的元素
list.add([element1, element2, element3])
```

### 移除元素

```ts
// 移除单个元素
list.remove(element)

// 移除多个元素
list.remove(element1, element2, element3)

// 移除数组中的元素
list.remove([element1, element2, element3])
```

### 清空列表

```ts
// 清空列表中的所有元素
list.clear()
```

### 检查元素

```ts
// 检查元素是否在列表中
const isInList = list.has(element)

// 获取元素在列表中的索引
const index = list.indexOf(element)
```

### 遍历元素

```ts
// 遍历列表中的元素
list.each((element, index) => {
  // 处理每个元素
})
```

## 示例

### 基本列表操作

```ts
// 创建画布
const draw = SVG('drawing')

// 创建元素列表
const list = new SVG.List()

// 创建一些元素
const rect1 = draw.rect(100, 100)
const rect2 = draw.rect(100, 100)
const rect3 = draw.rect(100, 100)

// 添加元素到列表
list.add(rect1, rect2, rect3)

// 遍历列表
list.each((element, index) => {
  element.fill('#f06')
})
```

### 列表过滤

```ts
// 创建画布
const draw = SVG('drawing')

// 创建元素列表
const list = new SVG.List()

// 创建一些元素
const rect1 = draw.rect(100, 100)
const rect2 = draw.rect(100, 100)
const rect3 = draw.rect(100, 100)

// 添加元素到列表
list.add(rect1, rect2, rect3)

// 过滤列表
const filteredList = list.filter((element) => {
  return element.attr('fill') === '#f06'
})
```

### 列表转换

```ts
// 创建画布
const draw = SVG('drawing')

// 创建元素列表
const list = new SVG.List()

// 创建一些元素
const rect1 = draw.rect(100, 100)
const rect2 = draw.rect(100, 100)
const rect3 = draw.rect(100, 100)

// 添加元素到列表
list.add(rect1, rect2, rect3)

// 转换列表
const transformedList = list.map((element) => {
  return element.attr('fill', '#f06')
})
```

## 最佳实践

1. 使用列表管理相关元素
2. 使用列表方法进行批量操作
3. 注意列表的性能影响
4. 使用适当的列表方法
5. 考虑列表的内存使用
6. 使用列表进行元素组织
