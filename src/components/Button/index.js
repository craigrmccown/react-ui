import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  outline: none;
  color: white;
  background-color: ${({ theme: { colors }, color }) => colors[color]};
`

const Button = ({ children, color, onClick }) => (
  <StyledButton type="button" color={color} onClick={onClick}>
    {children}
  </StyledButton>
)

Button.defaultProps = {
  color: 'default',
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['default', 'primary', 'danger']),
  onClick: PropTypes.func.isRequired,
}

export default Button
