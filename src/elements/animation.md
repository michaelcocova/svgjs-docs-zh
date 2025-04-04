# SVG.Animation

SVG.Animation 元素用于创建动画效果，可以控制元素的属性变化。它通过设置动画属性、持续时间和缓动函数来定义。

## 创建动画

```ts
// 创建元素
const rect = draw.rect(100, 100).fill('#f06')

// 创建动画
rect.animate(1000, '<>').move(100, 100).size(200, 200).fill('#0f6')
```

## 动画属性

### duration(ms)

设置动画持续时间：

```ts
// 设置动画持续时间
rect.animate(2000, '<>').move(100, 100)
```

### ease(ease)

设置动画缓动函数：

```ts
// 设置动画缓动函数
rect.animate(1000, 'bounce').move(100, 100)
```

### delay(ms)

设置动画延迟时间：

```ts
// 设置动画延迟时间
rect.animate(1000, '<>').delay(500).move(100, 100)
```

### loop(times, reverse)

设置动画循环次数：

```ts
// 设置动画循环次数
rect.animate(1000, '<>').loop(3).move(100, 100)
```

### after(callback)

设置动画结束后的回调：

```ts
// 设置动画结束后的回调
rect
  .animate(1000, '<>')
  .move(100, 100)
  .after(() => {
    console.log('动画结束')
  })
```

## 动画方法

### move(x, y)

移动元素：

```ts
// 移动元素
rect.animate(1000, '<>').move(100, 100)
```

### size(width, height)

改变元素尺寸：

```ts
// 改变元素尺寸
rect.animate(1000, '<>').size(200, 200)
```

### rotate(angle, cx, cy)

旋转元素：

```ts
// 旋转元素
rect.animate(1000, '<>').rotate(360, 50, 50)
```

### scale(x, y, cx, cy)

缩放元素：

```ts
// 缩放元素
rect.animate(1000, '<>').scale(2, 2, 50, 50)
```

### skew(x, y, cx, cy)

倾斜元素：

```ts
// 倾斜元素
rect.animate(1000, '<>').skew(10, 10, 50, 50)
```

### fill(color)

改变元素填充色：

```ts
// 改变元素填充色
rect.animate(1000, '<>').fill('#0f6')
```

### stroke(style)

改变元素描边：

```ts
// 改变元素描边
rect.animate(1000, '<>').stroke({ width: 4, color: '#000' })
```

### opacity(value)

改变元素透明度：

```ts
// 改变元素透明度
rect.animate(1000, '<>').opacity(0.5)
```

## 示例

### 基本用法

```ts
// 创建元素
const rect = draw.rect(100, 100).fill('#f06')

// 创建动画
rect.animate(1000, '<>').move(100, 100).size(200, 200).fill('#0f6')
```

### 链式动画

```ts
// 创建元素
const rect = draw.rect(100, 100).fill('#f06')

// 创建链式动画
rect
  .animate(1000, '<>')
  .move(100, 100)
  .after(() => {
    rect
      .animate(1000, '<>')
      .rotate(360, 50, 50)
      .after(() => {
        rect.animate(1000, '<>').scale(2, 2, 50, 50)
      })
  })
```

## 注意事项

1. 动画的持续时间以毫秒为单位
2. 动画的缓动函数可以是 '<>'、'bounce'、'elastic' 等
3. 动画可以通过 after() 方法设置回调
4. 动画可以通过 loop() 方法设置循环
5. 动画可以用于创建过渡、交互、加载等效果
