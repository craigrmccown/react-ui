/* eslint-env browser */

import React from 'react'
import ReactDOM from 'react-dom'

import ThemeProvider from '../ThemeProvider'
import Hello from '.'

test('it renders successfully', () => {
  const rootNode = document.createElement('div')

  ReactDOM.render(
    <ThemeProvider>
      <Hello />
    </ThemeProvider>,
    rootNode,
  )
  ReactDOM.unmountComponentAtNode(rootNode)
})
