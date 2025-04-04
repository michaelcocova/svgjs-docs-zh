# 数据操作

SVG.js 提供了多种方法来操作 SVG 元素的数据。以下是数据操作的方法：

## 设置数据

```ts
// 设置单个数据
element.data('name', 'value')

// 设置多个数据
element.data({
  name1: 'value1',
  name2: 'value2',
})

// 使用链式调用
element.data('name1', 'value1').data('name2', 'value2')
```

## 获取数据

```ts
// 获取单个数据
const value = element.data('name')

// 获取所有数据
const data = element.data()

// 获取多个数据
const values = element.data(['name1', 'name2'])
```

## 移除数据

```ts
// 移除单个数据
element.data('name', null)

// 移除多个数据
element.data({
  name1: null,
  name2: null,
})

// 移除所有数据
element.data(null)
```

## 数据类型

```ts
// 字符串数据
element.data('text', 'Hello, World!')

// 数字数据
element.data('number', 100)

// 布尔数据
element.data('boolean', true)

// 对象数据
element.data('object', { key: 'value' })

// 数组数据
element.data('array', [1, 2, 3])
```

## 注意事项

1. 数据操作支持链式调用
2. 数据名称区分大小写
3. 数据可以是任何类型
4. 数据存储在元素的 `data-*` 属性中
5. 数据操作应该考虑性能影响
