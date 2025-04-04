# SVG.Dom

SVG.Dom 是 SVG.js 中用于处理 DOM 元素的基类。它提供了一些基本的 DOM 操作方法。

## 创建 DOM 元素

```ts
// 创建一个 DOM 元素
const element = draw.element('div')

// 或者从现有的 DOM 元素创建
const div = document.createElement('div')
const element = draw.element(div)
```

## DOM 操作方法

### append(element)

添加子元素：

```ts
// 添加子元素
element.append(draw.rect(100, 100))
```

### prepend(element)

在开头添加子元素：

```ts
// 在开头添加子元素
element.prepend(draw.rect(100, 100))
```

### before(element)

在当前元素之前插入元素：

```ts
// 在当前元素之前插入元素
element.before(draw.rect(100, 100))
```

### after(element)

在当前元素之后插入元素：

```ts
// 在当前元素之后插入元素
element.after(draw.rect(100, 100))
```

### parent()

获取父元素：

```ts
// 获取父元素
const parent = element.parent()
```

### children()

获取所有子元素：

```ts
// 获取所有子元素
const children = element.children()
```

### first()

获取第一个子元素：

```ts
// 获取第一个子元素
const first = element.first()
```

### last()

获取最后一个子元素：

```ts
// 获取最后一个子元素
const last = element.last()
```

### next()

获取下一个兄弟元素：

```ts
// 获取下一个兄弟元素
const next = element.next()
```

### previous()

获取上一个兄弟元素：

```ts
// 获取上一个兄弟元素
const previous = element.previous()
```

## DOM 属性操作

### data(key, value)

设置或获取数据属性：

```ts
// 设置数据属性
element.data('key', 'value')

// 获取数据属性
const value = element.data('key')
```

### removeData(key)

移除数据属性：

```ts
// 移除数据属性
element.removeData('key')
```

## 示例

### 基本用法

```ts
// 创建 DOM 元素
const element = draw.element('div')

// 添加子元素
element.append(draw.rect(100, 100))
element.append(draw.circle(100))

// 设置数据属性
element.data('name', 'my-element')
```

### DOM 操作

```ts
// 创建元素
const parent = draw.element('div')
const child1 = draw.rect(100, 100)
const child2 = draw.circle(100)

// 添加子元素
parent.append(child1)
parent.append(child2)

// 在子元素之间插入元素
const newChild = draw.ellipse(100, 50)
child1.after(newChild)
```

## 注意事项

1. SVG.Dom 是所有 SVG 元素的基类
2. DOM 操作方法会直接操作实际的 DOM 元素
3. 数据属性操作使用 HTML5 的 data-\* 属性
4. 某些 DOM 操作可能会影响元素的渲染性能
