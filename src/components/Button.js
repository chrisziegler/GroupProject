import styled, { css } from 'styled-components';

// Define our button, but with the use of props.theme this time
export const Button = styled.button`
  color: #001272;
  border: 1px solid #001272;
  background: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  &:hover {
    background: #FF4100;
    color: white;

  ${props =>
    props.primary &&
    css`
      background: white;
      color: black;
      &:hover {
        background: gold;
      }
    `}
`;
