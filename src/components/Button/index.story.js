import React, { useState } from 'react'
import { storiesOf } from '@storybook/react' // eslint-disable-line import/no-extraneous-dependencies

import Button from '.'

const CountedButton = props => {
  const [count, setCount] = useState(0)

  return (
    <Button
      {...props}
      message={`Clicked ${count} times`}
      onClick={() => setCount(prevCount => prevCount + 1)}
    />
  )
}

storiesOf('Button', module).add('default', () => <CountedButton />)

storiesOf('Button', module).add('primary', () => <CountedButton color="primary" />)

storiesOf('Button', module).add('danger', () => <CountedButton color="danger" />)
