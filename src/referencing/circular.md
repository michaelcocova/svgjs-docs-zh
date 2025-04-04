# 循环引用

循环引用是指元素之间相互引用的情况。在 SVG.js 中，循环引用可能会导致无限循环或性能问题。

## 基本用法

```ts
// 创建一个元素
const rect = draw.rect(100, 100).fill('#f06')

// 创建一个循环引用
rect.reference('circular', rect)
```

## 避免循环引用

### 使用 ID 引用

```ts
// 创建一个元素并设置 ID
const rect = draw.rect(100, 100).fill('#f06').id('myRect')

// 使用 ID 引用
const reference = draw.reference('#myRect')
```

### 使用临时变量

```ts
// 创建一个元素
const rect = draw.rect(100, 100).fill('#f06')

// 使用临时变量
const temp = rect
rect.reference('temp', temp)
```

## 最佳实践

1. 避免直接循环引用
2. 使用 ID 进行引用
3. 使用临时变量存储引用
4. 注意性能影响
5. 考虑使用事件监听器代替直接引用
