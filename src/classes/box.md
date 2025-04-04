# SVG.Box

SVG.Box 类用于表示元素的边界框（bounding box），包含元素的位置和尺寸信息。

## 基本用法

```ts
// 获取元素的边界框
const box = element.bbox()

// 获取边界框的属性
const x = box.x
const y = box.y
const width = box.width
const height = box.height
```

## 边界框属性

### 基本属性

```ts
// 获取边界框的基本属性
const x = box.x // x 坐标
const y = box.y // y 坐标
const width = box.width // 宽度
const height = box.height // 高度
```

### 计算属性

```ts
// 获取边界框的计算属性
const cx = box.cx // 中心点 x 坐标
const cy = box.cy // 中心点 y 坐标
const x2 = box.x2 // 右边界 x 坐标
const y2 = box.y2 // 下边界 y 坐标
```

## 边界框方法

### 合并边界框

```ts
// 合并两个边界框
const mergedBox = box.merge(otherBox)
```

### 转换边界框

```ts
// 转换边界框
const transformedBox = box.transform(matrix)
```

### 检查重叠

```ts
// 检查两个边界框是否重叠
const isOverlapping = box.overlap(otherBox)
```

## 示例

### 基本边界框

```ts
// 创建画布
const draw = SVG('drawing')

// 创建矩形
const rect = draw.rect(100, 100).move(50, 50)

// 获取边界框
const box = rect.bbox()

// 输出边界框信息
console.log('x:', box.x)
console.log('y:', box.y)
console.log('width:', box.width)
console.log('height:', box.height)
```

### 合并边界框

```ts
// 创建画布
const draw = SVG('drawing')

// 创建两个矩形
const rect1 = draw.rect(100, 100).move(50, 50)
const rect2 = draw.rect(100, 100).move(150, 150)

// 获取边界框
const box1 = rect1.bbox()
const box2 = rect2.bbox()

// 合并边界框
const mergedBox = box1.merge(box2)
```

### 转换边界框

```ts
// 创建画布
const draw = SVG('drawing')

// 创建矩形
const rect = draw.rect(100, 100).move(50, 50)

// 获取边界框
const box = rect.bbox()

// 创建变换矩阵
const matrix = new SVG.Matrix().translate(100, 100).rotate(45)

// 转换边界框
const transformedBox = box.transform(matrix)
```

## 最佳实践

1. 使用边界框进行碰撞检测
2. 使用边界框进行元素定位
3. 使用边界框进行元素对齐
4. 考虑变换对边界框的影响
5. 注意边界框的计算性能
6. 使用边界框进行元素布局
