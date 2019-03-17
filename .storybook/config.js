// eslint-disable-next-line import/no-extraneous-dependencies
import { configure } from '@storybook/react'

const req = require.context('../src', true, /\.story\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
