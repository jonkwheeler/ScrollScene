const tsconfig = require('./tsconfig.json')
const tsPaths = tsconfig.compilerOptions.paths

/*
Convert tsconfig path
{
  '@components/*': [ './src/components/*' ],
}

To babelrc aliases

{
  @components': './src/components',
}
*/

const webpackTsPaths = {}

Object.keys(tsPaths).forEach(function(key) {
  const newKey = key.replace('/*', '')

  // this only support single src aliases, not arrays of aliases
  // might need to upgrade later if it's really that necessary
  const value = tsPaths[key][0].replace('/*', '')

  webpackTsPaths[newKey] = value
})

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/typescript'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-transform-runtime',
    'babel-plugin-add-react-displayname',
    [
      'module-resolver',
      {
        root: ['.'],
        alias: webpackTsPaths,
      },
    ],
  ],
  comments: false,
  env: {
    commonjs: {
      presets: [
        [
          '@babel/preset-env',
          {
            useBuiltIns: false,
          },
        ],
      ],
    },
    esm: {
      presets: [['@babel/preset-env', { modules: false }]],
      plugins: ['dynamic-import-node', ['@babel/plugin-transform-runtime', { useESModules: true }]],
    },
  },
}
