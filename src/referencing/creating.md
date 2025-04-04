# 创建元素

在 SVG.js 中，可以使用多种方式来创建 SVG 元素。每种方式都有其特定的用途和优势。

## 基本用法

```ts
// 创建一个矩形
const rect = draw.rect(100, 100).fill('#f06')

// 创建一个圆形
const circle = draw.circle(100).fill('#00f')

// 创建一个路径
const path = draw.path('M 100 100 L 300 100').stroke('#000')
```

## 创建方法

### 使用工厂方法

```ts
// 使用工厂方法创建元素
const rect = draw.rect(100, 100)
const circle = draw.circle(100)
const path = draw.path('M 100 100 L 300 100')
```

### 使用 create() 方法

```ts
// 使用 create() 方法创建元素
const rect = draw.create('rect')
const circle = draw.create('circle')
const path = draw.create('path')
```

### 使用 nested() 方法

```ts
// 使用 nested() 方法创建嵌套元素
const group = draw.group()
const rect = group.rect(100, 100)
const circle = group.circle(100)
```

## 示例

### 创建基本形状

```ts
// 创建基本形状
const rect = draw.rect(100, 100).fill('#f06')
const circle = draw.circle(100).fill('#00f')
const line = draw.line(0, 0, 100, 100).stroke('#000')
```

### 创建复杂形状

```ts
// 创建复杂形状
const path = draw.path('M 100 100 L 300 100 L 200 300 Z').fill('#f06')
const polygon = draw.polygon('100,100 200,100 200,200 100,200').fill('#00f')
```

## 最佳实践

1. 使用工厂方法创建基本形状
2. 使用 `create()` 方法创建自定义元素
3. 使用 `nested()` 方法创建嵌套元素
4. 注意性能影响，避免创建过多的元素
5. 考虑使用 `defs` 元素存储可重用元素
