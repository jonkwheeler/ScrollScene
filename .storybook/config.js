import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

addDecorator(
  withKnobs({
    escapeHTML: false,
  }),
)

function loadStories() {
  const req = require.context('../src', true, /story.(js|jsx|ts|tsx)$|stories\/*.(js|jsx|ts|tsx)/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
