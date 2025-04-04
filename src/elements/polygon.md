# SVG.Polygon

SVG.Polygon 元素用于创建由多个点连接而成的多边形。它通过一系列坐标点来定义，并且会自动闭合（最后一个点会连接到第一个点）。

## 创建多边形

```ts
// 创建一个三角形
const polygon = draw.polygon([
  [0, 0],
  [100, 100],
  [200, 0],
])

// 或者使用数组
const points = [
  [0, 0],
  [100, 100],
  [200, 0],
]
const polygon = draw.polygon(points)
```

## 多边形属性

### plot(points)

设置多边形的点：

```ts
// 设置点
polygon.plot([
  [0, 0],
  [100, 100],
  [200, 0],
])

// 获取点
const points = polygon.plot()
```

### move(x, y)

移动多边形：

```ts
// 移动多边形
polygon.move(50, 50)
```

### size(width, height)

设置多边形的尺寸：

```ts
// 设置尺寸
polygon.size(200, 200)
```

## 样式

### stroke(style)

设置多边形的描边：

```ts
// 设置描边
polygon.stroke({ width: 2, color: '#000' })

// 设置虚线描边
polygon.stroke({ width: 2, color: '#000', dasharray: '5,5' })
```

### fill(color)

设置多边形的填充色：

```ts
// 设置填充色
polygon.fill('#f06')
```

## 示例

### 基本用法

```ts
// 创建一个三角形
const polygon = draw.polygon([
  [0, 0],
  [100, 100],
  [200, 0],
])

// 设置样式
polygon.fill('#f06').stroke({ width: 2, color: '#000' })
```

### 动画示例

```ts
// 创建一个三角形
const polygon = draw
  .polygon([
    [0, 0],
    [100, 100],
    [200, 0],
  ])
  .fill('#f06')
  .stroke({ width: 2, color: '#000' })

// 动画
polygon
  .animate(1000, '<>')
  .plot([
    [0, 0],
    [200, 200],
    [400, 0],
  ])
  .fill('#0f6')
  .stroke({ width: 4, color: '#000' })
```

## 注意事项

1. 多边形会自动闭合（最后一个点会连接到第一个点）
2. 多边形的所有点坐标都是相对于其父元素的
3. 多边形的变换会影响其所有子元素
4. 多边形可以通过 plot() 方法动态改变形状
5. 多边形可以用于创建各种形状，如三角形、五边形、星形等
