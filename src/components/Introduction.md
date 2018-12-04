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
- I18n support

⚠️Warning: DO NOT REFRESH THIS PAGE (Rewrite required, but Github not support)

#### What's the difference between MarkDown and MarkDown-Docs?

*MarkDown-Docs used [Vue MarkDown loader](https://github.com/chiaweilee/vue-markdown-docs), every **.md** file will transform into Vue Component Template.That's why we support use HTML and Vue Template language tag in **.md** file.*

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

*notice: Markdown render have priority over Vue template*

### I18n

*support `vue-i18n`, `vue-i18n-loader` and `vue-i18n-filter`*

```
{{ $t('hello') }}
```

{{ $t('hello') }}

#### filter

```
{{ 'hello' | t }}
```

{{ 'hello' | t }}

#### i18n tag

```
<i18n>
{
    "zh-cn": {
      "hello": "您好"
    },
    "en": {
      "hello": "hello"
    }
}
</i18n>
```
<i18n>
{
    "zh-cn": {
      "hello": "您好"
    },
    "en": {
      "hello": "hello"
    }
}
</i18n>

#### i18n locale

```vue.js
{{ 'hello' | t }}
<a @click="$i18n.locale = 'en'">en</a> |
<a @click="$i18n.locale = 'zh-cn'">zh-cn</a>
```

try click below link

{{ 'hello' | t }}
<a @click="$i18n.locale = 'en'">en</a> |
<a @click="$i18n.locale = 'zh-cn'">zh-cn</a>
