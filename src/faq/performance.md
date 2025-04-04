# 性能优化

## 渲染优化

### 1. 使用 `group` 减少重绘

```ts
// 创建组
const group = draw.group()

// 在组中添加元素
group.rect(100, 100).fill('red')
group.circle(100).fill('blue')

// 对组进行操作
group.move(100, 100)
```

### 2. 使用 `defs` 定义可重用元素

```ts
// 定义可重用元素
const defs = draw.defs()
const gradient = defs.gradient('linear', (stop) => {
  stop.at(0, 'red')
  stop.at(1, 'blue')
})

// 使用定义的元素
draw.rect(100, 100).fill(gradient)
```

### 3. 批量操作元素

```ts
// 批量设置样式
draw.selectAll('rect').fill('red')

// 批量添加事件
draw.selectAll('rect').on('click', (event) => {
  console.log('矩形被点击了')
})
```

## 内存管理

### 1. 及时清理不需要的元素

```ts
// 移除元素
element.remove()

// 清空画布
draw.clear()
```

### 2. 使用 `recycle` 回收内存

```ts
// 回收元素内存
element.recycle()

// 回收所有子元素内存
element.recycle(true)
```

### 3. 优化数据结构

```ts
// 使用对象池
const pool = {
  rects: [],
  circles: [],
  lines: [],
}

// 从对象池获取元素
function getRect() {
  return pool.rects.pop() || draw.rect(100, 100)
}

// 归还元素到对象池
function returnRect(rect) {
  pool.rects.push(rect)
}
```

## 动画优化

### 1. 使用 `requestAnimationFrame`

```ts
// 使用 requestAnimationFrame
function animate() {
  element.animate(1000).fill('red')
  requestAnimationFrame(animate)
}

animate()
```

### 2. 批量动画

```ts
// 批量动画
draw.selectAll('rect').animate(1000).fill('red')
```

### 3. 使用 CSS 动画

```ts
// 添加 CSS 类
element.addClass('animate');

// CSS 样式
.animate {
  transition: fill 1s;
}
```

## 最佳实践

1. 减少 DOM 操作
2. 使用缓存
3. 避免频繁重绘
4. 合理使用事件委托
5. 注意内存泄漏
