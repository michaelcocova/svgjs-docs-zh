# 元素操作

SVG.js 提供了丰富的 API 来操作 SVG 元素。

## 基本操作

### 移动元素

```ts
rect.move(100, 100)
```

### 缩放元素

```ts
rect.scale(2)
```

### 旋转元素

```ts
rect.rotate(45)
```

## 属性操作

### 设置属性

```ts
rect.attr({
  'fill': '#f06',
  'stroke': '#000',
  'stroke-width': 2,
})
```

### 获取属性

```ts
const fill = rect.attr('fill')
```

## 样式操作

### 设置样式

```ts
rect.style({
  fill: '#f06',
  stroke: '#000',
})
```

### 获取样式

```ts
const fill = rect.style('fill')
```

## 更多操作

- 克隆元素
- 删除元素
- 替换元素
- 查找元素

## 更多信息

请参考官方文档获取完整的元素操作参考和用法说明。
