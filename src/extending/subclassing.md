# 子类化

SVG.js 允许你创建 SVG.js 的子类。以下是创建子类的方法：

## 创建子类

```ts
// 创建矩形子类
class CustomRect extends SVG.Rect {
  constructor() {
    super()
    this.customProperty = '自定义属性'
  }

  // 添加新方法
  customMethod() {
    return this.fill('red')
  }
}

// 使用子类
const rect = new CustomRect()
rect.size(100, 100)
rect.customMethod() // 将矩形填充为红色
console.log(rect.customProperty) // 输出: 自定义属性
```

## 继承多个类

```ts
// 创建混合类
class CustomShape extends SVG.Shape {
  constructor() {
    super()
    this.customProperty = '自定义属性'
  }

  // 添加新方法
  customMethod() {
    return this.fill('red')
  }
}

// 使用混合类
const shape = new CustomShape()
shape.customMethod() // 将形状填充为红色
console.log(shape.customProperty) // 输出: 自定义属性
```

## 覆盖方法

```ts
// 创建覆盖类
class CustomRect extends SVG.Rect {
  // 覆盖 size 方法
  size(width, height) {
    // 调用父类方法
    super.size(width, height)
    // 添加自定义行为
    this.fill('red')
    return this
  }
}

// 使用覆盖类
const rect = new CustomRect()
rect.size(100, 100) // 设置大小并将矩形填充为红色
```

## 添加静态方法

```ts
// 创建静态类
class CustomRect extends SVG.Rect {
  // 添加静态方法
  static createSquare(size) {
    const rect = new CustomRect()
    rect.size(size, size)
    return rect
  }
}

// 使用静态方法
const square = CustomRect.createSquare(100) // 创建正方形
```

## 注意事项

1. 子类应该调用父类的构造函数
2. 子类可以覆盖父类的方法
3. 子类可以添加新的方法和属性
4. 子类可以添加静态方法
5. 子类应该遵循 SVG.js 的命名约定
