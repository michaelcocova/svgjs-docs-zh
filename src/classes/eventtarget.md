# SVG.EventTarget

SVG.EventTarget 类用于处理 SVG 中的事件，提供了一系列方法来操作和管理这些事件。

## 基本用法

```ts
// 创建事件目标
const target = new SVG.EventTarget()

// 添加事件监听器
target.on('click', (event) => {
  console.log('clicked')
})

// 移除事件监听器
target.off('click')
```

## 事件方法

### 基本操作

```ts
// 添加事件监听器
target.on('click', (event) => {
  console.log('clicked')
})

// 移除事件监听器
target.off('click')

// 触发事件
target.fire('click')
```

### 事件监听

```ts
// 添加事件监听器
target.on('click', (event) => {
  console.log('clicked')
})

// 添加一次性事件监听器
target.once('click', (event) => {
  console.log('clicked once')
})

// 添加事件委托
target.delegate('click', '.child', (event) => {
  console.log('child clicked')
})
```

### 事件触发

```ts
// 触发事件
target.fire('click')

// 触发自定义事件
target.fire('custom', { data: 'custom data' })

// 触发事件并传递数据
target.fire('click', { x: 100, y: 100 })
```

## 示例

### 基本事件操作

```ts
// 创建事件目标
const target = new SVG.EventTarget()

// 添加事件监听器
target.on('click', (event) => {
  console.log('clicked')
})

// 移除事件监听器
target.off('click')

// 触发事件
target.fire('click')
```

### 事件监听

```ts
// 创建事件目标
const target = new SVG.EventTarget()

// 添加事件监听器
target.on('click', (event) => {
  console.log('clicked')
})

// 添加一次性事件监听器
target.once('click', (event) => {
  console.log('clicked once')
})

// 添加事件委托
target.delegate('click', '.child', (event) => {
  console.log('child clicked')
})
```

### 事件触发

```ts
// 创建事件目标
const target = new SVG.EventTarget()

// 触发事件
target.fire('click')

// 触发自定义事件
target.fire('custom', { data: 'custom data' })

// 触发事件并传递数据
target.fire('click', { x: 100, y: 100 })
```

## 最佳实践

1. 使用事件方法进行事件数据处理
2. 注意事件的性能影响
3. 使用适当的事件方法
4. 考虑事件的内存使用
5. 使用事件进行事件数据组织
6. 注意事件的边界情况
