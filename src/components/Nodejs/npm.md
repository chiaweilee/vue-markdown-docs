## npm

### run-script

`npm run-script <command> [--silent] [-- <args>...]`

#### custom arguments

*special option `--` is used by `getopt`, npm will pass all arguments after `--` directly to script.
the arguments will only be passed to the script specified after `npm run` and not to any `pre` or `post` script.*

#### .bin

*the shell's pre-existing `PATH`, `npm run` add `node_modules/.bin` to the `PATH` provided to scripts. Any binaries provided by locally-installed dependencies can be used without `node_modules/.bin` prefix.*

#### & &&

`"dev": "node test.js & webpack"`

*run async*

`"dev": "node test.js && webpack"`

*run sync*

#### pre & post

```json
"predev": "node 1.js"
"dev": "node 2.js"
"postdev": "node 3.js"
```

*equal to `npm run predev && npm run dev && npm run postdev`*

#### lifecycle event

`process.env.npm_lifecycle_event`

```JavaScript
switch (process.env.npm_lifecycle_event) {
    case 'predev':
    case 'dev':
    case 'postdev'
}
```

#### npm package

`process.env.npm_package_name`
