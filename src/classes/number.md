# SVG.Number

SVG.Number 类用于处理 SVG 中的数值数据，提供了一系列方法来操作和管理这些数值数据。

## 基本用法

```ts
// 创建数值
const number = new SVG.Number(100)

// 获取数值
const value = number.valueOf()

// 设置数值
number.value(200)
```

## 数值方法

### 基本操作

```ts
// 获取数值
const value = number.valueOf()

// 设置数值
number.value(200)

// 转换为字符串
const string = number.toString()
```

### 数值转换

```ts
// 转换为字符串
const string = number.toString()

// 转换为数字
const value = number.valueOf()

// 转换为百分比
const percent = number.toPercent()
```

### 数值操作

```ts
// 加法
const sum = number.plus(100)

// 减法
const difference = number.minus(100)

// 乘法
const product = number.times(2)

// 除法
const quotient = number.divide(2)
```

## 示例

### 基本数值操作

```ts
// 创建数值
const number = new SVG.Number(100)

// 获取数值
const value = number.valueOf()

// 设置数值
number.value(200)

// 转换为字符串
const string = number.toString()
```

### 数值转换

```ts
// 创建数值
const number = new SVG.Number(100)

// 转换为字符串
const string = number.toString()

// 转换为数字
const value = number.valueOf()

// 转换为百分比
const percent = number.toPercent()
```

### 数值操作

```ts
// 创建数值
const number = new SVG.Number(100)

// 加法
const sum = number.plus(100)

// 减法
const difference = number.minus(100)

// 乘法
const product = number.times(2)

// 除法
const quotient = number.divide(2)
```

## 最佳实践

1. 使用数值方法进行数值数据处理
2. 注意数值的性能影响
3. 使用适当的数值方法
4. 考虑数值的内存使用
5. 使用数值进行数值数据组织
6. 注意数值的边界情况
