---
title: GraphQL
date: 2020-12-10
tags: [graphql, restful]
---

## 案例

```diff-csharp
+var task = Task.Run(async () =>
{
    var result = await new DocumentExecuter().ExecuteAsync(doc =>
    {
        doc.Schema = new Schema
        {
            Query = new GraphQuery()
        };
        doc.Query = @"
        query {
            users {
                id
                name
                password
                avator
                phone
-                email
            }
        }
    ";
    }).ConfigureAwait(false);

+    var json = await new DocumentWriter(indent: true).WriteToStringAsync(result);

    Console.WriteLine(json);
});
task.Wait();
```

```graphql
type Book {
  title: String
  author: Author
}

type Author {
  name: String
  books: [Book]
}
union Result = Book | Author
type Post {
  title: String
  body: String
  mediaUrls: [String]
}

type User {
  id: ID!
  name: String!
  email: String!
}
interface MutationResponse {
  code: String!
  success: Boolean!
  message: String!
}
enum AllowedColor {
  RED
  GREEN
  BLUE
}
type UpdateUserEmailMutationResponse implements MutationResponse {
  code: String!
  success: Boolean!
  message: String!
  user: User
}
type Query {
  books: [Book]
  authors: [Author]
  search: [Result]
  favoriteColor: AllowedColor # As a return value
  avatar(borderColor: AllowedColor): String # As an argument
}

type Mutation {
  addBook(title: String, author: String): Book
  # createPost(title: String, body: String, mediaUrls: [String]): Post
  createPost(post: PostAndMediaInput): Post
  # This mutation takes id and email parameters and responds with a User
  updateUserEmail(id: ID!, email: String!): User
}

input PostAndMediaInput {
  "A main title for the post"
  title: String
  "The text body of the post."
  body: String
  "A list of URLs to render in the post."
  mediaUrls: [String]
}
```

```rust
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
#[allow(dead_code)]
pub fn cluster(a: &[f32], b: &[f32]) -> f32 {
    let avg_a = a.iter().sum::<f32>() / a.len() as f32;
    let avg_b = b.iter().sum::<f32>() / b.len() as f32;
    let cov_ab = a
        .iter()
        .zip(b)
        .map(|(x, y)| (x - avg_a) * (y - avg_b))
        .sum::<f32>();
    let sq = a
        .iter()
        .zip(b)
        .map(|(x, y)| [(x - avg_a).powf(2.0), (y - avg_b).powf(2.0)])
        .fold([0.0, 0.0], |mut sums, data| {
            sums[0] += data[0];
            sums[1] += data[1];
            sums
        })
        .iter()
        .fold(1.0, |product, data| product * data)
        .sqrt();
    cov_ab / sq
}

```

```yml
languages:
  - Ruby
  - Perl
  - Python
websites:
  YAML: yaml.org
  Ruby: ruby-lang.org
  Python: python.org
  Perl: use.perl.org
```

```py
import numpy as np
import matplotlib.pyplot as plt


def run():

    # Fixing random state for reproducibility
    np.random.seed(19680801)

    dt = 0.01
    t = np.arange(0, 30, dt)
    nse1 = np.random.randn(len(t))                 # white noise 1
    nse2 = np.random.randn(len(t))                 # white noise 2

    # Two signals with a coherent part at 10Hz and a random part
    s1 = np.sin(2 * np.pi * 10 * t) + nse1
    s2 = np.sin(2 * np.pi * 10 * t) + nse2

    fig, axs = plt.subplots(2, 1)
    axs[0].plot(t, s1, t, s2)
    axs[0].set_xlim(0, 2)
    axs[0].set_xlabel('time')
    axs[0].set_ylabel('s1 and s2')
    axs[0].grid(True)

    cxy, f = axs[1].cohere(s1, s2, 256, 1. / dt)
    axs[1].set_ylabel('coherence')

    fig.tight_layout()
    plt.show()

```

```go
package main

import (
	"fmt"
	"golang/src/example"
	"os"
	"path"
	"path/filepath"
)

func main() {
	dir := path.Join(filepath.Dir(os.Args[0]), "")
	fmt.Println("Hello", dir)
	example.RunHtck(dir)
}
```

```diff-go
package main

import (
	"fmt"
	"golang/src/example"
	"os"
	"path"
	"path/filepath"
)

func main() {
+	dir := path.Join(filepath.Dir(os.Args[0]), "")
+	fmt.Println("Hello", dir)
+	example.RunHtck(dir)
}
```

```javascript{numberLines: 5}
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [`gatsby-remark-prismjs`],
    },
  },
]
```

```pug
doctype html
html(lang="en")
    head
        include includes/meta.pug
        title 斑马购
        meta(name="description",content="斑马购首页")
        meta(name="keywords",content="微商,微盟,代理")
        link(rel="stylesheet" href="public/build/base.css")
    body
        #loading
            .animate
        script(src="public/build/base.js")
        link(rel="stylesheet" href="public/build/main.css")
        include includes/sidebar.pug
        .pusher
            include includes/fullpage.pug
        script(src="public/build/main.js")
```

```diff-pug
html(lang="en")
    head
        include includes/meta.pug
        title 斑马购
        meta(name="description",content="斑马购首页")
        meta(name="keywords",content="微商,微盟,代理")
        link(rel="stylesheet" href="public/build/base.css")
    body
        #loading
            .animate
-        script(src="public/build/base.js")
+        link(rel="stylesheet" href="public/build/main.css")
+        link(rel="stylesheet" href="public/build/main.css")
+        link(rel="stylesheet" href="public/build/main.css")
        include includes/sidebar.pug
        .pusher
            include includes/fullpage.pug
        script(src="public/build/main.js")
```

## 参考资料

1. [graphql](https://graphql.org/)
1. [graphql-dotnet](https://graphql-dotnet.github.io/docs)
1. [ASP.NET Core 中使用 GraphQL](https://www.cnblogs.com/lwqlun/p/9955901.html)
