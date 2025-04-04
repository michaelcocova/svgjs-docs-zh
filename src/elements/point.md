# SVG.Point

SVG.Point 元素用于表示点，可以用于设置元素的位置。它通过设置点的坐标来定义。

## 创建点

```ts
// 创建点
const point = new SVG.Point()

// 或者使用参数
const point = new SVG.Point(0, 0)
```

## 点属性

### x

设置或获取点的 x 坐标：

```ts
// 设置 x 坐标
point.x = 0

// 获取 x 坐标
const x = point.x
```

### y

设置或获取点的 y 坐标：

```ts
// 设置 y 坐标
point.y = 0

// 获取 y 坐标
const y = point.y
```

## 点方法

### clone()

克隆点：

```ts
// 克隆点
const clone = point.clone()
```

### transform(matrix)

变换：

```ts
// 创建矩阵
const matrix = new SVG.Matrix()

// 变换
const result = point.transform(matrix)
```

### add(point)

加法：

```ts
// 创建另一个点
const otherPoint = new SVG.Point(1, 1)

// 加法
const result = point.add(otherPoint)
```

### subtract(point)

减法：

```ts
// 创建另一个点
const otherPoint = new SVG.Point(1, 1)

// 减法
const result = point.subtract(otherPoint)
```

### multiply(scalar)

乘法：

```ts
// 乘法
const result = point.multiply(2)
```

### divide(scalar)

除法：

```ts
// 除法
const result = point.divide(2)
```

### normalize()

归一化：

```ts
// 归一化
const result = point.normalize()
```

### length()

获取长度：

```ts
// 获取长度
const length = point.length()
```

### distance(point)

获取距离：

```ts
// 创建另一个点
const otherPoint = new SVG.Point(1, 1)

// 获取距离
const distance = point.distance(otherPoint)
```

### angle(point)

获取角度：

```ts
// 创建另一个点
const otherPoint = new SVG.Point(1, 1)

// 获取角度
const angle = point.angle(otherPoint)
```

### toString()

转换为字符串：

```ts
// 转换为字符串
const string = point.toString()
```

## 示例

### 基本用法

```ts
// 创建点
const point = new SVG.Point(0, 0)

// 设置坐标
point.x = 1
point.y = 1

// 获取坐标
const x = point.x
const y = point.y
```

### 点操作

```ts
// 创建点
const point = new SVG.Point(0, 0)

// 创建另一个点
const otherPoint = new SVG.Point(1, 1)

// 加法和减法
const add = point.add(otherPoint)
const subtract = point.subtract(otherPoint)

// 乘法和除法
const multiply = point.multiply(2)
const divide = point.divide(2)

// 归一化
const normalize = point.normalize()

// 获取长度和距离
const length = point.length()
const distance = point.distance(otherPoint)

// 获取角度
const angle = point.angle(otherPoint)
```

## 注意事项

1. 点的坐标可以通过属性直接访问和修改
2. 点的方法会返回新的点，不会修改原点
3. 点的操作可以用于创建复杂的点效果
4. 点的组合可以用于创建复合点
5. 点的字符串可以用于设置元素的 point 属性
