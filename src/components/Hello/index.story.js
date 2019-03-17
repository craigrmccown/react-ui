import React from 'react'
import { storiesOf } from '@storybook/react' // eslint-disable-line import/no-extraneous-dependencies

import Hello from '.'

storiesOf('Hello', module).add('default', () => <Hello />)
