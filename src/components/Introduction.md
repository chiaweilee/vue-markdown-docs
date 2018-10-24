<p align="center"><a href="https://vuejs.org" target="_blank" rel="noopener noreferrer"><img width="100" src="https://vuejs.org/images/logo.png" alt="Vue logo"></a></p>

<p align="center">
<a href="https://www.npmjs.com/package/vue-markdown-docs"><img src="https://img.shields.io/npm/l/vue-markdown-docs.svg" alt="License"></a>
</p>

<h2 align="center">Vue MarkDown Docs</h2>

### Introducation

Build your docs website with Markdown file (*.md) quickly.

- Build with *.md file
- HTML support
- Vue Template support

#### What's the difference between MarkDown and MarkDown-Docs?

*MarkDown-Docs used [Vue MarkDown loader](https://github.com/QingWei-Li/vue-markdown-loader), every **.md** file will transform into Vue Component Template.That's why we support use HTML and Vue Template language tag in **.md** file.*

### Anchor

Default, `h1`, `h2`, `h3` will mount anchor automatic.

```
<h1>h1</h1>
# h1
### h3
```

To support `h4` and `h5`, you can open `src/core/utils.js`, modify `['h1', 'h2', 'h3'].map(...)` manually.

### Vue Template

##### route-name: {{ $route.name }}

```
##### route-name: {{ $route.name }}
```

<div v-for="word in $route.name">
    ##### {{ word }}
</div>

```
<div v-for="word in $route.name">
    ##### {{ word }}
</div>
```
