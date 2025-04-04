# SVG.Circle

SVG.Circle 元素用于创建圆形。它是最基本的 SVG 形状之一。

## 创建圆形

```ts
// 创建一个圆形
const circle = draw.circle(100)

// 或者指定位置
const circle = draw.circle(100).move(50, 50)
```

## 圆形属性

### radius(r)

设置圆形的半径：

```ts
// 设置半径
circle.radius(50)

// 获取半径
const radius = circle.radius()
```

### center(x, y)

设置圆形的中心点：

```ts
// 设置中心点
circle.center(100, 100)

// 获取中心点
const { x, y } = circle.center()
```

### x(x)

设置或获取圆形的 x 坐标：

```ts
// 设置 x 坐标
circle.x(50)

// 获取 x 坐标
const x = circle.x()
```

### y(y)

设置或获取圆形的 y 坐标：

```ts
// 设置 y 坐标
circle.y(50)

// 获取 y 坐标
const y = circle.y()
```

## 样式

### fill(color)

设置圆形的填充色：

```ts
// 设置填充色
circle.fill('#f06')

// 使用渐变填充
circle.fill(gradient)
```

### stroke(style)

设置圆形的描边：

```ts
// 设置描边
circle.stroke({ width: 2, color: '#000' })

// 设置虚线描边
circle.stroke({ width: 2, color: '#000', dasharray: '5,5' })
```

## 示例

### 基本用法

```ts
// 创建圆形
const circle = draw.circle(100)

// 设置样式
circle.fill('#f06')
circle.stroke({ width: 2, color: '#000' })

// 设置位置
circle.center(100, 100)
```

### 动画示例

```ts
// 创建圆形
const circle = draw.circle(100).fill('#f06')

// 动画
circle.animate(1000, '<>').radius(50).center(200, 200).fill('#0f6')
```

## 注意事项

1. 圆形的半径不能为负数
2. 圆形的位置是相对于其父元素的
3. 圆形的变换会影响其所有子元素
4. 圆形的中心点可以通过 center() 方法设置
