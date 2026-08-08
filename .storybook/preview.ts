import type { Preview } from '@storybook/react-vite'
import 'normalize.css/normalize.css'
// Stories import ScrollScene directly; load the plugin so Scene.addIndicators exists.
import '../src/plugins/debug.addIndicators'

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
