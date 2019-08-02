import styled, { css } from 'styled-components'

const Button = styled.button`
  background: #f2fafa;
  color: #308aff;
  border-radius: 2px;
  border: 2px solid;
  width: 80px;
  height 30px;
  :hover {
    box-shadow: 0 0 6px #000000;
  }

  ${props =>
    props.primary &&
    css`
      background: #308aff;
      color: #f2fafa
    
  `};
`

export default Button
