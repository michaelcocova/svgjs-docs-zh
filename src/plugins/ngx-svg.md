# Angular SVG 插件

## 安装

### 通过 npm 安装

```bash
npm install @svgdotjs/ngx-svg
```

### 在 Angular 项目中配置

```typescript
// app.module.ts
import { NgxSvgModule } from '@svgdotjs/ngx-svg'

@NgModule({
  imports: [NgxSvgModule],
})
export class AppModule {}
```

## 基本用法

### 在组件中使用

```typescript
// app.component.ts
import { Component } from '@angular/core'
import { SVG } from '@svgdotjs/svg.js'

@Component({
  selector: 'app-root',
  template: ` <div id="drawing"></div> `,
})
export class AppComponent {
  constructor() {
    const draw = SVG().addTo('#drawing')
    const rect = draw.rect(100, 100).fill('red')
  }
}
```

### 配置选项

```typescript
// 配置 SVG 选项
const draw = SVG().addTo('#drawing', {
  width: 800,
  height: 600,
  viewBox: '0 0 800 600',
})
```

### SVG 类型

```typescript
// 创建矩形
const rect = draw.rect(100, 100).fill('red')

// 创建圆形
const circle = draw.circle(100).fill('blue')

// 创建路径
const path = draw.path('M 0 0 L 100 100').fill('green')
```

## 高级用法

### 自定义 SVG 行为

```typescript
// 自定义 SVG 行为
const draw = SVG().addTo('#drawing', {
  onInit() {
    // 自定义初始化行为
  },
  onUpdate() {
    // 自定义更新行为
  },
})
```

### 组合 SVG

```typescript
// 组合多个 SVG
const group = draw.group()
const rect = group.rect(100, 100).fill('red')
const circle = group.circle(100).fill('blue')
```

### SVG 控制

```typescript
// 更新 SVG
draw.update()

// 清除 SVG
draw.clear()

// 销毁 SVG
draw.destroy()
```

## 最佳实践

1. 选择合适的 SVG 配置
2. 注意 SVG 性能
3. 优化 SVG 效果
4. 处理 SVG 错误
5. 提供用户反馈
