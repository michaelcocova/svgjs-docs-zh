# SVG.Timeline

`SVG.Timeline` 是 SVG.js 中用于管理多个动画的对象。它允许你创建复杂的动画序列，并控制它们的执行顺序。

## 基本用法

```ts
// 创建一个时间线
const timeline = new SVG.Timeline()

// 创建一个矩形
const rect = draw.rect(100, 100).fill('#f06')

// 添加动画到时间线
timeline.schedule(rect.animate(1000).move(300, 300))
```

## 控制方法

### schedule()

添加动画到时间线。

```ts
timeline.schedule(rect.animate(1000).move(300, 300))
```

### unschedule()

从时间线中移除动画。

```ts
timeline.unschedule(animation)
```

### pause()

暂停时间线。

```ts
timeline.pause()
```

### play()

恢复时间线。

```ts
timeline.play()
```

### stop()

停止时间线。

```ts
timeline.stop()
```

### seek()

跳转到指定时间。

```ts
timeline.seek(500) // 跳转到 500ms
```

## 示例

### 创建动画序列

```ts
// 创建一个时间线
const timeline = new SVG.Timeline()

// 创建一个矩形
const rect = draw.rect(100, 100).fill('#f06')

// 添加多个动画到时间线
timeline.schedule(rect.animate(1000).move(300, 300))
timeline.schedule(rect.animate(1000).rotate(45), 1000) // 延迟 1000ms
timeline.schedule(rect.animate(1000).scale(2), 2000) // 延迟 2000ms
```

### 控制时间线

```ts
// 创建一个时间线
const timeline = new SVG.Timeline()

// 创建一个矩形
const rect = draw.rect(100, 100).fill('#f06')

// 添加动画到时间线
timeline.schedule(rect.animate(1000).move(300, 300))

// 暂停时间线
timeline.pause()

// 恢复时间线
timeline.play()

// 停止时间线
timeline.stop()

// 跳转到指定时间
timeline.seek(500)
```

## 最佳实践

1. 使用 `schedule()` 方法来添加动画到时间线
2. 使用 `unschedule()` 方法来移除不需要的动画
3. 使用 `pause()` 和 `play()` 方法来控制时间线的暂停和恢复
4. 使用 `stop()` 方法来完全停止时间线
5. 使用 `seek()` 方法来跳转到指定时间
6. 注意性能影响，避免创建过多的时间线
