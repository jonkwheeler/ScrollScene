import type { StorybookConfig } from '@storybook/react-vite'
import path from 'path'
import { fileURLToPath } from 'url'

const dirname = path.dirname(fileURLToPath(import.meta.url))

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: [{ from: './media', to: '/media' }],
  async viteFinal(config) {
    // Storybook already copies staticDirs; avoid Vite writing into the same outDir.
    config.publicDir = false
    config.resolve = config.resolve || {}
    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      '@src': path.resolve(dirname, '../src'),
    })
    config.optimizeDeps = config.optimizeDeps || {}
    config.optimizeDeps.include = Array.from(
      new Set([...(config.optimizeDeps.include || []), 'scrollmagic', 'is-client']),
    )
    return config
  },
}

export default config
