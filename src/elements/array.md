# SVG.Array

SVG.Array 元素用于表示数组，可以用于存储和操作多个值。它通过设置数组的各个元素来定义。

## 创建数组

```ts
// 创建数组
const array = new SVG.Array([1, 2, 3, 4, 5])

// 或者使用参数
const array = new SVG.Array(1, 2, 3, 4, 5)
```

## 数组属性

### length

获取数组长度：

```ts
// 获取数组长度
const length = array.length
```

## 数组方法

### push(value)

添加元素：

```ts
// 添加元素
array.push(6)
```

### pop()

移除最后一个元素：

```ts
// 移除最后一个元素
const value = array.pop()
```

### shift()

移除第一个元素：

```ts
// 移除第一个元素
const value = array.shift()
```

### unshift(value)

在开头添加元素：

```ts
// 在开头添加元素
array.unshift(0)
```

### splice(index, count, ...values)

在指定位置添加或移除元素：

```ts
// 在指定位置添加或移除元素
array.splice(2, 1, 10, 11)
```

### slice(start, end)

获取子数组：

```ts
// 获取子数组
const subArray = array.slice(1, 3)
```

### concat(array)

连接数组：

```ts
// 创建另一个数组
const otherArray = new SVG.Array([6, 7, 8, 9, 10])

// 连接数组
const result = array.concat(otherArray)
```

### join(separator)

将数组转换为字符串：

```ts
// 将数组转换为字符串
const string = array.join(',')
```

### reverse()

反转数组：

```ts
// 反转数组
array.reverse()
```

### sort(compare)

排序数组：

```ts
// 排序数组
array.sort((a, b) => {
  return a - b
})
```

### forEach(callback)

遍历数组：

```ts
// 遍历数组
array.forEach((value, index) => {
  console.log(value, index)
})
```

### map(callback)

映射数组：

```ts
// 映射数组
const mapped = array.map((value) => {
  return value * 2
})
```

### filter(callback)

过滤数组：

```ts
// 过滤数组
const filtered = array.filter((value) => {
  return value > 3
})
```

### reduce(callback, initial)

归约数组：

```ts
// 归约数组
const sum = array.reduce((accumulator, value) => {
  return accumulator + value
}, 0)
```

## 示例

### 基本用法

```ts
// 创建数组
const array = new SVG.Array(1, 2, 3, 4, 5)

// 添加元素
array.push(6)

// 移除元素
const value = array.pop()

// 遍历数组
array.forEach((value, index) => {
  console.log(value, index)
})
```

### 数组操作

```ts
// 创建数组
const array = new SVG.Array(1, 2, 3, 4, 5)

// 数组操作
const result = array
  .map((value) => {
    return value * 2
  })
  .filter((value) => {
    return value > 5
  })
  .reduce((accumulator, value) => {
    return accumulator + value
  }, 0)
```

## 注意事项

1. 数组的元素可以通过索引直接访问和修改
2. 数组的方法会返回新的数组，不会修改原数组
3. 数组的操作可以用于创建复杂的数据处理
4. 数组的遍历可以用于处理每个元素
5. 数组的映射和过滤可以用于转换和筛选数据
