## Plugins

### BannerPlugin

```JavaScript
new webpack.BannerPlugin(banner);
// or
new webpack.BannerPlugin(options);
```

```JavaScript
{
  banner: string | function, // the banner as string or function, it will be wrapped in a comment
  raw: boolean, // if true, banner will not be wrapped in a comment
  entryOnly: boolean, // if true, the banner will only be added to the entry chunks
  test: string | RegExp | Array,
  include: string | RegExp | Array,
  exclude: string | RegExp | Array,
}
```

```JavaScript
// string
new webpack.BannerPlugin({
  banner: 'hello world'
});

// function
new webpack.BannerPlugin({
  banner: (yourVariable) => { return `yourVariable: ${yourVariable}`; }
});
```

### ContextReplacementPlugin

```JavaScript
new webpack.ContextReplacementPlugin(
  /moment[/\\]locale$/,
  /de|fr|hu/
);
```

### DefinePlugin

```JavaScript
new webpack.DefinePlugin({
    TWO: '1+1',
    'typeof window': JSON.stringify('object'),
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
})
```

### EnvironmentPlugin

```JavaScript
new webpack.EnvironmentPlugin(['NODE_ENV', 'DEBUG']);
```

equivalent to `DefinePlugin`

```JavaScript
new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  'process.env.DEBUG': JSON.stringify(process.env.DEBUG)
});
```

*Variables coming from process.env are always `strings`.*

### IgnorePlugin

```JavaScript
new webpack.IgnorePlugin(requestRegExp, [contextRegExp]);
```

```JavaScript
new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/);
```

*...which means "any require statement matching './locale' from any directories ending with 'moment' will be ignored.*

### ProvidePlugin

```JavaScript
new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery'
});
```

```JavaScript
new webpack.ProvidePlugin({
  _map: ['lodash', 'map']
});
```
