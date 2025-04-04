# SVG.ForeignObject

`SVG.ForeignObject` 元素允许你在 SVG 文档中嵌入 HTML、XML 或其他命名空间的元素。这对于在 SVG 中显示复杂的 HTML 内容非常有用。

## 基本用法

```ts
// 创建一个 foreignObject 元素
const foreign = draw.foreignObject(100, 100)

// 添加 HTML 内容
foreign.node.innerHTML = '<div style="color: #f06;">Hello World</div>'
```

## 属性

### width

设置或获取宽度。

```ts
foreign.width(200)
```

### height

设置或获取高度。

```ts
foreign.height(200)
```

### x

设置或获取 x 坐标。

```ts
foreign.x(100)
```

### y

设置或获取 y 坐标。

```ts
foreign.y(100)
```

## 方法

### append()

添加新的 HTML 元素。

```ts
foreign.append((add) => {
  add.div().text('Hello World')
})
```

### html()

设置或获取 HTML 内容。

```ts
foreign.html('<div>Hello World</div>')
```

## 示例

### 创建基本的 HTML 内容

```ts
// 创建一个 foreignObject 元素
const foreign = draw.foreignObject(200, 100).move(100, 100)

// 添加 HTML 内容
foreign.node.innerHTML = `
  <div style="padding: 10px;">
    <h1>Hello World</h1>
    <p>This is HTML content in SVG</p>
  </div>
`
```

### 使用 append 方法添加内容

```ts
// 创建一个 foreignObject 元素
const foreign = draw.foreignObject(200, 100).move(100, 100)

// 使用 append 方法添加内容
foreign.append((add) => {
  add
    .div()
    .style('padding', '10px')
    .append((add) => {
      add.h1().text('Hello World')
      add.p().text('This is HTML content in SVG')
    })
})
```

## 最佳实践

1. 使用 `width` 和 `height` 属性来设置容器大小
2. 使用 `x` 和 `y` 属性来定位容器
3. 使用 `append` 方法来添加新的 HTML 元素
4. 使用 `html` 方法来设置 HTML 内容
5. 注意性能影响，避免在 SVG 中嵌入过多的 HTML 内容
6. 考虑使用 CSS 样式来控制 HTML 内容的显示
