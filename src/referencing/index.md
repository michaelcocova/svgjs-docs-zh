# 引用

SVG.js 支持多种引用方式来处理 SVG 元素。

## 元素引用

### 通过 ID 引用

```ts
const element = SVG.get('my-element')
```

### 通过选择器引用

```ts
const elements = SVG.find('rect')
```

## 引用类型

- 直接引用
- 间接引用
- 循环引用
- 跨文档引用

## 使用示例

```ts
// 创建引用
const defs = draw.defs()
const gradient = defs.gradient('linear', (add) => {
  add.stop(0, '#fff')
  add.stop(1, '#000')
})

// 使用引用
rect.fill(gradient)
```

## 注意事项

- 避免循环引用
- 处理引用失效
- 考虑性能影响

## 更多信息

请参考官方文档获取完整的引用系统参考和用法说明。
