import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import theme from '../../services/theme'

const ThemeProvider = props => <StyledThemeProvider {...props} theme={theme} />

export default ThemeProvider
