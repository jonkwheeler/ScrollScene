const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const tsconfig = require('../tsconfig.json')
const tsPaths = tsconfig.compilerOptions.paths

/*
Convert tsconfig path
{
  '@storybook-helpers/*': [ '../.storybook/helpers/*' ]
}

To webpack aliases

{
  '@components': path.resolve(__dirname, '../src/components')
}
*/

const webpackTsPaths = {}

Object.keys(tsPaths).forEach(function(key) {
  const newKey = key.replace('/*', '')
  const regex = /^.{0,2}/

  // this only support single src aliases, not arrays of aliases
  // might need to upgrade later if it's really that necessary
  const value = tsPaths[key][0]
  const returnedValue = (regex.test('./') ? value.replace(regex, '../') : value).replace('/*', '')

  webpackTsPaths[newKey] = path.resolve(__dirname, returnedValue)
})

const extensions = ['.ts', '.tsx', '.js', '.jsx', '.json']

module.exports = ({ config, mode }) => {
  // config
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: {
      loader: require.resolve('ts-loader'),
      options: {
        // disable checker as it's handled by the checker plugin in parallel
        transpileOnly: true,
      },
    },
  })

  // runs tslint and typechecks
  config.plugins.push(new ForkTsCheckerWebpackPlugin())

  // Uncomment this later. Causing build issues now.
  // config.plugins.push(new TSDocgenPlugin())

  // make storybook recognize ts and tsx files
  config.resolve.extensions.push(...extensions)

  // do not use TsconfigPathsPlugin, it will not resolve correctly when webpack has a different root from tsconfig, and baseUrl is bs
  // this shiz works 🎉
  config.resolve.alias = webpackTsPaths

  config.resolve.modules = ['node_modules', path.resolve(__dirname, '../src')]

  return config
}
