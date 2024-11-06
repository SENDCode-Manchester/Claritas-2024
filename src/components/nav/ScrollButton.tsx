import scroll from "../../assets/icons/scroll.svg"
import styled from "styled-components";

const ScrollImage = styled.img`
  height: 5vh;
  width: 5vh;
`;

const ScrollLink = styled.a`
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  padding-bottom: 2vh;
  position: absolute;
  transition: opacity .5s ease;
  width: 100%;
  
  &:hover {
    opacity: .8;
  }
`;

export function ScrollButton() {
  return (
    <ScrollLink href="#content">
      <ScrollImage alt="Scroll to next section" draggable={false} src={scroll} />
    </ScrollLink>
  );
}
