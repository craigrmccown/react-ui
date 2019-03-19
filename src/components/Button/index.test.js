/* eslint-env browser */

import React from 'react'
import ReactDOM from 'react-dom'

import ThemeProvider from '../ThemeProvider'
import Button from '.'

test('it renders successfully', () => {
  const rootNode = document.createElement('div')

  ReactDOM.render(
    <ThemeProvider>
      <Button onClick={() => {}}>Hey!</Button>
    </ThemeProvider>,
    rootNode,
  )
  ReactDOM.unmountComponentAtNode(rootNode)
})
