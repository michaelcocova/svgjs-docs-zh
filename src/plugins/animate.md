# 动画插件

## 安装

### 通过 npm 安装

```bash
npm install @svgdotjs/svg.animate.js
```

### 通过 CDN 引入

```html
<script src="https://cdn.jsdelivr.net/npm/@svgdotjs/svg.animate.js@latest/dist/svg.animate.min.js"></script>
```

## 基本用法

### 创建动画

```ts
// 创建元素
const rect = draw.rect(100, 100).fill('red')

// 创建动画
rect.animate(1000).fill('blue')
```

### 配置选项

```ts
// 配置动画选项
rect
  .animate(1000, {
    delay: 0,
    when: 'now',
    during: 'absolute',
    wait: 0,
    times: 1,
    swing: true,
  })
  .fill('blue')
```

### 动画类型

```ts
// 线性动画
rect
  .animate(1000, {
    swing: false,
  })
  .fill('blue')

// 弹性动画
rect
  .animate(1000, {
    swing: true,
  })
  .fill('blue')

// 自定义动画
rect
  .animate(1000, {
    swing(pos) {
      return Math.sin((pos * Math.PI) / 2)
    },
  })
  .fill('blue')
```

## 高级用法

### 自定义动画行为

```ts
// 自定义动画行为
rect.animate(1000).during(function (pos, morph, eased) {
  // 处理动画过程
  this.fill('blue')
})
```

### 链式动画

```ts
// 链式动画
rect
  .animate(1000)
  .fill('blue')
  .animate(1000)
  .fill('red')
  .animate(1000)
  .fill('green')
```

### 动画控制

```ts
// 暂停动画
rect.pause()

// 继续动画
rect.play()

// 停止动画
rect.stop()

// 反转动画
rect.reverse()
```

## 最佳实践

1. 合理设置动画时长
2. 使用合适的动画类型
3. 注意性能优化
4. 处理动画错误
5. 提供用户反馈
