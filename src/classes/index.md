# 类

SVG.js 提供了多种类来帮助你创建和操作 SVG 元素。

## 主要类

- SVG: 主类，用于创建 SVG 文档
- Element: 所有 SVG 元素的基类
- Container: 容器元素基类
- Shape: 形状元素基类

## 使用示例

```ts
// 创建 SVG 文档
const draw = SVG().addTo('body')

// 创建元素
const rect = draw.rect(100, 100)
```

## 继承关系

SVG.js 的类系统采用了继承结构，所有元素都继承自 Element 类。

## 更多信息

请参考官方文档获取完整的类参考和用法说明。
