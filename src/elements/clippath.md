# SVG.ClipPath

SVG.ClipPath 元素用于创建裁剪路径，可以控制元素的可见区域。它通过设置裁剪内容和裁剪属性来定义。

## 创建裁剪路径

```ts
// 创建裁剪路径
const clipPath = draw.clip()

// 添加裁剪内容
const rect = clipPath.rect(100, 100)
```

## 裁剪属性

### add(element)

添加裁剪内容：

```ts
// 添加裁剪内容
clipPath.add(rect)
```

### remove(element)

移除裁剪内容：

```ts
// 移除裁剪内容
clipPath.remove(rect)
```

### url()

获取裁剪路径的 URL：

```ts
// 获取裁剪路径的 URL
const url = clipPath.url()
```

## 使用裁剪路径

### clip(clipPath)

应用裁剪路径：

```ts
// 创建裁剪路径
const clipPath = draw.clip()
const rect = clipPath.rect(100, 100)

// 创建元素
const circle = draw.circle(100).fill('#f06')

// 应用裁剪路径
circle.clip(clipPath)
```

## 示例

### 基本用法

```ts
// 创建裁剪路径
const clipPath = draw.clip()
const rect = clipPath.rect(100, 100)

// 创建元素
const circle = draw.circle(100).fill('#f06')

// 应用裁剪路径
circle.clip(clipPath)
```

### 动画示例

```ts
// 创建裁剪路径
const clipPath = draw.clip()
const rect = clipPath.rect(100, 100)

// 创建元素
const circle = draw.circle(100).fill('#f06')

// 应用裁剪路径
circle.clip(clipPath)

// 动画
rect.animate(1000, '<>').size(200, 200)
```

## 注意事项

1. 裁剪路径的内容可以是任意 SVG 元素
2. 裁剪路径的区域决定了被裁剪元素的可见区域
3. 裁剪路径可以通过 add() 和 remove() 方法动态修改
4. 裁剪路径的 URL 可以通过 url() 方法获取
5. 裁剪路径可以用于创建形状裁剪、文字裁剪等效果
