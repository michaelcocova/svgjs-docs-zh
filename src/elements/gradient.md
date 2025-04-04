# SVG.Gradient

SVG.Gradient 元素用于创建渐变，可以用于填充和描边。它通过设置渐变类型、颜色和位置来定义。

## 创建渐变

### 线性渐变

```ts
// 创建线性渐变
const gradient = draw.gradient('linear', (stop) => {
  stop.at(0, '#f06')
  stop.at(1, '#0f6')
})
```

### 径向渐变

```ts
// 创建径向渐变
const gradient = draw.gradient('radial', (stop) => {
  stop.at(0, '#f06')
  stop.at(1, '#0f6')
})
```

## 渐变属性

### from(x, y)

设置渐变起点：

```ts
// 设置渐变起点
gradient.from(0, 0)
```

### to(x, y)

设置渐变终点：

```ts
// 设置渐变终点
gradient.to(100, 100)
```

### radius(r)

设置径向渐变的半径：

```ts
// 设置径向渐变的半径
gradient.radius(50)
```

### update(update)

更新渐变：

```ts
// 更新渐变
gradient.update((stop) => {
  stop.at(0, '#f06')
  stop.at(0.5, '#0f6')
  stop.at(1, '#f06')
})
```

### url()

获取渐变的 URL：

```ts
// 获取渐变的 URL
const url = gradient.url()
```

## 使用渐变

### fill(gradient)

使用渐变填充：

```ts
// 创建渐变
const gradient = draw.gradient('linear', (stop) => {
  stop.at(0, '#f06')
  stop.at(1, '#0f6')
})

// 创建元素
const rect = draw.rect(100, 100)

// 使用渐变填充
rect.fill(gradient)
```

### stroke(gradient)

使用渐变描边：

```ts
// 创建渐变
const gradient = draw.gradient('linear', (stop) => {
  stop.at(0, '#f06')
  stop.at(1, '#0f6')
})

// 创建元素
const rect = draw.rect(100, 100)

// 使用渐变描边
rect.stroke({ width: 2, color: gradient })
```

## 示例

### 基本用法

```ts
// 创建渐变
const gradient = draw.gradient('linear', (stop) => {
  stop.at(0, '#f06')
  stop.at(1, '#0f6')
})

// 创建元素
const rect = draw.rect(100, 100)

// 使用渐变填充
rect.fill(gradient)
```

### 动画示例

```ts
// 创建渐变
const gradient = draw.gradient('linear', (stop) => {
  stop.at(0, '#f06')
  stop.at(1, '#0f6')
})

// 创建元素
const rect = draw.rect(100, 100)

// 使用渐变填充
rect.fill(gradient)

// 动画
gradient
  .animate(1000, '<>')
  .from(0, 0)
  .to(100, 100)
  .update((stop) => {
    stop.at(0, '#f06')
    stop.at(0.5, '#0f6')
    stop.at(1, '#f06')
  })
```

## 注意事项

1. 渐变的类型可以是线性渐变或径向渐变
2. 渐变的颜色和位置可以通过 stop.at() 方法设置
3. 渐变可以通过 update() 方法动态修改
4. 渐变的 URL 可以通过 url() 方法获取
5. 渐变可以用于创建阴影、光晕、立体感等效果
