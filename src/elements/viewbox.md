# SVG.ViewBox

SVG.ViewBox 元素用于表示视口，可以用于设置元素的视口属性。它通过设置视口的位置和大小来定义。

## 创建视口

```ts
// 创建视口
const viewBox = new SVG.ViewBox()

// 或者使用参数
const viewBox = new SVG.ViewBox(0, 0, 100, 100)
```

## 视口属性

### x

设置或获取视口的 x 坐标：

```ts
// 设置 x 坐标
viewBox.x = 0

// 获取 x 坐标
const x = viewBox.x
```

### y

设置或获取视口的 y 坐标：

```ts
// 设置 y 坐标
viewBox.y = 0

// 获取 y 坐标
const y = viewBox.y
```

### width

设置或获取视口的宽度：

```ts
// 设置宽度
viewBox.width = 100

// 获取宽度
const width = viewBox.width
```

### height

设置或获取视口的高度：

```ts
// 设置高度
viewBox.height = 100

// 获取高度
const height = viewBox.height
```

## 视口方法

### zoom(factor)

缩放：

```ts
// 缩放
viewBox.zoom(2)
```

### pan(x, y)

平移：

```ts
// 平移
viewBox.pan(10, 10)
```

### fit(width, height)

适应：

```ts
// 适应
viewBox.fit(200, 200)
```

### toString()

转换为字符串：

```ts
// 转换为字符串
const string = viewBox.toString()
```

## 示例

### 基本用法

```ts
// 创建视口
const viewBox = new SVG.ViewBox(0, 0, 100, 100)

// 缩放
viewBox.zoom(2)

// 平移
viewBox.pan(10, 10)

// 适应
viewBox.fit(200, 200)
```

### 视口操作

```ts
// 创建视口
const viewBox = new SVG.ViewBox(0, 0, 100, 100)

// 缩放和平移
viewBox.zoom(2).pan(10, 10)

// 适应和缩放
viewBox.fit(200, 200).zoom(0.5)
```

## 注意事项

1. 视口的位置和大小可以通过属性直接访问和修改
2. 视口的方法会返回新的视口，不会修改原视口
3. 视口的操作可以用于创建复杂的视口效果
4. 视口的组合可以用于创建复合视口
5. 视口的字符串可以用于设置元素的 viewBox 属性
