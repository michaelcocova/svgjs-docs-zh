# 路径插件

## 安装

### 通过 npm 安装

```bash
npm install @svgdotjs/svg.path.js
```

### 通过 CDN 引入

```html
<script src="https://cdn.jsdelivr.net/npm/@svgdotjs/svg.path.js@latest/dist/svg.path.min.js"></script>
```

## 基本用法

### 创建路径

```ts
// 创建元素
const path = draw.path('M 0 0 L 100 100')

// 设置样式
path.fill('red').stroke({ width: 2, color: 'black' })
```

### 配置选项

```ts
// 配置路径选项
const path = draw.path('M 0 0 L 100 100', {
  'fill': 'red',
  'stroke': 'black',
  'stroke-width': 2,
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
})
```

### 路径类型

```ts
// 直线路径
const line = draw.path('M 0 0 L 100 100')

// 曲线路径
const curve = draw.path('M 0 0 Q 50 50 100 100')

// 贝塞尔曲线路径
const bezier = draw.path('M 0 0 C 0 50 100 50 100 100')
```

## 高级用法

### 自定义路径行为

```ts
// 自定义路径行为
const path = draw.path((add) => {
  // 添加自定义路径命令
  add.M(0, 0)
  add.L(100, 100)
  add.Q(50, 50, 100, 100)
  add.C(0, 50, 100, 50, 100, 100)
})

// 设置样式
path.fill('red').stroke({ width: 2, color: 'black' })
```

### 组合路径

```ts
// 组合路径
const path = draw.path((add) => {
  // 添加多个路径命令
  add.M(0, 0)
  add.L(100, 100)
  add.M(100, 0)
  add.L(0, 100)
})

// 设置样式
path.fill('red').stroke({ width: 2, color: 'black' })
```

### 路径控制

```ts
// 更新路径
path.plot('M 0 0 L 200 200')

// 添加路径命令
path.M(200, 200).L(300, 300)

// 清除路径
path.clear()
```

## 最佳实践

1. 合理设置路径命令
2. 使用合适的路径类型
3. 注意性能优化
4. 处理路径错误
5. 提供用户反馈
