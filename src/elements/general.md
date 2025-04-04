# SVG 元素通用处理

SVG.js 为所有 SVG 元素提供了一些通用的处理方法和属性。这些方法和属性可以在任何 SVG 元素上使用。

## 通用方法

### addTo(parent)

将元素添加到指定的父元素：

```ts
// 创建元素并添加到画布
const rect = draw.rect(100, 100).addTo('#drawing')

// 创建元素并添加到组
const rect = draw.rect(100, 100).addTo(group)
```

### remove()

从父元素中移除元素：

```ts
// 移除元素
rect.remove()
```

### clone()

克隆元素：

```ts
// 克隆元素
const clone = rect.clone()
```

### replace(element)

用另一个元素替换当前元素：

```ts
// 用圆形替换矩形
const circle = draw.circle(100)
rect.replace(circle)
```

## 通用属性

### id(id)

设置或获取元素的 ID：

```ts
// 设置 ID
rect.id('my-rect')

// 获取 ID
const id = rect.id()
```

### classes()

管理元素的类：

```ts
// 添加类
rect.addClass('red')

// 移除类
rect.removeClass('red')

// 切换类
rect.toggleClass('red')

// 检查是否有类
const hasClass = rect.hasClass('red')
```

### style(style)

设置或获取元素的样式：

```ts
// 设置样式
rect.style({ fill: '#f06', stroke: '#000' })

// 获取样式
const style = rect.style()
```

### attr(attr)

设置或获取元素的属性：

```ts
// 设置属性
rect.attr({ width: 100, height: 100 })

// 获取属性
const width = rect.attr('width')
```

## 通用事件

### on(event, handler)

添加事件监听器：

```ts
// 添加点击事件
rect.on('click', function () {
  this.fill('#f06')
})
```

### off(event, handler)

移除事件监听器：

```ts
// 移除点击事件
rect.off('click')
```

## 通用变换

### transform(transform)

设置或获取元素的变换：

```ts
// 设置变换
rect.transform({ rotation: 45, scale: 1.5 })

// 获取变换
const transform = rect.transform()
```

### move(x, y)

移动元素：

```ts
// 移动元素
rect.move(100, 100)
```

### rotate(angle, cx, cy)

旋转元素：

```ts
// 旋转元素
rect.rotate(45)

// 围绕指定点旋转
rect.rotate(45, 50, 50)
```

### scale(x, y)

缩放元素：

```ts
// 缩放元素
rect.scale(1.5)

// 分别缩放 x 和 y
rect.scale(1.5, 2)
```

## 注意事项

1. 这些通用方法和属性适用于所有 SVG 元素
2. 某些方法可能会被子元素覆盖或扩展
3. 变换操作会影响元素的所有子元素
4. 事件处理支持所有标准的 DOM 事件
