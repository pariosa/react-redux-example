import styled, { css, keyframes } from 'styled-components';

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  font-size:2em;
  animation: ${rotate} 3s linear infinite; 
`;

export default Rotate;