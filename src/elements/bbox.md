# SVG.BBox

SVG.BBox 元素用于表示边界框，可以用于获取元素的边界框。它通过设置边界框的位置和大小来定义。

## 创建边界框

```ts
// 创建边界框
const bbox = new SVG.BBox()

// 或者使用参数
const bbox = new SVG.BBox(0, 0, 100, 100)
```

## 边界框属性

### x

设置或获取边界框的 x 坐标：

```ts
// 设置 x 坐标
bbox.x = 0

// 获取 x 坐标
const x = bbox.x
```

### y

设置或获取边界框的 y 坐标：

```ts
// 设置 y 坐标
bbox.y = 0

// 获取 y 坐标
const y = bbox.y
```

### width

设置或获取边界框的宽度：

```ts
// 设置宽度
bbox.width = 100

// 获取宽度
const width = bbox.width
```

### height

设置或获取边界框的高度：

```ts
// 设置高度
bbox.height = 100

// 获取高度
const height = bbox.height
```

### cx

设置或获取边界框的中心 x 坐标：

```ts
// 设置中心 x 坐标
bbox.cx = 50

// 获取中心 x 坐标
const cx = bbox.cx
```

### cy

设置或获取边界框的中心 y 坐标：

```ts
// 设置中心 y 坐标
bbox.cy = 50

// 获取中心 y 坐标
const cy = bbox.cy
```

## 边界框方法

### merge(bbox)

合并边界框：

```ts
// 创建另一个边界框
const otherBBox = new SVG.BBox(50, 50, 100, 100)

// 合并边界框
const result = bbox.merge(otherBBox)
```

### transform(matrix)

变换：

```ts
// 创建矩阵
const matrix = new SVG.Matrix()

// 变换
const result = bbox.transform(matrix)
```

### toString()

转换为字符串：

```ts
// 转换为字符串
const string = bbox.toString()
```

## 示例

### 基本用法

```ts
// 创建边界框
const bbox = new SVG.BBox(0, 0, 100, 100)

// 合并边界框
const otherBBox = new SVG.BBox(50, 50, 100, 100)
const result = bbox.merge(otherBBox)

// 变换
const matrix = new SVG.Matrix()
const transformed = bbox.transform(matrix)
```

### 边界框操作

```ts
// 创建边界框
const bbox = new SVG.BBox(0, 0, 100, 100)

// 合并和变换
const otherBBox = new SVG.BBox(50, 50, 100, 100)
const matrix = new SVG.Matrix()
const result = bbox.merge(otherBBox).transform(matrix)
```

## 注意事项

1. 边界框的位置和大小可以通过属性直接访问和修改
2. 边界框的方法会返回新的边界框，不会修改原边界框
3. 边界框的操作可以用于创建复杂的边界框效果
4. 边界框的组合可以用于创建复合边界框
5. 边界框的字符串可以用于设置元素的 bbox 属性
