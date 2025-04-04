# 遮罩元素

遮罩元素用于控制元素的可见性。它通过定义哪些部分应该显示，哪些部分应该隐藏来实现。

## 基本用法

```ts
// 创建遮罩
const mask = draw.mask()

// 创建遮罩内容
mask.rect(100, 100).fill('#fff')

// 应用遮罩到元素
rect.maskWith(mask)
```

## 遮罩方法

### 创建遮罩

```ts
// 创建遮罩
var mask = draw.mask()

// 创建带有 ID 的遮罩
var mask = draw.mask('my-mask')
```

### 添加遮罩内容

```ts
// 添加矩形作为遮罩内容
mask.rect(100, 100).fill('#fff')

// 添加圆形作为遮罩内容
mask.circle(100).fill('#fff')

// 添加文本作为遮罩内容
mask.text('SVG.js').font({ size: 20 }).fill('#fff')
```

### 应用遮罩

```ts
// 应用遮罩到元素
rect.maskWith(mask)

// 移除遮罩
rect.unmask()
```

## 示例

### 基本遮罩

```ts
// 创建画布
const draw = SVG('drawing')

// 创建遮罩
const mask = draw.mask()
mask.rect(100, 100).fill('#fff')

// 创建矩形并应用遮罩
const rect = draw.rect(200, 200).fill('#f06')
rect.maskWith(mask)
```

### 渐变遮罩

```ts
// 创建画布
const draw = SVG('drawing')

// 创建渐变
const gradient = draw.gradient('linear', (stop) => {
  stop.at(0, '#fff')
  stop.at(1, '#000')
})

// 创建遮罩
const mask = draw.mask()
mask.rect(200, 200).fill(gradient)

// 创建矩形并应用遮罩
const rect = draw.rect(200, 200).fill('#f06')
rect.maskWith(mask)
```

### 动画遮罩

```ts
// 创建画布
const draw = SVG('drawing')

// 创建遮罩
const mask = draw.mask()
const maskRect = mask.rect(100, 100).fill('#fff')

// 创建矩形并应用遮罩
const rect = draw.rect(200, 200).fill('#f06')
rect.maskWith(mask)

// 动画遮罩
maskRect.animate(1000).attr({ width: 200, height: 200 }).loop()
```

## 最佳实践

1. 使用遮罩创建复杂的视觉效果
2. 考虑使用渐变遮罩实现平滑过渡
3. 使用动画遮罩创建动态效果
4. 注意遮罩内容的颜色（白色表示显示，黑色表示隐藏）
5. 考虑遮罩的性能影响
6. 使用适当的遮罩尺寸和位置
