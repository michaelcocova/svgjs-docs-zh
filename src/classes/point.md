# SVG.Point

SVG.Point 类用于处理 SVG 中的点数据，提供了一系列方法来操作和管理这些点数据。

## 基本用法

```ts
// 创建点
const point = new SVG.Point(100, 100)

// 获取点坐标
const x = point.x
const y = point.y

// 设置点坐标
point.x = 200
point.y = 200
```

## 点方法

### 基本操作

```ts
// 获取点坐标
const x = point.x
const y = point.y

// 设置点坐标
point.x = 200
point.y = 200

// 转换为字符串
const string = point.toString()
```

### 点转换

```ts
// 转换为字符串
const string = point.toString()

// 转换为数组
const array = point.toArray()

// 转换为对象
const object = point.toObject()
```

### 点操作

```ts
// 加法
const sum = point.plus(otherPoint)

// 减法
const difference = point.minus(otherPoint)

// 乘法
const product = point.times(2)

// 除法
const quotient = point.divide(2)
```

## 示例

### 基本点操作

```ts
// 创建点
const point = new SVG.Point(100, 100)

// 获取点坐标
const x = point.x
const y = point.y

// 设置点坐标
point.x = 200
point.y = 200

// 转换为字符串
const string = point.toString()
```

### 点转换

```ts
// 创建点
const point = new SVG.Point(100, 100)

// 转换为字符串
const string = point.toString()

// 转换为数组
const array = point.toArray()

// 转换为对象
const object = point.toObject()
```

### 点操作

```ts
// 创建点
const point = new SVG.Point(100, 100)

// 加法
const sum = point.plus(otherPoint)

// 减法
const difference = point.minus(otherPoint)

// 乘法
const product = point.times(2)

// 除法
const quotient = point.divide(2)
```

## 最佳实践

1. 使用点方法进行点数据处理
2. 注意点的性能影响
3. 使用适当的点方法
4. 考虑点的内存使用
5. 使用点进行点数据组织
6. 注意点的边界情况
