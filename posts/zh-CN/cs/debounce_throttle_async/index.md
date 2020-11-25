---
title: 防抖、节流、异步时序
date: 2020-11-20 18:35:47
---

## Request

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DasonCheng.DotNet.Tesingo.Models;
using DasonCheng.DotNet.Tesingo.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace DasonCheng.DotNet.Tesingo.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EngineController : ControllerBase
    {
        [HttpGet]
        public async Task<Config> Source()
        {
            return await Utils.Ecg.engine.Source("sdfsd");
        }

        [HttpGet("range")]
        public PositionRange GetRangeByPosition([FromQuery] QueryPositionDto query)
        {
            var range = Utils.Ecg.engine.GetRangeByPosition(query.Position, query.Size);
            return range;
        }

        [HttpGet("template")]
        public Dictionary<BeatType, List<Beat>> GetTemplate()
        {
            var template = Utils.Ecg.engine.Template();
            return template;
        }

        [HttpGet("slice")]
        public IEnumerable<Beat> GetSlice([FromQuery] QuerySliceDto query)
        {
            return Utils.Ecg.engine.Slice(query.Start, query.End);
        }

        [HttpGet("line")]
        public IEnumerable<Point> GetLines([FromQuery] QueryLineDto query)
        {
            return Utils.Ecg.engine.Lines(query.Start, query.Size);
        }

        [HttpPost("add")]
        public void Add(QueryAddOrUpdateDto query)
        {
            Utils.Ecg.engine.Add(query.Index, query.Type);
        }

        [HttpPut("update")]
        public void Update(QueryAddOrUpdateDto query)
        {
            Utils.Ecg.engine.Update(query.Index, query.Type);
        }

        [HttpDelete("remove")]
        public void Remove([FromQuery] QueryRemoveDto query)
        {
            Utils.Ecg.engine.Remove(query.Index);
        }
    }
}
```

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
