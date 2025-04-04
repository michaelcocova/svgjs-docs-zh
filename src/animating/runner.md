# SVG.Runner

`SVG.Runner` 是 SVG.js 中用于控制动画执行的对象。它提供了对动画的精细控制，包括暂停、恢复、停止和反转等功能。

## 基本用法

```ts
// 创建一个矩形
const rect = draw.rect(100, 100).fill('#f06')

// 创建动画并获取 runner
const runner = rect.animate(1000).move(300, 300)
```

## 控制方法

### pause()

暂停动画。

```ts
runner.pause()
```

### play()

恢复动画。

```ts
runner.play()
```

### stop()

停止动画。

```ts
runner.stop()
```

### reverse()

反转动画方向。

```ts
runner.reverse()
```

### finish()

立即完成动画。

```ts
runner.finish()
```

## 事件

### on()

添加事件监听器。

```ts
runner.on('finish', () => {
  console.log('Animation finished')
})
```

### off()

移除事件监听器。

```ts
runner.off('finish')
```

## 示例

### 控制动画

```ts
// 创建一个矩形
const rect = draw.rect(100, 100).fill('#f06')

// 创建动画并获取 runner
const runner = rect.animate(1000).move(300, 300)

// 暂停动画
runner.pause()

// 恢复动画
runner.play()

// 停止动画
runner.stop()

// 反转动画
runner.reverse()
```

### 事件处理

```ts
// 创建一个矩形
const rect = draw.rect(100, 100).fill('#f06')

// 创建动画并获取 runner
const runner = rect.animate(1000).move(300, 300)

// 添加事件监听器
runner.on('finish', () => {
  console.log('Animation finished')
})

runner.on('pause', () => {
  console.log('Animation paused')
})

runner.on('play', () => {
  console.log('Animation playing')
})
```

## 最佳实践

1. 使用 `pause()` 和 `play()` 来控制动画的暂停和恢复
2. 使用 `stop()` 来完全停止动画
3. 使用 `reverse()` 来反转动画方向
4. 使用 `finish()` 来立即完成动画
5. 使用事件监听器来处理动画状态变化
6. 注意性能影响，避免创建过多的 runner
