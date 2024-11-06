import styled, {css} from "styled-components";
import {ReactNode} from "react";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  
  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const GridImage = styled.img`
  height: 50vh;
  object-fit: cover;
  width: 100%;

  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    width: 100%;
  }
`;

export const GridText = styled.p<{ $primary: boolean }>`
  align-items: center;
  color: #916646;
  ${props => props.$primary && css`
    background-color: #354860;
    color: #ffffff;`}
  display: flex;
  font-size: 24px;
  font-weight: 350;
  justify-content: center;
  padding: 0 5vw;

  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    font-size: 14px;
  }
`;

export function GridBox({ children } : { children: ReactNode }) {
  return (
    <Grid>{children}</Grid>
  );
}
