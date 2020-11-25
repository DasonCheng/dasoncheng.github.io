---
title: 防抖、节流、异步时序
date: 2020-11-20 18:35:47
---

## Request

![Alt text here](./photo-159.jpeg)

## Implament

```typescript
export enum Color {
  Red,
  Black,
}

export type Node<T> = RedBlackNode<T> | RedBlackLeaf

export class RedBlackLeaf {
  public color = Color.Black
  public parent: undefined
  public left: undefined
  public right: undefined
}

export const LEAF = new RedBlackLeaf()

export class RedBlackNode<T> {
  public color: Color
  public key: number
  public data: T
  public parent: RedBlackNode<T> | undefined
  public left: Node<T>
  public right: Node<T>
  constructor(option: {
    key: number
    data: T
    color?: Color
    parent?: RedBlackNode<T>
  }) {
    this.color = option.color ?? Color.Red
    this.key = option.key
    this.data = option.data
    this.parent = option.parent
    this.left = LEAF
    this.right = LEAF
  }
}

export interface IRedBlackTree<T> {
  insert(key: number, data: T): void
  remove(key: number): void
  update(key: number, data: T): void
  search(key: number): RedBlackNode<T> | undefined
  slice(start: number, end: number): RedBlackNode<T>[]
  prev(key: number): RedBlackNode<T> | undefined
  next(key: number): RedBlackNode<T> | undefined
  clear(): void
  toList(): RedBlackNode<T>[]
}
```

```javascript
import Header from "gatsby-theme-amazing/src/components/header"
// these props are the same as the original component would get
export default function MyHeader(props) {
  return <Header {...props} myProp="true" />
}
const msg = "" === "hello"
```

```scss
html {
  p {
    color: white;
  }
}
```

```css
html {
  color: white;
}
```

## Reference

- [如何使用 RxJS 构建搜索栏](https://www.howtoing.com/how-to-build-a-search-bar-with-rxjs)
- [时序问题](https://segmentfault.com/a/1190000019473988)
- [JavaScript debounce and throttle](https://www.cnblogs.com/nanchen/p/7922959.html)
