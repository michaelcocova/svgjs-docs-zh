# SVG.A

SVG.A 元素用于创建可点击的链接，类似于 HTML 中的 `<a>` 标签。它可以包含其他 SVG 元素，点击时会跳转到指定的 URL。

## 创建链接

```ts
// 创建一个链接
const link = draw.link('https://example.com')

// 或者直接创建并添加到画布
const link = draw.link('https://example.com').addTo('#drawing')
```

## 添加元素到链接

```ts
// 创建链接
const link = draw.link('https://example.com')

// 添加元素到链接
const rect = link.rect(100, 100).fill('#f06')
const text = link.text('点击我').move(10, 50)
```

## 链接属性

### target(target)

设置链接的打开方式：

```ts
// 在新窗口打开
link.target('_blank')

// 在当前窗口打开
link.target('_self')
```

### download(filename)

设置链接为下载链接：

```ts
// 设置为下载链接
link.download('file.pdf')
```

## 示例

### 基本用法

```ts
// 创建链接
const link = draw.link('https://example.com')

// 添加元素
const rect = link.rect(100, 100).fill('#f06')
const text = link.text('点击我').move(10, 50)

// 设置在新窗口打开
link.target('_blank')
```

### 下载链接

```ts
// 创建下载链接
const link = draw.link('https://example.com/file.pdf')

// 添加元素
const rect = link.rect(100, 100).fill('#f06')
const text = link.text('下载文件').move(10, 50)

// 设置为下载
link.download('file.pdf')
```

## 注意事项

1. SVG.A 元素可以包含多个子元素
2. 链接的样式可以通过 CSS 设置
3. 链接可以设置 target 属性控制打开方式
4. 链接可以设置为下载链接
5. 链接的点击区域是其包含的所有元素的组合
