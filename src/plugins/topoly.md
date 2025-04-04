# 多边形转换插件

## 安装

### 通过 npm 安装

```bash
npm install @svgdotjs/svg.topoly.js
```

### 通过 CDN 引入

```html
<script src="https://cdn.jsdelivr.net/npm/@svgdotjs/svg.topoly.js@latest/dist/svg.topoly.min.js"></script>
```

## 基本用法

### 将元素转换为多边形

```ts
// 创建元素
const rect = draw.rect(100, 100).fill('red')

// 转换为多边形
const poly = rect.toPoly()
```

### 配置选项

```ts
// 配置转换选项
const poly = rect.toPoly({
  precision: 2,
  relative: true,
  close: true,
})
```

### 转换类型

```ts
// 矩形转多边形
const rectPoly = rect.toPoly()

// 圆形转多边形
const circlePoly = circle.toPoly()

// 路径转多边形
const pathPoly = path.toPoly()
```

## 高级用法

### 自定义转换行为

```ts
// 自定义转换行为
const poly = rect.toPoly((poly) => {
  // 自定义多边形处理
  return poly
})
```

### 组合转换

```ts
// 组合多个转换
const poly = rect.toPoly().toPoly().toPoly()
```

### 多边形控制

```ts
// 更新多边形
poly.update()

// 清除多边形
poly.clear()
```

## 最佳实践

1. 选择合适的转换精度
2. 注意转换性能
3. 优化转换效果
4. 处理转换错误
5. 提供用户反馈
