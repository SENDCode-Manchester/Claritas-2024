import {ReactNode} from "react";
import styled from "styled-components";

const Box = styled.div`
  background-color: #354860;
  color: white;
  font-size: 28px;
  padding: 10vh 20vw;
  text-align: center;

  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    font-size: 18px;
    padding: 5vh 10vw;
  }
`;

export function FilledBox({ children, id } : { children: ReactNode, id?: string }) {
  return (
    <Box id={id}>{children}</Box>
  );
}
