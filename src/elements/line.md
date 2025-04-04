# SVG.Line

SVG.Line 元素用于创建直线。它通过起点和终点坐标来定义。

## 创建直线

```ts
// 创建一条直线
const line = draw.line(0, 0, 100, 100)

// 或者使用数组
const line = draw.line([
  [0, 0],
  [100, 100],
])
```

## 直线属性

### plot(points)

设置直线的点：

```ts
// 设置点
line.plot([
  [0, 0],
  [100, 100],
])

// 获取点
const points = line.plot()
```

### move(x, y)

移动直线：

```ts
// 移动直线
line.move(50, 50)
```

### size(width, height)

设置直线的尺寸：

```ts
// 设置尺寸
line.size(200, 200)
```

## 样式

### stroke(style)

设置直线的描边：

```ts
// 设置描边
line.stroke({ width: 2, color: '#000' })

// 设置虚线描边
line.stroke({ width: 2, color: '#000', dasharray: '5,5' })
```

### fill(color)

设置直线的填充色（通常不使用）：

```ts
// 设置填充色
line.fill('none')
```

## 示例

### 基本用法

```ts
// 创建直线
const line = draw.line(0, 0, 100, 100)

// 设置样式
line.stroke({ width: 2, color: '#000' })
```

### 动画示例

```ts
// 创建直线
const line = draw.line(0, 0, 100, 100).stroke({ width: 2, color: '#000' })

// 动画
line
  .animate(1000, '<>')
  .plot([
    [0, 0],
    [200, 200],
  ])
  .stroke({ width: 4, color: '#f06' })
```

## 注意事项

1. 直线没有填充色，只有描边
2. 直线的起点和终点坐标是相对于其父元素的
3. 直线的变换会影响其所有子元素
4. 直线可以通过 plot() 方法动态改变形状
5. 直线可以用于创建箭头、连接线等
