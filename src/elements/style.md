# SVG.Style

`SVG.Style` 元素用于在 SVG 文档中定义 CSS 样式。它允许你为 SVG 元素应用样式规则，类似于 HTML 中的 `<style>` 标签。

## 基本用法

```ts
// 创建一个样式元素
var style = draw.style('text { font-family: Arial; }')

// 或者使用对象形式
var style = draw.style({
  '.myClass': {
    'fill': '#f06',
    'stroke': '#000',
    'stroke-width': 2,
  },
})
```

## 属性

### text

设置或获取样式文本。

```ts
style.text('.myClass { fill: #f06; }')
```

## 方法

### add()

添加新的样式规则。

```ts
style.add('.myClass { fill: #f06; }')
```

### update()

更新样式内容。

```ts
style.update('.myClass { fill: #00f; }')
```

### clear()

清除所有样式规则。

```ts
style.clear()
```

## 示例

### 创建基本样式

```ts
// 创建一个样式元素
const style = draw.style(`
  .red { fill: #f06; }
  .blue { fill: #00f; }
  .green { fill: #0f0; }
`)

// 应用样式到元素
const rect1 = draw.rect(100, 100).addClass('red')
const rect2 = draw.rect(100, 100).move(150, 0).addClass('blue')
const rect3 = draw.rect(100, 100).move(300, 0).addClass('green')
```

### 使用对象形式创建样式

```ts
// 使用对象形式创建样式
const style = draw.style({
  '.red': {
    'fill': '#f06',
    'stroke': '#000',
    'stroke-width': 2,
  },
  '.blue': {
    'fill': '#00f',
    'stroke': '#000',
    'stroke-width': 2,
  },
  '.green': {
    'fill': '#0f0',
    'stroke': '#000',
    'stroke-width': 2,
  },
})

// 应用样式到元素
const rect1 = draw.rect(100, 100).addClass('red')
const rect2 = draw.rect(100, 100).move(150, 0).addClass('blue')
const rect3 = draw.rect(100, 100).move(300, 0).addClass('green')
```

## 最佳实践

1. 使用类选择器来应用样式
2. 使用对象形式来创建复杂的样式规则
3. 使用 `add` 方法来动态添加样式规则
4. 使用 `update` 方法来更新样式规则
5. 使用 `clear` 方法来清除所有样式规则
6. 注意性能影响，避免创建过多的样式规则
