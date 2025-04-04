# 类操作

SVG.js 提供了多种方法来操作 SVG 元素的类。以下是类操作的方法：

## 添加类

```ts
// 添加单个类
element.addClass('my-class')

// 添加多个类
element.addClass('class1 class2')

// 使用数组添加类
element.addClass(['class1', 'class2'])

// 使用链式调用
element.addClass('class1').addClass('class2')
```

## 移除类

```ts
// 移除单个类
element.removeClass('my-class')

// 移除多个类
element.removeClass('class1 class2')

// 使用数组移除类
element.removeClass(['class1', 'class2'])

// 使用链式调用
element.removeClass('class1').removeClass('class2')
```

## 切换类

```ts
// 切换单个类
element.toggleClass('my-class')

// 切换多个类
element.toggleClass('class1 class2')

// 使用数组切换类
element.toggleClass(['class1', 'class2'])

// 使用链式调用
element.toggleClass('class1').toggleClass('class2')
```

## 检查类

```ts
// 检查是否包含类
const hasClass = element.hasClass('my-class')

// 检查是否包含多个类
const hasClasses = element.hasClass('class1 class2')

// 使用数组检查类
const hasClasses = element.hasClass(['class1', 'class2'])
```

## 注意事项

1. 类操作支持链式调用
2. 类名区分大小写
3. 类名不能包含空格
4. 类名应该遵循 CSS 命名约定
5. 类操作应该考虑性能影响
