import styled from "styled-components";
import {Link} from "react-router-dom";

export const LinkButton = styled(Link)`
  background-color: #354860;
  border-radius: 10px;
  color: #ffffff;
  font-size: 24px;
  margin-top: 2vh;
  padding: 10px 36px;
  text-decoration: none;
  transition: opacity 1s ease;
  width: fit-content;

  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    font-size: 18px;
    margin-top: 5vw;
  }

  &:hover {
    opacity: .8;
  }
`;
