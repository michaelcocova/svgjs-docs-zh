# SVG.Number

SVG.Number 元素用于表示数字，可以用于设置元素的数值属性。它通过设置数字的值来定义。

## 创建数字

```ts
// 创建数字
const number = new SVG.Number()

// 或者使用参数
const number = new SVG.Number(0)
```

## 数字属性

### value

设置或获取数字的值：

```ts
// 设置值
number.value = 0

// 获取值
const value = number.value
```

## 数字方法

### plus(number)

加法：

```ts
// 创建另一个数字
const otherNumber = new SVG.Number(1)

// 加法
const result = number.plus(otherNumber)
```

### minus(number)

减法：

```ts
// 创建另一个数字
const otherNumber = new SVG.Number(1)

// 减法
const result = number.minus(otherNumber)
```

### times(number)

乘法：

```ts
// 创建另一个数字
const otherNumber = new SVG.Number(2)

// 乘法
const result = number.times(otherNumber)
```

### divide(number)

除法：

```ts
// 创建另一个数字
const otherNumber = new SVG.Number(2)

// 除法
const result = number.divide(otherNumber)
```

### to(unit)

单位转换：

```ts
// 单位转换
const result = number.to('px')
```

### toString()

转换为字符串：

```ts
// 转换为字符串
const string = number.toString()
```

### valueOf()

获取原始值：

```ts
// 获取原始值
const value = number.valueOf()
```

## 示例

### 基本用法

```ts
// 创建数字
const number = new SVG.Number(0)

// 设置值
number.value = 1

// 获取值
const value = number.value
```

### 数字操作

```ts
// 创建数字
const number = new SVG.Number(0)

// 创建另一个数字
const otherNumber = new SVG.Number(1)

// 加法和减法
const plus = number.plus(otherNumber)
const minus = number.minus(otherNumber)

// 乘法和除法
const times = number.times(otherNumber)
const divide = number.divide(otherNumber)

// 单位转换
const to = number.to('px')

// 转换为字符串
const string = number.toString()

// 获取原始值
const value = number.valueOf()
```

## 注意事项

1. 数字的值可以通过属性直接访问和修改
2. 数字的方法会返回新的数字，不会修改原数字
3. 数字的操作可以用于创建复杂的数字效果
4. 数字的组合可以用于创建复合数字
5. 数字的字符串可以用于设置元素的 number 属性
