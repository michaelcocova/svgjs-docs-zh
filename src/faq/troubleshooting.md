# 故障排除

## 常见问题

### 1. 元素不显示

```ts
// 检查元素是否添加到画布
const element = draw.rect(100, 100)
element.addTo(draw) // 确保元素已添加到画布

// 检查元素是否可见
element.show() // 确保元素可见
element.opacity(1) // 确保不透明度不为 0
```

### 2. 事件不触发

```ts
// 检查事件监听器是否正确添加
element.on('click', (event) => {
  console.log('点击事件触发')
})

// 检查元素是否可点击
element.attr('pointer-events', 'all') // 确保元素可接收事件
```

### 3. 动画不执行

```ts
// 检查动画是否正确设置
element.animate(1000).fill('red')

// 检查动画是否被阻止
element.stop() // 停止所有动画
element.animate(1000).fill('red') // 重新开始动画
```

## 解决方案

### 1. 使用调试工具

```ts
// 使用 console.log 调试
console.log('元素:', element)
console.log('属性:', element.attr())
console.log('样式:', element.style())

// 使用断点调试
debugger
element.fill('red')
```

### 2. 检查浏览器控制台

```ts
// 监听错误事件
window.onerror = function (message, source, lineno, colno, error) {
  console.error('错误:', message)
  console.error('源文件:', source)
  console.error('行号:', lineno)
  console.error('列号:', colno)
  console.error('错误对象:', error)
}
```

### 3. 使用 SVG.js 调试工具

```ts
// 启用调试模式
SVG.debug = true

// 检查元素状态
console.log('元素状态:', element.state())

// 检查画布状态
console.log('画布状态:', draw.state())
```

## 调试技巧

### 1. 使用临时样式

```ts
// 添加临时边框
element.stroke({ width: 1, color: 'red' })

// 添加临时背景
element.fill('rgba(255, 0, 0, 0.1)')
```

### 2. 使用控制台命令

```ts
// 在控制台中检查元素
$0 // 当前选中的元素
$1 // 上一个选中的元素
$2 // 上上一个选中的元素

// 在控制台中操作元素
$0.fill('red')
$0.stroke('black')
```

### 3. 使用性能分析工具

```ts
// 使用 performance API
performance.mark('start')
// 执行操作
performance.mark('end')
performance.measure('操作耗时', 'start', 'end')
```

## 最佳实践

1. 保持代码简洁
2. 使用注释说明
3. 分步调试
4. 记录日志
5. 及时备份
