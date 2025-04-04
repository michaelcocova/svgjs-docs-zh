# 事件监听器

SVG.js 提供了多种方式来添加和移除事件监听器。以下是事件监听器的使用方法：

## 添加事件监听器

### 使用 on 方法

```ts
// 添加单个事件监听器
element.on('click', (event) => {
  console.log('点击事件')
})

// 添加多个事件监听器
element.on({
  click(event) {
    console.log('点击事件')
  },
  mouseover(event) {
    console.log('鼠标移入')
  },
})
```

### 使用 addEventListener 方法

```ts
// 添加事件监听器
element.addEventListener('click', (event) => {
  console.log('点击事件')
})

// 添加带选项的事件监听器
element.addEventListener(
  'click',
  (event) => {
    console.log('点击事件')
  },
  { once: true }
) // 只触发一次
```

## 移除事件监听器

### 使用 off 方法

```ts
// 移除单个事件监听器
element.off('click')

// 移除多个事件监听器
element.off('click mouseover')

// 移除所有事件监听器
element.off()
```

### 使用 removeEventListener 方法

```ts
// 定义事件处理函数
function handleClick(event) {
  console.log('点击事件')
}

// 添加事件监听器
element.addEventListener('click', handleClick)

// 移除事件监听器
element.removeEventListener('click', handleClick)
```

## 一次性事件监听器

```ts
// 使用 once 选项
element.on(
  'click',
  (event) => {
    console.log('只触发一次')
  },
  { once: true }
)

// 使用 one 方法
element.one('click', (event) => {
  console.log('只触发一次')
})
```

## 事件委托

```ts
// 在父元素上监听子元素的事件
parent.on('click', 'child', (event) => {
  console.log('子元素被点击')
})
```

## 注意事项

1. 使用 `on` 方法添加的事件监听器可以使用 `off` 方法移除
2. 使用 `addEventListener` 添加的事件监听器必须使用 `removeEventListener` 移除
3. 事件委托可以提高性能，特别是在处理大量子元素时
4. 一次性事件监听器在触发后会自动移除
5. 事件监听器的执行顺序与添加顺序相同
