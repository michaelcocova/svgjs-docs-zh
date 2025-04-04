# SVG.Color

SVG.Color 类用于处理 SVG 中的颜色数据，提供了一系列方法来操作和管理这些颜色数据。

## 基本用法

```ts
// 创建颜色
const color = new SVG.Color('#f06')

// 获取颜色值
const hex = color.toHex()
const rgb = color.toRgb()
const hsl = color.toHsl()
```

## 颜色方法

### 基本操作

```ts
// 获取颜色值
const hex = color.toHex()
const rgb = color.toRgb()
const hsl = color.toHsl()

// 设置颜色值
color.hex('#f06')
color.rgb(255, 0, 102)
color.hsl(330, 100, 50)
```

### 颜色转换

```ts
// 转换为十六进制
const hex = color.toHex()

// 转换为 RGB
const rgb = color.toRgb()

// 转换为 HSL
const hsl = color.toHsl()
```

### 颜色操作

```ts
// 调整亮度
color.lightness(50)

// 调整饱和度
color.saturation(50)

// 调整色相
color.hue(180)
```

## 示例

### 基本颜色操作

```ts
// 创建颜色
const color = new SVG.Color('#f06')

// 获取颜色值
const hex = color.toHex()
const rgb = color.toRgb()
const hsl = color.toHsl()

// 设置颜色值
color.hex('#f06')
color.rgb(255, 0, 102)
color.hsl(330, 100, 50)
```

### 颜色转换

```ts
// 创建颜色
const color = new SVG.Color('#f06')

// 转换为十六进制
const hex = color.toHex()

// 转换为 RGB
const rgb = color.toRgb()

// 转换为 HSL
const hsl = color.toHsl()
```

### 颜色操作

```ts
// 创建颜色
const color = new SVG.Color('#f06')

// 调整亮度
color.lightness(50)

// 调整饱和度
color.saturation(50)

// 调整色相
color.hue(180)
```

## 最佳实践

1. 使用颜色方法进行颜色数据处理
2. 注意颜色的性能影响
3. 使用适当的颜色方法
4. 考虑颜色的内存使用
5. 使用颜色进行颜色数据组织
6. 注意颜色的边界情况
