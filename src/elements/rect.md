# SVG.Rect

SVG.Rect 元素用于创建矩形。它是最基本的 SVG 形状之一。

## 创建矩形

```ts
// 创建一个矩形
const rect = draw.rect(100, 100)

// 或者指定位置
const rect = draw.rect(100, 100).move(50, 50)
```

## 矩形属性

### size(width, height)

设置矩形的尺寸：

```ts
// 设置尺寸
rect.size(200, 100)

// 获取尺寸
const { width, height } = rect.size()
```

### radius(rx, ry)

设置矩形的圆角：

```ts
// 设置圆角
rect.radius(10)

// 分别设置 x 和 y 方向的圆角
rect.radius(10, 20)
```

### x(x)

设置或获取矩形的 x 坐标：

```ts
// 设置 x 坐标
rect.x(50)

// 获取 x 坐标
const x = rect.x()
```

### y(y)

设置或获取矩形的 y 坐标：

```ts
// 设置 y 坐标
rect.y(50)

// 获取 y 坐标
const y = rect.y()
```

## 样式

### fill(color)

设置矩形的填充色：

```ts
// 设置填充色
rect.fill('#f06')

// 使用渐变填充
rect.fill(gradient)
```

### stroke(style)

设置矩形的描边：

```ts
// 设置描边
rect.stroke({ width: 2, color: '#000' })

// 设置虚线描边
rect.stroke({ width: 2, color: '#000', dasharray: '5,5' })
```

## 示例

### 基本用法

```ts
// 创建矩形
const rect = draw.rect(100, 100)

// 设置样式
rect.fill('#f06')
rect.stroke({ width: 2, color: '#000' })

// 设置圆角
rect.radius(10)
```

### 动画示例

```ts
// 创建矩形
const rect = draw.rect(100, 100).fill('#f06')

// 动画
rect.animate(1000, '<>').size(200, 100).radius(20).fill('#0f6')
```

## 注意事项

1. 矩形的尺寸不能为负数
2. 圆角半径不能超过矩形尺寸的一半
3. 矩形的位置是相对于其父元素的
4. 矩形的变换会影响其所有子元素
