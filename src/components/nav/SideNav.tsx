import styled, {css} from "styled-components";
import {Dispatch, SetStateAction} from "react";
import {IconButton, IconLink} from "../IconButton.tsx";
import close from "../../assets/icons/close.svg";
import {Link} from "react-router-dom";
import social_linkedin from "../../assets/icons/social_linkedin.svg";
import social_instagram from "../../assets/icons/social_instagram.svg";
import social_twitter from "../../assets/icons/social_twitter.svg";

const Container = styled.div<{ $display: boolean, $open: boolean }>`
  background-color: #354860;
  box-shadow: 0 0 25px 0 #00000075;
  ${props => props.$display && css`
    display: flex;
    flex-direction: column;`}
  ${props => !props.$display && css`
    display: none;`}
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  ${props => !props.$open && css`
    transform: translateX(50vw);`}
  transition: transform .5s ease;
  width: 40vw;
  z-index: 999;

  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    ${props => !props.$open && css`
      transform: translateX(90vw);`}
    width: 90vw;
  }
`;

const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 2vh;
  padding-top: 2vh;
`;

const NavLink = styled(Link)`
  align-items: center;
  color: #ffffff;
  display: flex;
  flex-grow: 1;
  font-size: 42px;
  justify-content: flex-end;
  padding-right: 2vw;
  text-decoration: none;

  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    font-size: 32px;
    padding-right: 5vw;
  }
`;

const SocialList = styled.div`
  display: flex;
  gap: 5vh;
  justify-content: center;
  padding: 2vh 0;
`;

export function SideNav({ $display, $setDisplay, $open, $setOpen } : { $display: boolean, $setDisplay: Dispatch<SetStateAction<boolean>>, $open: boolean, $setOpen: Dispatch<SetStateAction<boolean>> }) {
  const closeMenu = function() {
    $setOpen(false);
    setTimeout(() => $setDisplay(false), 5e2);
  }

  return (
    <Container $display={$display} $open={$open}>
      <IconButton onClick={closeMenu}><img alt="Close menu" draggable={false} src={close} /></IconButton>
      <LinkList>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Meet the Team</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </LinkList>
      <SocialList>
        <IconLink href="https://www.linkedin.com/company/claritas-wealth-management-ltd/" target={"_blank"}>
          <img alt="LinkedIn" draggable={false} src={social_linkedin} />
        </IconLink>
        <IconLink href="https://www.instagram.com/claritaswm/" target={"_blank"}>
          <img alt="Instagram" draggable={false} src={social_instagram} />
        </IconLink>
        <IconLink href="https://twitter.com/claritaswm" target={"_blank"}>
          <img alt="Twitter/X" draggable={false} src={social_twitter} />
        </IconLink>
      </SocialList>
    </Container>
  );
}
