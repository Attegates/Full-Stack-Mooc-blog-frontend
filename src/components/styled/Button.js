import styled, { css } from 'styled-components'

const Button = styled.button`
  background: #FFFFFF;
  color: #F18D9E;
  border-radius: 2px;
  border: 2px solid #F18D9E
  text-align: center;
  height 30px;
  min-width: 60px;
  display: inline-block;

  ${props =>
    props.primary &&
    css`
      background: #F18D9E;
      color: #FFFFFF
      border: none
  `};
`

export default Button
