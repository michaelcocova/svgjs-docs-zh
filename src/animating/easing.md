# 缓动函数

缓动函数用于控制动画的速度变化，使动画更加自然和生动。SVG.js 提供了多种内置的缓动函数，也支持自定义缓动函数。

## 基本用法

```ts
// 创建一个矩形
const rect = draw.rect(100, 100).fill('#f06')

// 使用缓动函数
rect.animate(1000).ease('<>').move(300, 300)
```

## 内置缓动函数

### 线性缓动

```ts
rect.animate(1000).ease('-').move(300, 300)
```

### 二次缓动

```ts
rect.animate(1000).ease('<').move(300, 300) // 加速
rect.animate(1000).ease('>').move(300, 300) // 减速
```

### 三次缓动

```ts
rect.animate(1000).ease('<>').move(300, 300) // 加速后减速
```

### 弹性缓动

```ts
rect.animate(1000).ease('bounce').move(300, 300)
```

## 自定义缓动函数

```ts
// 创建自定义缓动函数
function myEase(pos) {
  return pos ** 2 // 二次方缓动
}

// 使用自定义缓动函数
rect.animate(1000).ease(myEase).move(300, 300)
```

## 示例

### 使用不同的缓动函数

```ts
// 创建一个矩形
const rect = draw.rect(100, 100).fill('#f06')

// 线性缓动
rect.animate(1000).ease('-').move(300, 300)

// 二次缓动（加速）
rect.animate(1000).ease('<').move(300, 300)

// 二次缓动（减速）
rect.animate(1000).ease('>').move(300, 300)

// 三次缓动
rect.animate(1000).ease('<>').move(300, 300)

// 弹性缓动
rect.animate(1000).ease('bounce').move(300, 300)
```

### 自定义缓动函数

```ts
// 创建自定义缓动函数
function myEase(pos) {
  return pos ** 2 // 二次方缓动
}

// 使用自定义缓动函数
rect.animate(1000).ease(myEase).move(300, 300)
```

## 最佳实践

1. 使用适当的缓动函数来增强动画效果
2. 考虑使用自定义缓动函数来实现特定的动画效果
3. 避免使用过于复杂的缓动函数，以免影响性能
4. 考虑使用缓动函数来模拟物理效果
5. 注意缓动函数对动画性能的影响
