// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react'
import { addDecorator, configure } from '@storybook/react' // eslint-disable-line import/no-extraneous-dependencies

import ThemeProvider from '../src/components/ThemeProvider'

const req = require.context('../src', true, /\.story\.js$/)

addDecorator(storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
