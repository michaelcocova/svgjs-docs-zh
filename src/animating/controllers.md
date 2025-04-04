# 动画控制器

动画控制器用于控制动画的执行，包括暂停、恢复、停止和反转等功能。SVG.js 提供了多种类型的动画控制器。

## 基本用法

```ts
// 创建一个矩形
const rect = draw.rect(100, 100).fill('#f06')

// 创建动画并获取控制器
const controller = rect.animate(1000).move(300, 300).controller()
```

## 控制器类型

### 基本控制器

```ts
const controller = rect.animate(1000).move(300, 300).controller()
```

### 时间线控制器

```ts
const timeline = new SVG.Timeline()
const controller = timeline.controller()
```

### 自定义控制器

```ts
const controller = new SVG.Controller()
```

## 控制方法

### pause()

暂停动画。

```ts
controller.pause()
```

### play()

恢复动画。

```ts
controller.play()
```

### stop()

停止动画。

```ts
controller.stop()
```

### reverse()

反转动画方向。

```ts
controller.reverse()
```

### finish()

立即完成动画。

```ts
controller.finish()
```

## 示例

### 使用基本控制器

```ts
// 创建一个矩形
const rect = draw.rect(100, 100).fill('#f06')

// 创建动画并获取控制器
const controller = rect.animate(1000).move(300, 300).controller()

// 暂停动画
controller.pause()

// 恢复动画
controller.play()

// 停止动画
controller.stop()

// 反转动画
controller.reverse()
```

### 使用时间线控制器

```ts
// 创建一个时间线
const timeline = new SVG.Timeline()

// 创建一个矩形
const rect = draw.rect(100, 100).fill('#f06')

// 添加动画到时间线
timeline.schedule(rect.animate(1000).move(300, 300))

// 获取时间线控制器
const controller = timeline.controller()

// 控制时间线
controller.pause()
controller.play()
controller.stop()
controller.reverse()
```

## 最佳实践

1. 使用适当的控制器类型
2. 使用 `pause()` 和 `play()` 来控制动画的暂停和恢复
3. 使用 `stop()` 来完全停止动画
4. 使用 `reverse()` 来反转动画方向
5. 使用 `finish()` 来立即完成动画
6. 注意性能影响，避免创建过多的控制器
