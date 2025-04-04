# SVG.js 可以在 Node.js 中运行吗？

## 问题描述

SVG.js 是否可以在 Node.js 环境中运行？

## 原因分析

SVG.js 主要设计用于浏览器环境，因为它依赖于 DOM API。在 Node.js 环境中，没有内置的 DOM 实现，因此不能直接运行。

## 解决方案

### 方法一：使用 JSDOM

```ts
// 安装 JSDOM
npm install jsdom

// 使用 JSDOM
const { JSDOM } = require('jsdom');
const { window } = new JSDOM();
const { SVG } = require('@svgdotjs/svg.js');

// 设置全局 window 对象
global.window = window;
global.document = window.document;

// 使用 SVG.js
const draw = SVG().size(800, 600);
```

### 方法二：使用 SVG.js 的服务器端渲染

```ts
// 安装 svg.js-server
npm install @svgdotjs/svg.js-server

// 使用服务器端渲染
const { SVG } = require('@svgdotjs/svg.js-server');

// 创建 SVG
const draw = SVG().size(800, 600);
const rect = draw.rect(100, 100).fill('red');

// 导出 SVG
const svg = draw.svg();
```

### 方法三：使用其他 SVG 库

```ts
// 安装其他 SVG 库
npm install svg

// 使用其他 SVG 库
const SVG = require('svg');
const svg = new SVG();
```

## 最佳实践

1. 选择合适的解决方案
2. 注意性能影响
3. 处理兼容性问题
4. 提供错误处理
5. 考虑替代方案
