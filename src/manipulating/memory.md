# 内存操作

SVG.js 提供了多种方法来操作 SVG 元素的内存。以下是内存操作的方法：

## 内存管理

```ts
// 清除元素的内存
element.clear()

// 清除所有子元素的内存
element.clear(true)

// 使用链式调用
element.clear().clear(true)
```

## 内存优化

```ts
// 优化元素的内存
element.optimize()

// 优化所有子元素的内存
element.optimize(true)

// 使用链式调用
element.optimize().optimize(true)
```

## 内存回收

```ts
// 回收元素的内存
element.recycle()

// 回收所有子元素的内存
element.recycle(true)

// 使用链式调用
element.recycle().recycle(true)
```

## 内存检查

```ts
// 检查元素的内存使用
const memory = element.memory()

// 检查所有子元素的内存使用
const memory = element.memory(true)

// 使用链式调用
element.memory().memory(true)
```

## 注意事项

1. 内存操作支持链式调用
2. 内存操作应该谨慎使用
3. 内存操作可能会影响性能
4. 内存操作应该考虑浏览器兼容性
5. 内存操作应该遵循最佳实践
