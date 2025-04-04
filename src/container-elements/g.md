# SVG.G

SVG.G 元素用于将多个 SVG 元素组合在一起，形成一个组。组内的元素可以一起进行变换、动画等操作。

## 创建组

```ts
// 创建一个组
const group = draw.group()

// 或者直接创建并添加到画布
const group = draw.group().addTo('#drawing')
```

## 添加元素到组

```ts
// 创建组
const group = draw.group()

// 创建元素并添加到组
const rect = group.rect(100, 100).fill('#f06')
const circle = group.circle(100).fill('#f06')

// 或者将现有元素添加到组
const rect = draw.rect(100, 100).fill('#f06')
const circle = draw.circle(100).fill('#f06')
group.add(rect)
group.add(circle)
```

## 组操作

### 变换

可以对整个组进行变换：

```ts
// 旋转组
group.rotate(45)

// 移动组
group.move(100, 100)

// 缩放组
group.scale(1.5)
```

### 样式

可以同时设置组内所有元素的样式：

```ts
// 设置组内所有元素的填充色
group.fill('#f06')

// 设置组内所有元素的描边
group.stroke({ width: 2, color: '#000' })
```

## 示例

### 基本用法

```ts
// 创建组
const group = draw.group()

// 添加元素
const rect = group.rect(100, 100).fill('#f06')
const circle = group.circle(100).fill('#f06')

// 移动组
group.move(100, 100)
```

### 动画示例

```ts
// 创建组
const group = draw.group()

// 添加元素
const rect = group.rect(100, 100).fill('#f06')
const circle = group.circle(100).fill('#f06')

// 组动画
group.animate(1000, '<>').rotate(360).move(100, 100)
```

## 注意事项

1. 组内的元素共享相同的变换矩阵
2. 组的样式会影响组内所有元素
3. 组可以嵌套使用
4. 组内的元素仍然可以单独操作
