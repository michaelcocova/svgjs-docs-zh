# 动画

SVG.js 提供了强大的动画功能，可以让你轻松地创建和控制 SVG 元素的动画效果。

## 基本用法

```ts
// 创建一个简单的动画
rect.animate().move(100, 100)
```

## 动画属性

- duration: 动画持续时间
- delay: 动画延迟时间
- ease: 动画缓动函数
- when: 动画开始时间
- during: 动画进行中的回调
- after: 动画结束后的回调

## 链式调用

```ts
rect.animate().move(100, 100).rotate(45).scale(2)
```

## 更多示例

请参考官方文档获取更多动画相关的示例和用法。

## 动画功能概览

### 基础动画

- [动画基础 (animate)](/animating/animate) - 学习如何创建和控制基本动画
- [缓动效果 (easing)](/animating/easing) - 使用不同的缓动函数让动画更生动

### 动画控制

- [动画控制器 (controllers)](/animating/controllers) - 精确控制动画的播放、暂停和重启
- [动画运行器 (runner)](/animating/runner) - 管理单个动画的执行
- [时间轴 (timeline)](/animating/timeline) - 创建和管理复杂的动画序列

### 高级功能

- [动画编排 (orchestrate)](/animating/orchestrate) - 协调多个动画的执行顺序和时序

## 最佳实践

- 使用适当的缓动函数增强用户体验
- 合理控制动画时长，避免过长或过短
- 考虑性能影响，避免同时运行过多动画
- 使用时间轴管理复杂的动画序列
- 为动画添加适当的回调函数处理动画完成事件

## 示例

```ts
// 创建一个简单的动画
const rect = draw.rect(100, 100)
rect.animate(1000).move(100, 100)

// 使用缓动效果
rect.animate(1000, '>', 0).move(200, 200)

// 创建动画时间轴
const timeline = new SVG.Timeline()
timeline.add(rect.animate(1000).move(300, 300))
timeline.add(rect.animate(1000).rotate(45))
```

## 性能优化

- 优先使用 CSS 动画实现简单的过渡效果
- 避免同时执行大量动画
- 使用 `requestAnimationFrame` 优化动画性能
- 考虑使用硬件加速提升性能

## 浏览器兼容性

- 支持所有现代浏览器
- 在旧版浏览器中可能需要使用 polyfill
- 建议在目标浏览器中进行充分测试
