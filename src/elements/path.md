# SVG.Path

SVG.Path 元素是 SVG 中最强大的元素之一，可以创建任意形状的路径。它通过一系列路径命令来定义。

## 创建路径

```ts
// 创建一个路径
const path = draw.path('M0 0 L100 100 L200 0 Z')

// 或者使用数组
const commands = [['M', 0, 0], ['L', 100, 100], ['L', 200, 0], ['Z']]
const path = draw.path(commands)
```

## 路径命令

### 移动命令

- `M x y`：移动到指定点
- `m dx dy`：相对移动到指定点

### 直线命令

- `L x y`：画直线到指定点
- `l dx dy`：相对画直线到指定点
- `H x`：画水平线到指定 x 坐标
- `h dx`：相对画水平线到指定 x 坐标
- `V y`：画垂直线到指定 y 坐标
- `v dy`：相对画垂直线到指定 y 坐标

### 曲线命令

- `C x1 y1 x2 y2 x y`：画三次贝塞尔曲线
- `c dx1 dy1 dx2 dy2 dx dy`：相对画三次贝塞尔曲线
- `S x2 y2 x y`：画平滑三次贝塞尔曲线
- `s dx2 dy2 dx dy`：相对画平滑三次贝塞尔曲线
- `Q x1 y1 x y`：画二次贝塞尔曲线
- `q dx1 dy1 dx dy`：相对画二次贝塞尔曲线
- `T x y`：画平滑二次贝塞尔曲线
- `t dx dy`：相对画平滑二次贝塞尔曲线
- `A rx ry x-axis-rotation large-arc-flag sweep-flag x y`：画椭圆弧
- `a rx ry x-axis-rotation large-arc-flag sweep-flag dx dy`：相对画椭圆弧

### 闭合命令

- `Z` 或 `z`：闭合路径

## 路径属性

### plot(commands)

设置路径的命令：

```ts
// 设置命令
path.plot('M0 0 L100 100 L200 0 Z')

// 获取命令
const commands = path.plot()
```

### move(x, y)

移动路径：

```ts
// 移动路径
path.move(50, 50)
```

### size(width, height)

设置路径的尺寸：

```ts
// 设置尺寸
path.size(200, 200)
```

## 样式

### stroke(style)

设置路径的描边：

```ts
// 设置描边
path.stroke({ width: 2, color: '#000' })

// 设置虚线描边
path.stroke({ width: 2, color: '#000', dasharray: '5,5' })
```

### fill(color)

设置路径的填充色：

```ts
// 设置填充色
path.fill('#f06')
```

## 示例

### 基本用法

```ts
// 创建一个三角形路径
const path = draw.path('M0 0 L100 100 L200 0 Z')

// 设置样式
path.fill('#f06').stroke({ width: 2, color: '#000' })
```

### 动画示例

```ts
// 创建一个三角形路径
const path = draw
  .path('M0 0 L100 100 L200 0 Z')
  .fill('#f06')
  .stroke({ width: 2, color: '#000' })

// 动画
path
  .animate(1000, '<>')
  .plot('M0 0 L200 200 L400 0 Z')
  .fill('#0f6')
  .stroke({ width: 4, color: '#000' })
```

## 注意事项

1. 路径命令区分大小写，大写表示绝对坐标，小写表示相对坐标
2. 路径的所有点坐标都是相对于其父元素的
3. 路径的变换会影响其所有子元素
4. 路径可以通过 plot() 方法动态改变形状
5. 路径可以用于创建任意形状，如曲线、波浪线、自定义图标等
