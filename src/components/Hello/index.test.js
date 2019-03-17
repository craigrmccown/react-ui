/* eslint-env browser */

import React from 'react'
import ReactDOM from 'react-dom'

import Hello from '.'

test('it renders successfully', () => {
  const rootNode = document.createElement('div')

  ReactDOM.render(<Hello />, rootNode)
  ReactDOM.unmountComponentAtNode(rootNode)
})
