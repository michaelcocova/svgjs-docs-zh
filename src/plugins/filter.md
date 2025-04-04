# filter 插件

filter 插件用于为 SVG 元素添加滤镜效果。

## 基本用法

```ts
// 加载插件
SVG.extend(SVG.Element, {
  filter() {
    // 添加滤镜
    return this
  },
})

// 使用插件
const filtered = rect.filter()
```

## 插件方法

### 添加滤镜

```ts
// 添加模糊滤镜
var filtered = rect.filter((add) => {
  add.gaussianBlur(5)
})

// 添加阴影滤镜
var filtered = rect.filter((add) => {
  add.dropShadow(0, 2, 5, '#000')
})

// 添加颜色滤镜
var filtered = rect.filter((add) => {
  add.colorMatrix('saturate', 2)
})
```

### 滤镜操作

```ts
// 获取滤镜
const filter = rect.filter()

// 移除滤镜
rect.unfilter()

// 更新滤镜
filter.update()
```

## 示例

### 基本滤镜

```ts
// 创建画布
const draw = SVG('drawing')

// 创建矩形
const rect = draw.rect(100, 100).fill('#f06')

// 添加模糊滤镜
const filtered = rect.filter((add) => {
  add.gaussianBlur(5)
})
```

### 复杂滤镜

```ts
// 创建画布
const draw = SVG('drawing')

// 创建矩形
const rect = draw.rect(100, 100).fill('#f06')

// 添加阴影滤镜
var filtered = rect.filter((add) => {
  add.dropShadow(0, 2, 5, '#000')
})

// 添加颜色滤镜
var filtered = rect.filter((add) => {
  add.colorMatrix('saturate', 2)
})
```

### 滤镜操作

```ts
// 创建画布
const draw = SVG('drawing')

// 创建矩形
const rect = draw.rect(100, 100).fill('#f06')

// 添加滤镜
const filter = rect.filter((add) => {
  add.gaussianBlur(5)
})

// 移除滤镜
rect.unfilter()

// 更新滤镜
filter.update()
```

## 最佳实践

1. 使用适当的滤镜方法
2. 注意滤镜的性能影响
3. 考虑滤镜的需求
4. 注意滤镜的内存使用
5. 使用滤镜进行效果处理
6. 注意滤镜的边界情况
