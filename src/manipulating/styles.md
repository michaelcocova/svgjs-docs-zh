# 样式操作

SVG.js 提供了多种方法来操作 SVG 元素的样式。以下是样式操作的方法：

## 基本样式

```ts
// 设置填充颜色
element.fill('red')

// 设置描边颜色
element.stroke('black')

// 设置描边宽度
element.stroke({ width: 2 })

// 设置透明度
element.opacity(0.5)

// 使用链式调用
element.fill('red').stroke('black').stroke({ width: 2 }).opacity(0.5)
```

## 渐变和图案

```ts
// 创建线性渐变
const gradient = draw.gradient('linear', (stop) => {
  stop.at(0, 'red')
  stop.at(1, 'blue')
})

// 应用渐变
element.fill(gradient)

// 创建图案
const pattern = draw.pattern(20, 20, (add) => {
  add.rect(20, 20).fill('red')
})

// 应用图案
element.fill(pattern)
```

## 滤镜效果

```ts
// 创建模糊滤镜
const blur = draw.filter((add) => {
  add.gaussianBlur(5)
})

// 应用滤镜
element.filter(blur)

// 创建阴影滤镜
const shadow = draw.filter((add) => {
  add
    .offset(2, 2)
    .in(add.sourceAlpha)
    .gaussianBlur(2)
    .flood('black', 0.3)
    .composite(add.sourceOver, add.source)
})

// 应用阴影
element.filter(shadow)
```

## 动画样式

```ts
// 动画填充颜色
element.animate(1000).fill('red')

// 动画描边颜色
element.animate(1000).stroke('black')

// 动画透明度
element.animate(1000).opacity(0.5)

// 使用链式调用
element.animate(1000).fill('red').stroke('black').opacity(0.5)
```

## 注意事项

1. 样式操作支持链式调用
2. 样式可以是颜色、渐变、图案或滤镜
3. 样式可以应用于填充、描边和透明度
4. 样式可以动画化
5. 样式操作应该考虑性能影响
