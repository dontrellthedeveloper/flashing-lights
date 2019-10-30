import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

const OptionContainerStyles = css`
      padding: 10px 5px;
      cursor: pointer;
      color: white;
      font-family: 'Luckiest Guy', cursive;
      text-shadow: 0 1px 0 #414171,
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
      font-size: .9em;
      margin-right: 4px;
      margin-top: 2px;
`;

export const HeaderContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background: linear-gradient(to bottom left, #ffffff  0%, #bbbbfc 0%);
  padding-bottom: 20px;
  border-bottom: 1px solid black;
  transition: .2s;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 5px;
    position: absolute;
    margin-left: 15px;
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 45px;
    padding-top: 14px;
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;
