# SVG.Marker

`SVG.Marker` 元素用于在路径、线条和多边形的顶点处添加标记。标记可以是任何 SVG 元素，如箭头、圆形或其他形状。

## 基本用法

```ts
// 创建一个标记
const marker = draw.marker(10, 10, (add) => {
  add.circle(10).fill('#f06')
})

// 创建一个路径并应用标记
const path = draw
  .path('M 100 100 L 300 100')
  .stroke({ width: 1, color: '#f06' })
  .marker('end', marker)
```

## 属性

### refX

设置或获取标记的参考点 x 坐标。

```ts
marker.refX(5)
```

### refY

设置或获取标记的参考点 y 坐标。

```ts
marker.refY(5)
```

### markerWidth

设置或获取标记的宽度。

```ts
marker.markerWidth(20)
```

### markerHeight

设置或获取标记的高度。

```ts
marker.markerHeight(20)
```

### orient

设置或获取标记的方向。

```ts
marker.orient('auto')
```

## 方法

### update()

更新标记的内容。

```ts
marker.update((add) => {
  add.rect(10, 10).fill('#f06')
})
```

### add()

向标记添加新元素。

```ts
marker.add((add) => {
  add.circle(5).fill('#f06')
})
```

## 示例

### 创建箭头标记

```ts
// 创建一个箭头标记
const arrow = draw.marker(10, 10, (add) => {
  add.path('M0,0 L10,5 L0,10 L2,5 Z').fill('#f06')
})

// 创建一个路径并应用箭头标记
const path = draw
  .path('M 100 100 L 300 100')
  .stroke({ width: 1, color: '#f06' })
  .marker('end', arrow)
```

### 创建圆形标记

```ts
// 创建一个圆形标记
const circle = draw.marker(5, 5, (add) => {
  add.circle(5).fill('#f06')
})

// 创建一个多边形并应用圆形标记
const polygon = draw
  .polygon('100,100 200,100 200,200 100,200')
  .fill('none')
  .stroke({ width: 1, color: '#f06' })
  .marker('mid', circle)
```

## 最佳实践

1. 使用 `refX` 和 `refY` 来精确定位标记
2. 使用 `markerWidth` 和 `markerHeight` 来控制标记的大小
3. 使用 `orient` 来控制标记的方向
4. 考虑使用 `update` 方法来动态更新标记
5. 注意性能影响，避免创建过多的标记
