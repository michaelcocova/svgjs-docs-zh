# SVG.Image

SVG.Image 元素用于在 SVG 中插入图片。它可以通过设置图片源、位置、尺寸等属性来定义。

## 创建图片

```ts
// 创建图片
const image = draw.image('path/to/image.jpg')

// 设置位置和尺寸
image.move(50, 50).size(100, 100)
```

## 图片属性

### load(url)

加载图片：

```ts
// 加载图片
image.load('path/to/image.jpg')
```

### loaded(callback)

图片加载完成后的回调：

```ts
// 图片加载完成后的回调
image.loaded(() => {
  console.log('图片加载完成')
})
```

### move(x, y)

移动图片：

```ts
// 移动图片
image.move(50, 50)
```

### size(width, height)

设置图片尺寸：

```ts
// 设置图片尺寸
image.size(100, 100)
```

## 样式

### opacity(value)

设置图片透明度：

```ts
// 设置图片透明度
image.opacity(0.5)
```

### rotate(angle, cx, cy)

旋转图片：

```ts
// 旋转图片
image.rotate(45, 50, 50)
```

## 示例

### 基本用法

```ts
// 创建图片
const image = draw
  .image('path/to/image.jpg')
  .move(50, 50)
  .size(100, 100)
  .opacity(0.8)
```

### 动画示例

```ts
// 创建图片
const image = draw
  .image('path/to/image.jpg')
  .move(50, 50)
  .size(100, 100)
  .opacity(0.8)

// 动画
image
  .animate(1000, '<>')
  .move(100, 100)
  .size(200, 200)
  .opacity(1)
  .rotate(360, 100, 100)
```

## 注意事项

1. 图片的位置和尺寸是相对于其父元素的
2. 图片的变换会影响其所有子元素
3. 图片可以通过 load() 方法动态加载
4. 图片的加载状态可以通过 loaded() 方法监听
5. 图片可以用于创建图标、背景、插图等
