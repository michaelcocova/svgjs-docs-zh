# 渐变插件

## 安装

### 通过 npm 安装

```bash
npm install @svgdotjs/svg.gradient.js
```

### 通过 CDN 引入

```html
<script src="https://cdn.jsdelivr.net/npm/@svgdotjs/svg.gradient.js@latest/dist/svg.gradient.min.js"></script>
```

## 基本用法

### 创建渐变

```ts
// 创建元素
const rect = draw.rect(100, 100)

// 创建渐变
const gradient = draw.gradient('linear', (stop) => {
  stop.at(0, 'red')
  stop.at(1, 'blue')
})

// 应用渐变
rect.fill(gradient)
```

### 配置选项

```ts
// 配置渐变选项
const gradient = draw.gradient(
  'linear',
  (stop) => {
    stop.at(0, 'red', 1)
    stop.at(0.5, 'yellow', 0.5)
    stop.at(1, 'blue', 1)
  },
  {
    x1: 0,
    y1: 0,
    x2: 1,
    y2: 0,
  }
)

// 应用渐变
rect.fill(gradient)
```

### 渐变类型

```ts
// 线性渐变
const linear = draw.gradient('linear', (stop) => {
  stop.at(0, 'red')
  stop.at(1, 'blue')
})

// 径向渐变
const radial = draw.gradient('radial', (stop) => {
  stop.at(0, 'red')
  stop.at(1, 'blue')
})

// 锥形渐变
const conic = draw.gradient('conic', (stop) => {
  stop.at(0, 'red')
  stop.at(1, 'blue')
})
```

## 高级用法

### 自定义渐变行为

```ts
// 自定义渐变行为
const gradient = draw.gradient(
  'linear',
  (stop) => {
    // 添加自定义渐变点
    stop.at(0, 'red')
    stop.at(0.5, 'yellow')
    stop.at(1, 'blue')
  },
  {
    // 自定义渐变参数
    x1: 0,
    y1: 0,
    x2: 1,
    y2: 0,
  }
)

// 应用渐变
rect.fill(gradient)
```

### 组合渐变

```ts
// 组合渐变
const gradient = draw.gradient('linear', (stop) => {
  // 添加多个渐变点
  stop.at(0, 'red')
  stop.at(0.3, 'yellow')
  stop.at(0.6, 'green')
  stop.at(1, 'blue')
})

// 应用渐变
rect.fill(gradient)
```

### 渐变控制

```ts
// 更新渐变
gradient.update({
  // 更新参数
})

// 添加渐变点
gradient.stop(0.5, 'yellow')

// 移除渐变点
gradient.stop(0.5, null)
```

## 最佳实践

1. 合理设置渐变点
2. 使用合适的渐变类型
3. 注意性能优化
4. 处理渐变错误
5. 提供用户反馈
