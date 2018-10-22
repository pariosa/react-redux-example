import styled, { css } from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  font-size:1.2em;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  &:hover {
    background: palevioletred;
    color:white;
  }
  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

export default Button;