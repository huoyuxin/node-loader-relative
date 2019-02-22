# Node Loader For Relative Path

Package for loading native files in Node and Electron applications. The project is inspired by the [native-ext-loader](https://github.com/smt116/node-native-ext-loader). It works in the similar way but **allows to build relative path at runtime**.

## Installation

Add the package to the development dependencies:

```bash
# using npm:
$ npm install node-loader-ralative --save-dev

# using yarn:
$ yarn add --dev node-loader-ralative
```

## Usage

Update rules entry in the Webpack configuration file:
(same as node-loader)

```js
module: {
  rules: [
    {
      test: /\.node$/,
      loader: "node-loader-ralative"
    }
  ];
}
```

## Options

Options are configurable using `options` hash:

```js
module: {
  rules: [
    {
      test: /\.node$/,
      loader: "node-loader-ralative",
      options: {
        basePath: __dirname
      }
    }
  ];
}
```

### `basePath` (default: `undefined`)

It allows to set a path that will be the basic webpack config path to load native files.

Note that, when `undefined`, there is no different with node-loader; when path setted(usually it is `__dirname`, also the webpack config path), this package will calculate out the relative path from the param path, by path.relative in node native module and load correctly.

If any error is cached, you could log filePath manually to check it.

## Releasing a new version

1.  Bump version number in the `package.json` and `CHANGELOG.md` files.
1.  Run `npm install` to update `package-lock.json` file.
1.  Commit changes (include changes)
1.  Add a new tag (use `-a` and include changes)
1.  Push commits and tag
1.  Run `npm publish`
