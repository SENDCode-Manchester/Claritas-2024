import styled, {css} from "styled-components";
import {TopNav} from "./nav/TopNav.tsx";

const Container = styled.div<{ $backgroundImage: string, $backgroundPosition?: string, $darken?: boolean }>`
  align-items: center;
  ${props => props.$darken && css`
    background-blend-mode: darken;
    background-color: #00000030;`}
  background-image: url("${props => props.$backgroundImage}");
  background-position: ${props => props.$backgroundPosition || "center center"};
  background-size: cover;
  display: flex;
  height: 50vh;
  justify-content: center;
`;

const PageTitle = styled.h1`
  color: #ffffff;
  font-size: 86px;
  font-weight: 950;
  line-height: 1;
  margin-top: 10vh;
  text-align: center;
  width: 60vw;

  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    font-size: 48px;
    width: 90vw;
  }
`;

export function PageHeader({ $backgroundImage, $backgroundPosition, $darken, $title } : { $backgroundImage: string, $backgroundPosition?: string, $darken?: boolean, $title: string }) {
  return (
    <Container $backgroundImage={$backgroundImage} $backgroundPosition={$backgroundPosition} $darken={$darken}>
      <TopNav />
      <PageTitle>{$title}</PageTitle>
    </Container>
  );
}
