import styled from "styled-components";
import {ReactNode} from "react";

const Container = styled.div`
  background-color: #354860;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const ScrollContent = styled.div`
  align-items: center;
  background-image: url("/assets/images/scroll_background.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 32px;
  mask-image: linear-gradient(transparent, black, black);
`;

export function ScrollBox({ children } : { children: ReactNode }) {
  return (
    <Container>{children}</Container>
  );
}
