# SVG.Matrix

SVG.Matrix 类用于处理 SVG 中的矩阵变换，提供了一系列方法来操作和管理这些矩阵数据。

## 基本用法

```ts
// 创建矩阵
const matrix = new SVG.Matrix()

// 应用变换
matrix.translate(100, 100)
matrix.rotate(45)
matrix.scale(2, 2)
```

## 矩阵方法

### 基本操作

```ts
// 平移
matrix.translate(100, 100)

// 旋转
matrix.rotate(45)

// 缩放
matrix.scale(2, 2)

// 倾斜
matrix.skew(10, 20)
```

### 矩阵转换

```ts
// 转换为字符串
const string = matrix.toString()

// 转换为数组
const array = matrix.toArray()

// 转换为 CSS 变换
const transform = matrix.toTransform()
```

### 矩阵操作

```ts
// 矩阵乘法
const result = matrix.multiply(otherMatrix)

// 矩阵求逆
const inverse = matrix.inverse()

// 矩阵分解
const decomposed = matrix.decompose()
```

## 示例

### 基本矩阵操作

```ts
// 创建矩阵
const matrix = new SVG.Matrix()

// 应用变换
matrix.translate(100, 100)
matrix.rotate(45)
matrix.scale(2, 2)

// 转换为字符串
const string = matrix.toString()

// 转换为数组
const array = matrix.toArray()

// 转换为 CSS 变换
const transform = matrix.toTransform()
```

### 矩阵转换

```ts
// 创建矩阵
const matrix = new SVG.Matrix()

// 应用变换
matrix.translate(100, 100)
matrix.rotate(45)
matrix.scale(2, 2)

// 转换为字符串
const string = matrix.toString()

// 转换为数组
const array = matrix.toArray()

// 转换为 CSS 变换
const transform = matrix.toTransform()
```

### 矩阵操作

```ts
// 创建矩阵
const matrix = new SVG.Matrix()

// 应用变换
matrix.translate(100, 100)
matrix.rotate(45)
matrix.scale(2, 2)

// 矩阵乘法
const result = matrix.multiply(otherMatrix)

// 矩阵求逆
const inverse = matrix.inverse()

// 矩阵分解
const decomposed = matrix.decompose()
```

## 最佳实践

1. 使用矩阵方法进行矩阵数据处理
2. 注意矩阵的性能影响
3. 使用适当的矩阵方法
4. 考虑矩阵的内存使用
5. 使用矩阵进行矩阵数据组织
6. 注意矩阵的边界情况
