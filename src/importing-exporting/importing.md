# 导入

SVG.js 提供了多种导入 SVG 内容的方法，可以从不同的来源导入 SVG 内容。

## 基本用法

```ts
// 从字符串导入
var draw = SVG('drawing')
draw.svg('<svg><rect width="100" height="100" fill="#f06"/></svg>')

// 从元素导入
var draw = SVG('drawing')
draw.svg(document.querySelector('svg'))

// 从 URL 导入
var draw = SVG('drawing')
draw.load('path/to/svg.svg', () => {
  console.log('SVG loaded')
})
```

## 导入方法

### 从字符串导入

```ts
// 从字符串导入
var draw = SVG('drawing')
draw.svg('<svg><rect width="100" height="100" fill="#f06"/></svg>')

// 从字符串导入并替换
var draw = SVG('drawing')
draw.svg('<svg><rect width="100" height="100" fill="#f06"/></svg>', true)
```

### 从元素导入

```ts
// 从元素导入
var draw = SVG('drawing')
draw.svg(document.querySelector('svg'))

// 从元素导入并替换
var draw = SVG('drawing')
draw.svg(document.querySelector('svg'), true)
```

### 从 URL 导入

```ts
// 从 URL 导入
var draw = SVG('drawing')
draw.load('path/to/svg.svg', () => {
  console.log('SVG loaded')
})

// 从 URL 导入并替换
var draw = SVG('drawing')
draw.load(
  'path/to/svg.svg',
  () => {
    console.log('SVG loaded')
  },
  true
)
```

## 示例

### 从字符串导入

```ts
// 创建画布
const draw = SVG('drawing')

// 从字符串导入
draw.svg('<svg><rect width="100" height="100" fill="#f06"/></svg>')

// 从字符串导入并替换
draw.svg('<svg><rect width="100" height="100" fill="#f06"/></svg>', true)
```

### 从元素导入

```ts
// 创建画布
const draw = SVG('drawing')

// 从元素导入
draw.svg(document.querySelector('svg'))

// 从元素导入并替换
draw.svg(document.querySelector('svg'), true)
```

### 从 URL 导入

```ts
// 创建画布
const draw = SVG('drawing')

// 从 URL 导入
draw.load('path/to/svg.svg', () => {
  console.log('SVG loaded')
})

// 从 URL 导入并替换
draw.load(
  'path/to/svg.svg',
  () => {
    console.log('SVG loaded')
  },
  true
)
```

## 最佳实践

1. 使用适当的导入方法
2. 注意导入的性能影响
3. 考虑导入的来源
4. 注意导入的内存使用
5. 使用导入进行数据恢复
6. 注意导入的边界情况
