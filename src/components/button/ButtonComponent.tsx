import * as React from "react";
import styled from 'styled-components';


const ButtonComponent = styled.button`
  background: ${props => props.background};;
  color: white;
  border-radius: 4px;
  padding: 0.5rem;
  bottom: ${props => props.bottom};
  right: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  position: absolute;
  font-weight: 600;
  
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }
  
`;



export default ButtonComponent;