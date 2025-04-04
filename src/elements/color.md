# SVG.Color

SVG.Color 元素用于表示颜色，可以用于设置元素的颜色。它通过设置颜色的各个分量来定义。

## 创建颜色

```ts
// 创建颜色
const color = new SVG.Color('#f06')

// 或者使用 RGB
const color = new SVG.Color(255, 0, 102)

// 或者使用 RGBA
const color = new SVG.Color(255, 0, 102, 0.5)
```

## 颜色属性

### r

设置或获取红色分量：

```ts
// 设置红色分量
color.r = 200

// 获取红色分量
const r = color.r
```

### g

设置或获取绿色分量：

```ts
// 设置绿色分量
color.g = 100

// 获取绿色分量
const g = color.g
```

### b

设置或获取蓝色分量：

```ts
// 设置蓝色分量
color.b = 50

// 获取蓝色分量
const b = color.b
```

### a

设置或获取透明度分量：

```ts
// 设置透明度分量
color.a = 0.8

// 获取透明度分量
const a = color.a
```

## 颜色方法

### toHex()

转换为十六进制：

```ts
// 转换为十六进制
const hex = color.toHex()
```

### toRgb()

转换为 RGB：

```ts
// 转换为 RGB
const rgb = color.toRgb()
```

### toRgba()

转换为 RGBA：

```ts
// 转换为 RGBA
const rgba = color.toRgba()
```

### brightness()

获取亮度：

```ts
// 获取亮度
const brightness = color.brightness()
```

### luminance()

获取亮度：

```ts
// 获取亮度
const luminance = color.luminance()
```

### mix(color, ratio)

混合颜色：

```ts
// 创建另一个颜色
const otherColor = new SVG.Color('#0f6')

// 混合颜色
const mixed = color.mix(otherColor, 0.5)
```

### lighten(ratio)

变亮：

```ts
// 变亮
const lightened = color.lighten(0.2)
```

### darken(ratio)

变暗：

```ts
// 变暗
const darkened = color.darken(0.2)
```

### saturate(ratio)

增加饱和度：

```ts
// 增加饱和度
const saturated = color.saturate(0.2)
```

### desaturate(ratio)

降低饱和度：

```ts
// 降低饱和度
const desaturated = color.desaturate(0.2)
```

## 示例

### 基本用法

```ts
// 创建颜色
const color = new SVG.Color('#f06')

// 设置透明度
color.a = 0.8

// 转换为十六进制
const hex = color.toHex()
```

### 颜色操作

```ts
// 创建颜色
const color = new SVG.Color('#f06')

// 创建另一个颜色
const otherColor = new SVG.Color('#0f6')

// 颜色操作
const result = color.mix(otherColor, 0.5).lighten(0.2).saturate(0.2)
```

## 注意事项

1. 颜色的分量可以通过属性直接访问和修改
2. 颜色的方法会返回新的颜色，不会修改原颜色
3. 颜色的操作可以用于创建复杂的颜色效果
4. 颜色的亮度可以用于计算对比度
5. 颜色的混合可以用于创建渐变和过渡效果
