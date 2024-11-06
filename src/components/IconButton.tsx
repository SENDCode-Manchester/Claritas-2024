import styled from "styled-components";

export const IconButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: flex;
  height: 5vh;
  justify-content: center;
  padding: 0;
  width: 5vh;
  
  & img {
    height: 100%;
    width: 100%;
  }
`;

export const IconLink = styled.a`
  align-items: center;
  display: flex;
  height: 5vh;
  justify-content: center;
  width: 5vh;
  
  & img {
    height: 100%;
    width: 100%;
  }
`;
