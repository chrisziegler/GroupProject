import styled, { css } from 'styled-components';

// Define our button, but with the use of props.theme this time
export const Button = styled.button`
  color: #2043ff;
  border: 1px solid #2043ff;
  background: white;
  width: 70
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  &:hover {
    background: #2043ff;
    color: white;

  ${props =>
    props.primary &&
    css`
      background: white;
      color: black;
      &:hover {
        background: gold;
    `}
`;
export const ButtonComplete = styled.button`
  color: #2043ff;
  background: white;
  cursor: pointer;
  border: 1px solid #2043ff;
  padding: 0 4px 0 4px;
  float: right;
  font-size: 1.2rem;
  margin-top: 5px;
  margin-bottom: -3px;
  &:hover {
    background: #2043ff;
    color: white;
  }

  ${props =>
    props.logged &&
    css`
      background: white;
      padding: 0 7px 0 7px;
      color: #FF4100;
      border: 1px solid #FF4100;
      &:hover {
        background: #FF4100;
        color: white
    `};
`;
