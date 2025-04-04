# SVG 元素

SVG.js 支持所有标准的 SVG 元素，让你能够创建各种丰富的矢量图形。本节将介绍所有可用的 SVG 元素及其用法。

## 基本图形元素

- [矩形 (rect)](/elements/rect) - 创建矩形和圆角矩形
- [圆形 (circle)](/elements/circle) - 创建圆形
- [椭圆 (ellipse)](/elements/ellipse) - 创建椭圆
- [线条 (line)](/elements/line) - 创建直线
- [折线 (polyline)](/elements/polyline) - 创建折线
- [多边形 (polygon)](/elements/polygon) - 创建多边形
- [路径 (path)](/elements/path) - 创建任意形状的路径

## 文本元素

- [文本 (text)](/elements/text) - 创建文本内容
- [文本片段 (tspan)](/elements/tspane) - 设置文本的部分样式
- [文本路径 (textPath)](/elements/textpath) - 沿路径排列文本

## 图像和外部内容

- [图像 (image)](/elements/image) - 插入位图图像
- [外部对象 (foreignObject)](/elements/foreignobject) - 嵌入 HTML 内容
- [使用元素 (use)](/elements/use) - 复用已定义的图形

## 特效元素

- [渐变](/elements/gradient) - 创建线性或径向渐变
- [图案](/elements/pattern) - 创建可重复的填充图案
- [裁剪路径](/elements/clippath) - 定义裁剪区域
- [遮罩](/elements/mask) - 创建透明度遮罩
- [标记](/elements/marker) - 为线条添加箭头等标记

## 通用功能

- [通用属性和方法](/elements/general) - 所有元素共有的功能
- [变换](/elements/transform) - 元素的变换操作
- [样式](/elements/style) - 元素的样式设置
- [动画](/elements/animation) - 元素的动画效果
- [视口](/elements/viewbox) - 控制图形的显示区域

## 辅助类

- [数组](/elements/array) - 处理数值数组
- [颜色](/elements/color) - 处理颜色值
- [点](/elements/point) - 处理坐标点
- [边界框](/elements/bbox) - 计算元素边界
- [DOM 操作](/elements/dom) - 底层 DOM 操作
- [矩阵](/elements/matrix) - 处理变换矩阵

## 最佳实践

- 选择合适的元素类型来实现所需的图形效果
- 合理使用组合元素来构建复杂图形
- 利用可重用元素（如渐变、图案）提高代码复用性
- 注意元素的性能影响，适当使用简单图形代替复杂路径
- 保持代码结构清晰，便于维护和修改
