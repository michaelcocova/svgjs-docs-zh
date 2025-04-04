# 我发现了 bug，在哪里报告？

## 问题描述

在使用 SVG.js 时发现了 bug，应该如何报告？

## 解决方案

### 方法一：在 GitHub Issues 上报告

1. 访问 [SVG.js GitHub Issues](https://github.com/svgdotjs/svg.js/issues)
2. 点击 "New issue" 按钮
3. 选择 "Bug report" 模板
4. 填写相关信息：
   - 描述 bug
   - 复现步骤
   - 期望行为
   - 实际行为
   - 环境信息
   - 代码示例

### 方法二：提供最小复现示例

创建一个最小复现示例，可以帮助开发者更快地定位和修复问题：

```ts
// 最小复现示例
const draw = SVG().addTo('#drawing')
const rect = draw.rect(100, 100).fill('red')
// 描述问题
```

### 方法三：检查现有问题

在报告新问题之前，请先检查是否已经有人报告过相同的问题：

1. 在 Issues 页面搜索相关问题
2. 查看已关闭的问题
3. 查看 Pull Requests

## 最佳实践

1. 提供详细的错误描述
2. 提供可复现的代码示例
3. 说明您的使用环境
4. 检查是否已有相关报告
5. 保持礼貌和耐心
