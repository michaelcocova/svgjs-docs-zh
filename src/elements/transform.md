# SVG.Transform

SVG.Transform 元素用于表示变换，可以用于设置元素的变换属性。它通过设置变换的类型和参数来定义。

## 创建变换

```ts
// 创建变换
const transform = new SVG.Transform()

// 或者使用矩阵
const matrix = new SVG.Matrix()
const transform = new SVG.Transform(matrix)
```

## 变换属性

### matrix

设置或获取变换矩阵：

```ts
// 设置变换矩阵
transform.matrix = new SVG.Matrix()

// 获取变换矩阵
const matrix = transform.matrix
```

## 变换方法

### translate(x, y)

平移：

```ts
// 平移
transform.translate(100, 100)
```

### scale(x, y)

缩放：

```ts
// 缩放
transform.scale(2, 2)
```

### rotate(angle, cx, cy)

旋转：

```ts
// 旋转
transform.rotate(45, 50, 50)
```

### skew(x, y, cx, cy)

倾斜：

```ts
// 倾斜
transform.skew(10, 10, 50, 50)
```

### multiply(transform)

矩阵乘法：

```ts
// 创建另一个变换
const otherTransform = new SVG.Transform()

// 矩阵乘法
const result = transform.multiply(otherTransform)
```

### inverse()

矩阵求逆：

```ts
// 矩阵求逆
const inverse = transform.inverse()
```

### toString()

转换为字符串：

```ts
// 转换为字符串
const string = transform.toString()
```

## 示例

### 基本用法

```ts
// 创建变换
const transform = new SVG.Transform()

// 平移
transform.translate(100, 100)

// 缩放
transform.scale(2, 2)

// 旋转
transform.rotate(45, 50, 50)

// 倾斜
transform.skew(10, 10, 50, 50)
```

### 变换组合

```ts
// 创建变换
const transform1 = new SVG.Transform().translate(100, 100).scale(2, 2)

const transform2 = new SVG.Transform().rotate(45, 50, 50).skew(10, 10, 50, 50)

// 变换组合
const result = transform1.multiply(transform2)
```

## 注意事项

1. 变换的矩阵可以通过属性直接访问和修改
2. 变换的方法会返回新的变换，不会修改原变换
3. 变换的操作可以用于创建复杂的变换效果
4. 变换的组合可以用于创建复合变换
5. 变换的字符串可以用于设置元素的 transform 属性
