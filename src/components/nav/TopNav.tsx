import claritas from "../../assets/claritas.svg";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {SideNav} from "./SideNav.tsx";
import {useState} from "react"
import burger from "../../assets/icons/burger.svg";
import {IconButton} from "../IconButton.tsx";

const ClaritasLogo = styled(Link)`
  height: 100%;
  
  & img {
    width: 20vh;
  }
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 3vh 20vw;
  position: absolute;
  top: 0;
  width: 100%;

  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    padding: 3vh 5vw;
  }
`;

export function TopNav() {
  const [display, setDisplay] = useState(false);
  const [open, setOpen] = useState(false);

  const openMenu = function() {
    setDisplay(true);
    setTimeout(() => setOpen(true), 5e1);
  }

  return (
    <Container>
      <ClaritasLogo to="/">
        <img alt="Claritas logo" draggable={false} src={claritas} />
      </ClaritasLogo>
      <IconButton onClick={openMenu}><img alt="Open menu" draggable={false} src={burger} /></IconButton>
      <SideNav $display={display} $setDisplay={setDisplay} $open={open} $setOpen={setOpen} />
    </Container>
  );
}
