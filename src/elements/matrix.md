# SVG.Matrix

SVG.Matrix 元素用于表示变换矩阵，可以用于设置元素的变换属性。它通过设置矩阵的组件来定义。

## 创建矩阵

```ts
// 创建矩阵
const matrix = new SVG.Matrix()

// 或者使用参数
const matrix = new SVG.Matrix(1, 0, 0, 1, 0, 0)
```

## 矩阵属性

### a

设置或获取矩阵的 a 组件：

```ts
// 设置 a 组件
matrix.a = 1

// 获取 a 组件
const a = matrix.a
```

### b

设置或获取矩阵的 b 组件：

```ts
// 设置 b 组件
matrix.b = 0

// 获取 b 组件
const b = matrix.b
```

### c

设置或获取矩阵的 c 组件：

```ts
// 设置 c 组件
matrix.c = 0

// 获取 c 组件
const c = matrix.c
```

### d

设置或获取矩阵的 d 组件：

```ts
// 设置 d 组件
matrix.d = 1

// 获取 d 组件
const d = matrix.d
```

### e

设置或获取矩阵的 e 组件：

```ts
// 设置 e 组件
matrix.e = 0

// 获取 e 组件
const e = matrix.e
```

### f

设置或获取矩阵的 f 组件：

```ts
// 设置 f 组件
matrix.f = 0

// 获取 f 组件
const f = matrix.f
```

## 矩阵方法

### translate(x, y)

平移：

```ts
// 平移
matrix.translate(100, 100)
```

### scale(x, y)

缩放：

```ts
// 缩放
matrix.scale(2, 2)
```

### rotate(angle, cx, cy)

旋转：

```ts
// 旋转
matrix.rotate(45, 50, 50)
```

### skew(x, y, cx, cy)

倾斜：

```ts
// 倾斜
matrix.skew(10, 10, 50, 50)
```

### multiply(matrix)

矩阵乘法：

```ts
// 创建另一个矩阵
const otherMatrix = new SVG.Matrix()

// 矩阵乘法
const result = matrix.multiply(otherMatrix)
```

### inverse()

矩阵求逆：

```ts
// 矩阵求逆
const inverse = matrix.inverse()
```

### toString()

转换为字符串：

```ts
// 转换为字符串
const string = matrix.toString()
```

## 示例

### 基本用法

```ts
// 创建矩阵
const matrix = new SVG.Matrix()

// 平移
matrix.translate(100, 100)

// 缩放
matrix.scale(2, 2)

// 旋转
matrix.rotate(45, 50, 50)

// 倾斜
matrix.skew(10, 10, 50, 50)
```

### 矩阵操作

```ts
// 创建矩阵
const matrix = new SVG.Matrix()

// 平移和缩放
matrix.translate(100, 100).scale(2, 2)

// 旋转和倾斜
matrix.rotate(45, 50, 50).skew(10, 10, 50, 50)
```

## 注意事项

1. 矩阵的组件可以通过属性直接访问和修改
2. 矩阵的方法会返回新的矩阵，不会修改原矩阵
3. 矩阵的操作可以用于创建复杂的变换效果
4. 矩阵的组合可以用于创建复合变换
5. 矩阵的字符串可以用于设置元素的 transform 属性
