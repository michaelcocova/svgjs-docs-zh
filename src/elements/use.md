# SVG.Use

`SVG.Use` 元素用于在 SVG 文档中重用已定义的元素。它允许你创建一个元素的副本，可以在文档中的任何位置使用。

## 基本用法

```ts
// 创建一个矩形
const rect = draw.rect(100, 100).fill('#f06')

// 使用该矩形创建一个副本
const use = draw.use(rect).move(200, 0)
```

## 属性

### x

设置或获取 x 坐标。

```ts
use.x(100)
```

### y

设置或获取 y 坐标。

```ts
use.y(100)
```

### width

设置或获取宽度。

```ts
use.width(200)
```

### height

设置或获取高度。

```ts
use.height(200)
```

### href

设置或获取引用的元素。

```ts
use.href('#myElement')
```

## 方法

### move()

移动元素到指定位置。

```ts
use.move(100, 100)
```

### size()

设置元素的大小。

```ts
use.size(200, 200)
```

### center()

将元素居中。

```ts
use.center(300, 300)
```

## 示例

### 创建和使用元素副本

```ts
// 创建一个圆形
const circle = draw.circle(100).fill('#f06')

// 创建多个副本
const use1 = draw.use(circle).move(150, 0)
const use2 = draw.use(circle).move(300, 0)
const use3 = draw.use(circle).move(450, 0)
```

### 使用已定义的元素

```ts
// 在 defs 中定义一个元素
const defs = draw.defs()
const rect = defs.rect(100, 100).fill('#f06')

// 使用该元素
const use = draw.use(rect).move(200, 0)
```

## 最佳实践

1. 使用 `defs` 元素来存储可重用的元素
2. 使用 `href` 属性引用已定义的元素
3. 使用 `move`、`size` 和 `center` 方法来定位和调整大小
4. 考虑使用 `transform` 属性来应用更复杂的变换
5. 注意性能影响，避免创建过多的副本
