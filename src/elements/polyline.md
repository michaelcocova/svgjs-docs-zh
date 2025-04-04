# SVG.Polyline

SVG.Polyline 元素用于创建由多个点连接而成的折线。它通过一系列坐标点来定义。

## 创建折线

```ts
// 创建一条折线
const polyline = draw.polyline([
  [0, 0],
  [100, 100],
  [200, 0],
  [300, 100],
])

// 或者使用数组
const points = [
  [0, 0],
  [100, 100],
  [200, 0],
  [300, 100],
]
const polyline = draw.polyline(points)
```

## 折线属性

### plot(points)

设置折线的点：

```ts
// 设置点
polyline.plot([
  [0, 0],
  [100, 100],
  [200, 0],
  [300, 100],
])

// 获取点
const points = polyline.plot()
```

### move(x, y)

移动折线：

```ts
// 移动折线
polyline.move(50, 50)
```

### size(width, height)

设置折线的尺寸：

```ts
// 设置尺寸
polyline.size(400, 200)
```

## 样式

### stroke(style)

设置折线的描边：

```ts
// 设置描边
polyline.stroke({ width: 2, color: '#000' })

// 设置虚线描边
polyline.stroke({ width: 2, color: '#000', dasharray: '5,5' })
```

### fill(color)

设置折线的填充色：

```ts
// 设置填充色
polyline.fill('none')
```

## 示例

### 基本用法

```ts
// 创建折线
const polyline = draw.polyline([
  [0, 0],
  [100, 100],
  [200, 0],
  [300, 100],
])

// 设置样式
polyline.stroke({ width: 2, color: '#000' })
```

### 动画示例

```ts
// 创建折线
const polyline = draw
  .polyline([
    [0, 0],
    [100, 100],
    [200, 0],
    [300, 100],
  ])
  .stroke({ width: 2, color: '#000' })

// 动画
polyline
  .animate(1000, '<>')
  .plot([
    [0, 0],
    [200, 200],
    [400, 0],
    [600, 200],
  ])
  .stroke({ width: 4, color: '#f06' })
```

## 注意事项

1. 折线默认不填充，但可以通过 fill() 方法设置填充色
2. 折线的所有点坐标都是相对于其父元素的
3. 折线的变换会影响其所有子元素
4. 折线可以通过 plot() 方法动态改变形状
5. 折线可以用于创建图表、波形图等
