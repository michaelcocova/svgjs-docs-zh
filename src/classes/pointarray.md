# SVG.PointArray

SVG.PointArray 类用于处理 SVG 中的点数组数据，提供了一系列方法来操作和管理这些点数据。

## 基本用法

```ts
// 创建点数组
const points = new SVG.PointArray([
  [0, 0],
  [100, 100],
  [200, 0],
])

// 访问点
const firstPoint = points[0]
const lastPoint = points[points.length - 1]
```

## 点数组方法

### 基本操作

```ts
// 获取点数组长度
const length = points.length

// 添加点
points.push([300, 100])

// 移除最后一个点
const lastPoint = points.pop()

// 在开头添加点
points.unshift([-100, 0])

// 移除第一个点
const firstPoint = points.shift()
```

### 点数组转换

```ts
// 映射点数组
const scaledPoints = points.map((point) => {
  return [point[0] * 2, point[1] * 2]
})

// 过滤点数组
const filteredPoints = points.filter((point) => {
  return point[0] > 100
})

// 归约点数组
const center = points.reduce(
  (acc, point) => {
    return [acc[0] + point[0], acc[1] + point[1]]
  },
  [0, 0]
)
```

### 点数组遍历

```ts
// 遍历点数组
points.forEach((point, index) => {
  console.log(point, index)
})

// 查找点
const foundPoint = points.find((point) => {
  return point[0] > 100
})

// 查找点索引
const index = points.findIndex((point) => {
  return point[0] > 100
})
```

## 示例

### 基本点数组操作

```ts
// 创建点数组
const points = new SVG.PointArray([
  [0, 0],
  [100, 100],
  [200, 0],
])

// 添加点
points.push([300, 100])

// 移除点
const lastPoint = points.pop()

// 遍历点数组
points.forEach((point, index) => {
  console.log(point, index)
})
```

### 点数组转换

```ts
// 创建点数组
const points = new SVG.PointArray([
  [0, 0],
  [100, 100],
  [200, 0],
])

// 映射点数组
const scaledPoints = points.map((point) => {
  return [point[0] * 2, point[1] * 2]
})

// 过滤点数组
const filteredPoints = points.filter((point) => {
  return point[0] > 100
})

// 归约点数组
const center = points.reduce(
  (acc, point) => {
    return [acc[0] + point[0], acc[1] + point[1]]
  },
  [0, 0]
)
```

### 点数组查找

```ts
// 创建点数组
const points = new SVG.PointArray([
  [0, 0],
  [100, 100],
  [200, 0],
])

// 查找点
const foundPoint = points.find((point) => {
  return point[0] > 100
})

// 查找点索引
const index = points.findIndex((point) => {
  return point[0] > 100
})
```

## 最佳实践

1. 使用点数组方法进行点数据处理
2. 注意点数组的性能影响
3. 使用适当的点数组方法
4. 考虑点数组的内存使用
5. 使用点数组进行点数据组织
6. 注意点数组的边界情况
