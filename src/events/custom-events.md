# 自定义事件

SVG.js 允许你创建和触发自定义事件。以下是自定义事件的使用方法：

## 创建自定义事件

```ts
// 创建自定义事件
const customEvent = new CustomEvent('custom', {
  detail: {
    message: '自定义事件数据',
  },
  bubbles: true,
  cancelable: true,
})

// 触发自定义事件
element.dispatchEvent(customEvent)
```

## 监听自定义事件

```ts
// 监听自定义事件
element.on('custom', (event) => {
  console.log(event.detail.message) // 输出: 自定义事件数据
})
```

## 自定义事件类

```ts
// 创建自定义事件类
class CustomEventClass extends Event {
  constructor(type, options = {}) {
    super(type, options)
    this.detail = options.detail || {}
  }
}

// 使用自定义事件类
const event = new CustomEventClass('custom', {
  detail: {
    message: '自定义事件数据',
  },
})

// 触发自定义事件
element.dispatchEvent(event)
```

## 事件命名空间

```ts
// 使用命名空间
element.on('custom.namespace', (event) => {
  console.log('带命名空间的事件')
})

// 触发带命名空间的事件
element.trigger('custom.namespace')

// 移除带命名空间的事件
element.off('custom.namespace')
```

## 事件数据传递

```ts
// 传递数据
element.on('custom', (event, data) => {
  console.log(data) // 输出: 事件数据
})

// 触发事件并传递数据
element.trigger('custom', '事件数据')
```

## 注意事项

1. 自定义事件可以携带数据，通过 `detail` 属性传递
2. 可以使用 `bubbles` 选项控制事件是否冒泡
3. 可以使用 `cancelable` 选项控制事件是否可以取消
4. 事件命名空间可以帮助组织和管理事件
5. 自定义事件类可以扩展标准事件类的功能
