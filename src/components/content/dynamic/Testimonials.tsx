import {useState} from "react";
import styled, {css} from "styled-components";
import play from "../../../assets/icons/play.svg";

type Testimonial = {
  name: string;
  quote: string[];
}

const Button = styled.button<{ $reverse: boolean }>`
  background-color: transparent;
  background-image: url(${play});
  background-size: cover;
  border: 0;
  cursor: pointer;
  height: 2vh;
  margin: 0 20px;
  padding: 0;
  ${props => props.$reverse && css`
    transform: scaleX(-1);`}
  width: 2vh;
`;

const ClientButton = styled.button<{ $active: boolean }>`
  background-color: #ffffff;
  ${props => props.$active && css`
    background-color: #6e6e6e;`}
  border: solid 1px #6e6e6e;
  border-radius: 9999px;
  cursor: pointer;
  height: 1.2vh;
  margin: 0 5px;
  padding: 0;
  transition: background-color .5s;
  width: 1.2vh;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 3vh;
  height: 100vh;
  padding: 5vh 20vw 10vh;

  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    gap: 1vh;
    padding: 20px 5vh;
  }
`;

const Group = styled.div`
  text-align: center;
`;

const Navigation = styled.div`
  align-items: center;
  display: flex;
`;

const Person = styled.div`
  align-items: center;
  display: flex;
  gap: 12px;
  justify-content: center;
  
  & img {
    border-radius: 9999px;
    height: 7.5vh;
    object-fit: cover;
    width: 7.5vh;
  }
  
  & p {
    color: #33363a;
    font-size: 18px;
    font-weight: 300;
  }
`;

const SectionHeading = styled.p`
  font-size: 42px;
  font-weight: 950;

  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    font-size: 24px;
  }
`;

const SectionSub = styled.p`
  font-size: 18px;
  font-weight: 350;

  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    font-size: 14px;
  }
`;

const Testimonial = styled.div<{ $visible: boolean }>`
  opacity: 0;
  ${props => props.$visible && css`
    opacity: 1;`}
  flex-grow: 1;
  padding: 24px;
  transition: opacity .1s ease;
  
  & > p {
    color: #33363a;
    font-size: 18px;
    font-weight: 300;
    padding-top: 16px;
    text-align: center;
    width: 60vw;
  }

  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    padding: 12px 24px;
    
    & > p {
      font-size: 14px;
      padding-top: 8px;
      width: 90vw;
    }
  }
`;

export function Testimonials({ $items } : { $items: Testimonial[] }) {
  const [client, setClient] = useState(0);
  const [visible, setVisible] = useState(true);

  const clientBack = function() {
    setVisible(false);
    setTimeout(function() {
      if (client < 1) {
        setClient($items.length - 1);
      } else {
        setClient(client - 1);
      }
      setTimeout(() => setVisible(true), 25e1);
    }, 25e1);
  }

  const clientFwd = function() {
    setVisible(false);
    setTimeout(function() {
      if (client > ($items.length - 2)) {
        setClient(0);
      } else {
        setClient(client + 1);
      }
      setTimeout(() => setVisible(true), 25e1);
    }, 25e1);
  }

  const clientTo = function(key: number) {
    setVisible(false);
    setTimeout(function() {
      setClient(key);
      setTimeout(() => setVisible(true), 25e1);
    }, 25e1);
  }

  return (
    <Container>
      <Group>
        <SectionHeading>Don't just listen to us.</SectionHeading>
        <SectionSub>See a few words from our clients.</SectionSub>
      </Group>
      <Testimonial $visible={visible}>
        <Person>
          <img alt={"Picture of " + $items[client].name} src={"/assets/images/client_" + $items[client].name.replace(/ /g, "").replace(/&/g, "-").toLocaleLowerCase() + ".webp"} />
          <p>{$items[client].name}</p>
        </Person>
        {$items[client].quote.map(function(item, key) {
          return (<p key={key}>{item}</p>);
        })}
      </Testimonial>
      <Navigation>
        <Button $reverse={true} onClick={clientBack}></Button>
        {$items.map(function(_, key) {
          return (<ClientButton $active={client === key} key={key} onClick={() => clientTo(key)}></ClientButton>);
        })}
        <Button $reverse={false} onClick={clientFwd}></Button>
      </Navigation>
    </Container>
  );
}
