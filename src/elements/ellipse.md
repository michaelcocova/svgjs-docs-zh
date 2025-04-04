# SVG.Ellipse

SVG.Ellipse 元素用于创建椭圆。它是圆形的扩展，可以分别设置 x 和 y 方向的半径。

## 创建椭圆

```ts
// 创建一个椭圆
const ellipse = draw.ellipse(100, 50)

// 或者指定位置
const ellipse = draw.ellipse(100, 50).move(50, 50)
```

## 椭圆属性

### radius(rx, ry)

设置椭圆的半径：

```ts
// 设置半径
ellipse.radius(50, 25)

// 获取半径
const { rx, ry } = ellipse.radius()
```

### center(x, y)

设置椭圆的中心点：

```ts
// 设置中心点
ellipse.center(100, 100)

// 获取中心点
const { x, y } = ellipse.center()
```

### x(x)

设置或获取椭圆的 x 坐标：

```ts
// 设置 x 坐标
ellipse.x(50)

// 获取 x 坐标
const x = ellipse.x()
```

### y(y)

设置或获取椭圆的 y 坐标：

```ts
// 设置 y 坐标
ellipse.y(50)

// 获取 y 坐标
const y = ellipse.y()
```

## 样式

### fill(color)

设置椭圆的填充色：

```ts
// 设置填充色
ellipse.fill('#f06')

// 使用渐变填充
ellipse.fill(gradient)
```

### stroke(style)

设置椭圆的描边：

```ts
// 设置描边
ellipse.stroke({ width: 2, color: '#000' })

// 设置虚线描边
ellipse.stroke({ width: 2, color: '#000', dasharray: '5,5' })
```

## 示例

### 基本用法

```ts
// 创建椭圆
const ellipse = draw.ellipse(100, 50)

// 设置样式
ellipse.fill('#f06')
ellipse.stroke({ width: 2, color: '#000' })

// 设置位置
ellipse.center(100, 100)
```

### 动画示例

```ts
// 创建椭圆
const ellipse = draw.ellipse(100, 50).fill('#f06')

// 动画
ellipse.animate(1000, '<>').radius(50, 25).center(200, 200).fill('#0f6')
```

## 注意事项

1. 椭圆的半径不能为负数
2. 椭圆的位置是相对于其父元素的
3. 椭圆的变换会影响其所有子元素
4. 椭圆的中心点可以通过 center() 方法设置
5. 椭圆可以看作是圆形的扩展，通过设置不同的 x 和 y 半径来实现
