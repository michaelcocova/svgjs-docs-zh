# 基本事件

SVG.js 支持所有标准的 DOM 事件，并且提供了一些额外的事件处理功能。以下是一些常用的事件类型：

## 鼠标事件

```ts
// 点击事件
element.on('click', (event) => {
  console.log('元素被点击了')
})

// 鼠标移入
element.on('mouseover', (event) => {
  console.log('鼠标移入元素')
})

// 鼠标移出
element.on('mouseout', (event) => {
  console.log('鼠标移出元素')
})

// 鼠标移动
element.on('mousemove', (event) => {
  console.log('鼠标在元素上移动')
})
```

## 触摸事件

```ts
// 触摸开始
element.on('touchstart', (event) => {
  console.log('触摸开始')
})

// 触摸移动
element.on('touchmove', (event) => {
  console.log('触摸移动')
})

// 触摸结束
element.on('touchend', (event) => {
  console.log('触摸结束')
})
```

## 动画事件

```ts
// 动画开始
element.on('animatestart', (event) => {
  console.log('动画开始')
})

// 动画结束
element.on('animatestop', (event) => {
  console.log('动画结束')
})

// 动画暂停
element.on('animatepause', (event) => {
  console.log('动画暂停')
})
```

## 拖拽事件

```ts
// 拖拽开始
element.on('dragstart', (event) => {
  console.log('拖拽开始')
})

// 拖拽中
element.on('drag', (event) => {
  console.log('正在拖拽')
})

// 拖拽结束
element.on('dragend', (event) => {
  console.log('拖拽结束')
})
```

## 事件对象

事件处理函数会接收到一个事件对象，包含以下常用属性：

```ts
element.on('click', (event) => {
  // 事件类型
  console.log(event.type)

  // 鼠标位置
  console.log(event.clientX, event.clientY)

  // 目标元素
  console.log(event.target)

  // 阻止默认行为
  event.preventDefault()

  // 阻止事件冒泡
  event.stopPropagation()
})
```

## 注意事项

1. 事件处理函数中的 `this` 指向触发事件的元素
2. 可以使用 `event.preventDefault()` 阻止默认行为
3. 可以使用 `event.stopPropagation()` 阻止事件冒泡
4. 事件处理函数可以返回 `false` 来同时阻止默认行为和事件冒泡
5. 可以使用 `element.off()` 移除事件监听器
