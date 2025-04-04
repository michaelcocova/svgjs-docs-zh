# SVG.js 事件处理

SVG.js 提供了完整的事件处理系统，让你能够轻松处理用户交互和元素状态变化。通过事件系统，你可以为 SVG 元素添加交互行为，响应用户操作，并实现复杂的交互效果。

## 事件系统概览

### 基础事件

- [基本事件 (Basic Events)](/events/basic-events) - 处理鼠标、触摸等基本事件
  - 点击事件 (click, dblclick)
  - 鼠标事件 (mousedown, mousemove, mouseup)
  - 触摸事件 (touchstart, touchmove, touchend)
  - 键盘事件 (keydown, keyup)

### 事件监听

- [事件监听器 (Event Listeners)](/events/event-listeners) - 添加和管理事件监听器
  - 添加事件监听器
  - 移除事件监听器
  - 事件委托
  - 事件命名空间

### 自定义事件

- [自定义事件 (Custom Events)](/events/custom-events) - 创建和触发自定义事件
  - 定义自定义事件
  - 触发自定义事件
  - 事件数据传递

## 使用示例

```ts
// 添加基本事件监听器
const rect = draw.rect(100, 100)
rect.on('click', (event) => {
  console.log('矩形被点击')
})

// 使用事件命名空间
rect.on('click.namespace', (event) => {
  // 处理特定命名空间的点击事件
})

// 创建和触发自定义事件
rect.on('custom.event', (event) => {
  console.log('自定义事件数据:', event.detail)
})

rect.fire('custom.event', { detail: { foo: 'bar' } })
```

## 最佳实践

### 事件处理

- 使用事件委托优化性能
- 及时移除不需要的事件监听器
- 避免在事件处理器中执行耗时操作
- 合理使用事件命名空间

### 性能优化

- 使用节流和防抖处理高频事件
- 避免添加过多事件监听器
- 优化事件处理器的执行效率

### 错误处理

- 在事件处理器中添加适当的错误处理
- 避免事件处理器中的异常影响其他功能

## 移动设备支持

- 同时支持鼠标和触摸事件
- 处理移动设备特有的事件
- 优化移动设备的交互体验

## 浏览器兼容性

- 支持所有现代浏览器
- 提供触摸事件的降级处理
- 注意不同浏览器的事件差异

## 调试技巧

- 使用事件监听器调试工具
- 添加事件日志记录
- 使用浏览器开发者工具分析事件流
