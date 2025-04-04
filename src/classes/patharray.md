# SVG.PathArray

SVG.PathArray 类用于处理 SVG 中的路径数据，提供了一系列方法来操作和管理这些路径数据。

## 基本用法

```ts
// 创建路径数组
const pathArray = new SVG.PathArray([
  ['M', 0, 0],
  ['L', 100, 100],
  ['L', 200, 0],
  ['Z'],
])

// 访问路径命令
const firstCommand = pathArray[0]
const lastCommand = pathArray[pathArray.length - 1]
```

## 路径数组方法

### 基本操作

```ts
// 获取路径数组长度
const length = pathArray.length

// 添加路径命令
pathArray.push(['L', 300, 100])

// 移除最后一个路径命令
const lastCommand = pathArray.pop()

// 在开头添加路径命令
pathArray.unshift(['M', -100, 0])

// 移除第一个路径命令
const firstCommand = pathArray.shift()
```

### 路径数组转换

```ts
// 映射路径数组
const scaledPathArray = pathArray.map((command) => {
  return [command[0], command[1] * 2, command[2] * 2]
})

// 过滤路径数组
const filteredPathArray = pathArray.filter((command) => {
  return command[0] === 'L'
})

// 归约路径数组
const bounds = pathArray.reduce(
  (acc, command) => {
    return [
      Math.min(acc[0], command[1]),
      Math.min(acc[1], command[2]),
      Math.max(acc[2], command[1]),
      Math.max(acc[3], command[2]),
    ]
  },
  [Infinity, Infinity, -Infinity, -Infinity]
)
```

### 路径数组遍历

```ts
// 遍历路径数组
pathArray.forEach((command, index) => {
  console.log(command, index)
})

// 查找路径命令
const foundCommand = pathArray.find((command) => {
  return command[0] === 'L'
})

// 查找路径命令索引
const index = pathArray.findIndex((command) => {
  return command[0] === 'L'
})
```

## 示例

### 基本路径数组操作

```ts
// 创建路径数组
const pathArray = new SVG.PathArray([
  ['M', 0, 0],
  ['L', 100, 100],
  ['L', 200, 0],
  ['Z'],
])

// 添加路径命令
pathArray.push(['L', 300, 100])

// 移除路径命令
const lastCommand = pathArray.pop()

// 遍历路径数组
pathArray.forEach((command, index) => {
  console.log(command, index)
})
```

### 路径数组转换

```ts
// 创建路径数组
const pathArray = new SVG.PathArray([
  ['M', 0, 0],
  ['L', 100, 100],
  ['L', 200, 0],
  ['Z'],
])

// 映射路径数组
const scaledPathArray = pathArray.map((command) => {
  return [command[0], command[1] * 2, command[2] * 2]
})

// 过滤路径数组
const filteredPathArray = pathArray.filter((command) => {
  return command[0] === 'L'
})

// 归约路径数组
const bounds = pathArray.reduce(
  (acc, command) => {
    return [
      Math.min(acc[0], command[1]),
      Math.min(acc[1], command[2]),
      Math.max(acc[2], command[1]),
      Math.max(acc[3], command[2]),
    ]
  },
  [Infinity, Infinity, -Infinity, -Infinity]
)
```

### 路径数组查找

```ts
// 创建路径数组
const pathArray = new SVG.PathArray([
  ['M', 0, 0],
  ['L', 100, 100],
  ['L', 200, 0],
  ['Z'],
])

// 查找路径命令
const foundCommand = pathArray.find((command) => {
  return command[0] === 'L'
})

// 查找路径命令索引
const index = pathArray.findIndex((command) => {
  return command[0] === 'L'
})
```

## 最佳实践

1. 使用路径数组方法进行路径数据处理
2. 注意路径数组的性能影响
3. 使用适当的路径数组方法
4. 考虑路径数组的内存使用
5. 使用路径数组进行路径数据组织
6. 注意路径数组的边界情况
