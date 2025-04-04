# 缓动插件

## 安装

### 通过 npm 安装

```bash
npm install @svgdotjs/svg.easing.js
```

### 通过 CDN 引入

```html
<script src="https://cdn.jsdelivr.net/npm/@svgdotjs/svg.easing.js@latest/dist/svg.easing.min.js"></script>
```

## 基本用法

### 使用内置缓动函数

```ts
// 创建元素
const rect = draw.rect(100, 100).fill('red')

// 使用缓动函数
rect.animate(1000, 0, 'easeInOutQuad').move(100, 100)
```

### 配置选项

```ts
// 配置缓动选项
rect
  .animate(1000, 0, {
    ease: 'easeInOutQuad',
    delay: 0,
    when: 'now',
    during(pos, morph, eased) {
      // 自定义缓动行为
    },
  })
  .move(100, 100)
```

### 缓动类型

```ts
// 线性缓动
rect.animate(1000, 0, 'linear').move(100, 100)

// 二次缓动
rect.animate(1000, 0, 'easeInQuad').move(100, 100)

// 三次缓动
rect.animate(1000, 0, 'easeInOutCubic').move(100, 100)
```

## 高级用法

### 自定义缓动函数

```ts
// 自定义缓动函数
SVG.easing.custom = function (pos) {
  return pos * pos
}

// 使用自定义缓动函数
rect.animate(1000, 0, 'custom').move(100, 100)
```

### 组合缓动

```ts
// 组合多个缓动
rect
  .animate(1000, 0, 'easeInOutQuad')
  .move(100, 100)
  .animate(1000, 0, 'easeInOutCubic')
  .move(200, 200)
```

### 缓动控制

```ts
// 暂停缓动
rect.pause()

// 继续缓动
rect.play()

// 停止缓动
rect.stop()

// 反转缓动
rect.reverse()
```

## 最佳实践

1. 选择合适的缓动函数
2. 注意缓动性能
3. 优化缓动效果
4. 处理缓动错误
5. 提供用户反馈
