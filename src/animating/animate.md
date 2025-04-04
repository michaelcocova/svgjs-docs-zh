# 动画

SVG.js 提供了强大的动画功能，可以轻松地为 SVG 元素添加动画效果。

## 基本用法

```ts
// 创建一个矩形
const rect = draw.rect(100, 100).fill('#f06')

// 添加动画
rect.animate(1000, 100).move(300, 300)
```

## 动画属性

### duration

设置动画持续时间（毫秒）。

```ts
rect.animate(2000).move(300, 300)
```

### delay

设置动画延迟时间（毫秒）。

```ts
rect.animate(1000, 500).move(300, 300)
```

### ease

设置动画缓动函数。

```ts
rect.animate(1000).ease('<>').move(300, 300)
```

## 动画方法

### move()

移动元素。

```ts
rect.animate(1000).move(300, 300)
```

### rotate()

旋转元素。

```ts
rect.animate(1000).rotate(45)
```

### scale()

缩放元素。

```ts
rect.animate(1000).scale(2)
```

### opacity()

设置元素透明度。

```ts
rect.animate(1000).opacity(0.5)
```

## 示例

### 基本动画

```ts
// 创建一个矩形
const rect = draw.rect(100, 100).fill('#f06')

// 添加移动动画
rect.animate(1000).move(300, 300)

// 添加旋转动画
rect.animate(1000).rotate(45)

// 添加缩放动画
rect.animate(1000).scale(2)
```

### 链式动画

```ts
// 创建一个矩形
const rect = draw.rect(100, 100).fill('#f06')

// 添加链式动画
rect
  .animate(1000)
  .move(300, 300)
  .animate(1000)
  .rotate(45)
  .animate(1000)
  .scale(2)
```

## 最佳实践

1. 使用适当的动画持续时间
2. 使用缓动函数使动画更自然
3. 避免同时运行太多动画
4. 考虑使用 `delay` 属性来错开动画
5. 使用链式动画创建复杂的动画序列
