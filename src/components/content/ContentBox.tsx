import styled from "styled-components";
import {ReactNode} from "react";

const Container = styled.div`
  align-items: center;
  color: #33363a;
  display: flex;
  flex-direction: column;
  font-size: 24px;
  font-weight: 350;
  gap: 3vh;
  height: 50vh;
  justify-content: center;
  padding: 10vh 20vw;
  text-align: center;

  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    font-size: 18px;
    padding: 5vh 10vw;
  }
`;

export function ContentBox({ children } : { children: ReactNode }) {
  return (
    <Container>{children}</Container>
  );
}
