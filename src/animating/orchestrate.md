# 动画编排

动画编排是指将多个动画组合在一起，创建复杂的动画序列。SVG.js 提供了多种方式来实现动画编排。

## 基本用法

```ts
// 创建一个矩形
const rect = draw.rect(100, 100).fill('#f06')

// 创建动画序列
rect
  .animate(1000)
  .move(300, 300)
  .animate(1000)
  .rotate(45)
  .animate(1000)
  .scale(2)
```

## 编排方法

### 链式动画

```ts
rect
  .animate(1000)
  .move(300, 300)
  .animate(1000)
  .rotate(45)
  .animate(1000)
  .scale(2)
```

### 并行动画

```ts
// 创建多个动画
const move = rect.animate(1000).move(300, 300)
const rotate = rect.animate(1000).rotate(45)
const scale = rect.animate(1000).scale(2)

// 同时执行
move.play()
rotate.play()
scale.play()
```

### 时间线动画

```ts
// 创建时间线
const timeline = new SVG.Timeline()

// 添加动画到时间线
timeline.schedule(rect.animate(1000).move(300, 300))
timeline.schedule(rect.animate(1000).rotate(45), 1000)
timeline.schedule(rect.animate(1000).scale(2), 2000)
```

## 示例

### 链式动画序列

```ts
// 创建一个矩形
const rect = draw.rect(100, 100).fill('#f06')

// 创建链式动画序列
rect
  .animate(1000)
  .move(300, 300)
  .animate(1000)
  .rotate(45)
  .animate(1000)
  .scale(2)
  .animate(1000)
  .opacity(0.5)
```

### 并行动画序列

```ts
// 创建一个矩形
const rect = draw.rect(100, 100).fill('#f06')

// 创建多个动画
const move = rect.animate(1000).move(300, 300)
const rotate = rect.animate(1000).rotate(45)
const scale = rect.animate(1000).scale(2)
const opacity = rect.animate(1000).opacity(0.5)

// 同时执行所有动画
move.play()
rotate.play()
scale.play()
opacity.play()
```

### 时间线动画序列

```ts
// 创建一个时间线
const timeline = new SVG.Timeline()

// 创建一个矩形
const rect = draw.rect(100, 100).fill('#f06')

// 添加动画到时间线
timeline.schedule(rect.animate(1000).move(300, 300))
timeline.schedule(rect.animate(1000).rotate(45), 1000)
timeline.schedule(rect.animate(1000).scale(2), 2000)
timeline.schedule(rect.animate(1000).opacity(0.5), 3000)

// 播放时间线
timeline.play()
```

## 最佳实践

1. 使用链式动画创建简单的动画序列
2. 使用并行动画同时执行多个动画
3. 使用时间线创建复杂的动画序列
4. 考虑使用缓动函数使动画更自然
5. 注意性能影响，避免创建过多的动画
6. 使用事件监听器来处理动画状态变化
