# 教程和示例

本部分包含 SVG.js 的教程和示例，帮助你更好地理解和使用 SVG.js。

## 基础教程

### 创建画布

```ts
// 创建画布
const draw = SVG('drawing').size(300, 300)
```

### 创建元素

```ts
// 创建矩形
const rect = draw.rect(100, 100).fill('#f06')

// 创建圆形
const circle = draw.circle(100).fill('#0f6')

// 创建文本
const text = draw.text('Hello, SVG.js!').font({ size: 20 })
```

### 动画元素

```ts
// 创建动画
rect.animate(1000).move(100, 100)
circle.animate(1000).rotate(45)
text.animate(1000).opacity(0.5)
```

## 高级教程

### 使用容器元素

```ts
// 创建组
const group = draw.group()

// 在组中添加元素
group.rect(100, 100).fill('#f06')
group.circle(100).fill('#0f6')

// 移动组
group.move(100, 100)
```

### 使用渐变

```ts
// 创建渐变
const gradient = draw.gradient('linear', (stop) => {
  stop.at(0, '#f06')
  stop.at(1, '#0f6')
})

// 应用渐变
rect.fill(gradient)
```

### 使用动画时间线

```ts
// 创建时间线
const timeline = new SVG.Timeline()

// 添加动画到时间线
timeline.schedule(rect.animate(1000).move(100, 100))
timeline.schedule(circle.animate(1000).rotate(45), 1000)
timeline.schedule(text.animate(1000).opacity(0.5), 2000)

// 播放时间线
timeline.play()
```

## 示例

### 创建图表

```ts
// 创建画布
const draw = SVG('drawing').size(300, 300)

// 创建数据
const data = [10, 20, 30, 40, 50]

// 创建柱状图
data.forEach((value, index) => {
  draw
    .rect(50, value * 5)
    .fill('#f06')
    .move(index * 60, 300 - value * 5)
})
```

### 创建动画图标

```ts
// 创建画布
const draw = SVG('drawing').size(300, 300)

// 创建图标
const icon = draw.group()
icon.circle(100).fill('#f06')
icon.text('SVG.js').font({ size: 20 }).center(150, 150)

// 创建动画
icon.animate(1000).rotate(360).loop()
```

## 最佳实践

1. 使用适当的元素类型
2. 考虑使用容器元素组织相关元素
3. 使用链式方法设置元素属性
4. 注意元素的尺寸和位置
5. 使用适当的填充和描边
6. 考虑使用符号和定义重用元素
