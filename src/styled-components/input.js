import styled, { css } from 'styled-components';
import { Component } from "react";

const Input = styled.input.attrs({
  // we can define static props
  //type: "password",

  // or we can define dynamic ones
  margin: props => props.size || "1em",
  padding: props => props.size || "1em"
})`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  padding:5px;
  /* here we use the dynamically computed props */
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`;

 

export default Input;