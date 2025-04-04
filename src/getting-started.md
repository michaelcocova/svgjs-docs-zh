# 快速开始

本指南将帮助你快速上手 SVG.js。

## 基本用法

首先，创建一个 SVG 画布：

```ts
// 创建一个 SVG 画布
const draw = SVG().addTo('#drawing')
```

## 创建基本图形

### 矩形

```ts
// 创建一个矩形
const rect = draw.rect(100, 100).fill('#f06')
```

### 圆形

```ts
// 创建一个圆形
const circle = draw.circle(100).fill('#f06')
```

### 线条

```ts
// 创建一条线
const line = draw.line(0, 0, 100, 150).stroke({ width: 1, color: '#f06' })
```

## 动画

SVG.js 提供了强大的动画系统：

```ts
// 创建一个动画
rect.animate(1000, '<>').attr({ fill: '#f03' }).move(100, 100)
```

## 事件处理

```ts
// 添加点击事件
rect.click(function () {
  this.fill({ color: '#f03' })
})
```

## 组合元素

```ts
// 创建一个组
const group = draw.group()
group.add(rect)
group.add(circle)
```

## 变换

```ts
// 旋转元素
rect.rotate(45)
// 缩放元素
rect.scale(1.5)
// 移动元素
rect.move(100, 100)
```

## 下一步

- 学习[SVG 元素](/elements)的详细用法
- 了解[动画系统](/animating)的更多功能
- 探索[事件处理](/events)的完整功能
