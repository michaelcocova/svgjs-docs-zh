# jQuery 和 Zepto 选择器

SVG.js 支持使用 jQuery 和 Zepto 的选择器语法来引用 SVG 元素。以下是使用 jQuery 和 Zepto 选择器的方法：

## 基本选择器

```ts
// ID 选择器
const element = $('#my-element')

// 类选择器
const elements = $('.my-class')

// 标签选择器
const elements = $('rect')

// 属性选择器
const elements = $('[fill="red"]')

// 组合选择器
const elements = $('g rect')
```

## 链式调用

```ts
// 链式调用
$('#my-element').fill('red').stroke('black').stroke({ width: 2 }).opacity(0.5)

// 链式调用和选择器
$('g rect').fill('red').stroke('black').stroke({ width: 2 }).opacity(0.5)
```

## 事件处理

```ts
// 点击事件
$('#my-element').on('click', (event) => {
  console.log('元素被点击了')
})

// 鼠标移入
$('#my-element').on('mouseover', (event) => {
  console.log('鼠标移入元素')
})

// 鼠标移出
$('#my-element').on('mouseout', (event) => {
  console.log('鼠标移出元素')
})

// 鼠标移动
$('#my-element').on('mousemove', (event) => {
  console.log('鼠标在元素上移动')
})
```

## 动画效果

```ts
// 动画填充颜色
$('#my-element').animate(1000).fill('red')

// 动画描边颜色
$('#my-element').animate(1000).stroke('black')

// 动画透明度
$('#my-element').animate(1000).opacity(0.5)

// 链式调用动画
$('#my-element').animate(1000).fill('red').stroke('black').opacity(0.5)
```

## 注意事项

1. jQuery 和 Zepto 选择器区分大小写
2. jQuery 和 Zepto 选择器支持链式调用
3. jQuery 和 Zepto 选择器可能会影响性能
4. jQuery 和 Zepto 选择器应该考虑浏览器兼容性
5. jQuery 和 Zepto 选择器应该遵循最佳实践
