# 插件

SVG.js 支持通过插件扩展功能。

## 官方插件

- svg.draggable.js: 拖拽功能
- svg.filter.js: 滤镜效果
- svg.path.js: 路径操作
- svg.pattern.js: 图案填充

## 安装插件

```bash
npm install @svgdotjs/svg.draggable.js
```

## 使用插件

```ts
import '@svgdotjs/svg.draggable.js'

// 启用拖拽
rect.draggable()
```

## 创建插件

```ts
// 定义插件
const MyPlugin = {
  name: 'myplugin',

  // 初始化
  init() {
    // 插件初始化代码
  },

  // 添加方法
  methods: {
    myMethod() {
      // 方法实现
    },
  },
}

// 注册插件
SVG.extend(SVG.Element, MyPlugin)
```

## 更多信息

请参考官方文档获取完整的插件系统参考和用法说明。
