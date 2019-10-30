import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: #bbbbfc;
      color: white;
      border: 1px solid black;
      text-shadow: 0 1px 0 #ccc,
      0 .5px 0 #ccccff,
      0 .75px 0 #fff,
      0 1px 0 #ccccff,
      0 1.25px 0 #ccccff,
      0 3px .5px rgba(0,0,0,.025),
      0 0 2.5px rgba(0,0,0,.025),
      0 1px 1.5px rgba(0,0,0,.025),
      0 1px 2.5px rgba(0,0,0,.01),
      0 2.5px 5px rgba(0,0,0,.0275),
      0 5px 5px rgba(0,0,0,.05),
      0 10px 10px rgba(0,0,0,.0175);
      font-size: .85em;
    }
`;

const googleSignInStyles = css`
    background-color: #bbbbfc;
  color: white;

  &:hover {
      background-color: #414171;
    border: none;
  }
`;

const getButtonStyles = props => {
    if (props.isGoogleSignIn) {
        return googleSignInStyles;
    }

    return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: 40px;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonStyles}
`;