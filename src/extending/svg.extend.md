# SVG.extend

SVG.js 提供了 `SVG.extend` 方法来扩展 SVG.js 的功能。以下是扩展 SVG.js 的方法：

## 扩展元素

```ts
// 扩展矩形元素
SVG.extend(SVG.Rect, {
  // 添加新方法
  makeSquare() {
    return this.size(this.width(), this.width())
  },

  // 添加新属性
  isSquare() {
    return this.width() === this.height()
  },
})

// 使用扩展的方法
const rect = draw.rect(100, 100)
rect.makeSquare() // 将矩形变为正方形
console.log(rect.isSquare()) // 输出: true
```

## 扩展多个元素

```ts
// 扩展多个元素
SVG.extend(SVG.Rect, SVG.Circle, {
  // 添加新方法
  makeRed() {
    return this.fill('red')
  },
})

// 使用扩展的方法
const rect = draw.rect(100, 100)
const circle = draw.circle(100)
rect.makeRed() // 将矩形填充为红色
circle.makeRed() // 将圆形填充为红色
```

## 扩展所有元素

```ts
// 扩展所有元素
SVG.extend(SVG.Element, {
  // 添加新方法
  hide() {
    return this.attr('display', 'none')
  },

  show() {
    return this.attr('display', '')
  },
})

// 使用扩展的方法
const rect = draw.rect(100, 100)
rect.hide() // 隐藏矩形
rect.show() // 显示矩形
```

## 扩展 SVG.Doc

```ts
// 扩展 SVG.Doc
SVG.extend(SVG.Doc, {
  // 添加新方法
  createGrid(size) {
    const grid = this.group()
    for (let i = 0; i < this.width(); i += size) {
      grid.line(i, 0, i, this.height()).stroke({ width: 1, color: '#ccc' })
    }
    for (let i = 0; i < this.height(); i += size) {
      grid.line(0, i, this.width(), i).stroke({ width: 1, color: '#ccc' })
    }
    return grid
  },
})

// 使用扩展的方法
const draw = SVG().addTo('#drawing')
draw.createGrid(50) // 创建网格
```

## 注意事项

1. 扩展方法应该返回 `this` 以支持链式调用
2. 扩展属性应该使用 getter 和 setter
3. 扩展方法应该避免覆盖现有的方法
4. 扩展方法应该遵循 SVG.js 的命名约定
5. 扩展方法应该考虑性能影响
