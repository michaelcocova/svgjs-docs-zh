# 语法糖

SVG.js 提供了一些便捷的语法糖方法，使代码更简洁易读。以下是常用的语法糖方法：

## 样式设置

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

## 变换操作

```ts
// 平移
element.translate(10, 10)

// 旋转
element.rotate(45)

// 缩放
element.scale(2)

// 倾斜
element.skew(10, 10)

// 使用链式调用
element.translate(10, 10).rotate(45).scale(2).skew(10, 10)
```

## 文本操作

```ts
// 设置文本内容
element.text('Hello, World!')

// 设置字体大小
element.font({ size: 20 })

// 设置字体族
element.font({ family: 'Arial' })

// 使用链式调用
element.text('Hello, World!').font({ size: 20, family: 'Arial' })
```

## 路径操作

```ts
// 移动到点
element.move(100, 100)

// 画线到点
element.line(200, 200)

// 画曲线到点
element.curve(200, 200, 150, 150)

// 使用链式调用
element.move(100, 100).line(200, 200).curve(200, 200, 150, 150)
```

## 注意事项

1. 语法糖方法通常返回 `this`，支持链式调用
2. 语法糖方法可以组合使用
3. 语法糖方法通常有对应的底层方法
4. 语法糖方法使代码更简洁易读
5. 语法糖方法应该遵循 SVG.js 的命名约定
