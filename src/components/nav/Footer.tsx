import styled, {css} from "styled-components";
import {Link, ScrollRestoration} from "react-router-dom";
import social_linkedin from "../../assets/icons/social_linkedin.svg";
import social_instagram from "../../assets/icons/social_instagram.svg";
import social_twitter from "../../assets/icons/social_twitter.svg";

const Container = styled.div<{ $bottom: boolean; }>`
  background-color: #354860;
  ${props => props.$bottom && css`
    bottom: 0;
    position: absolute;
    width: 100vw;`}
  display: flex;
  flex-direction: column;
`;

const LowerContainer = styled.div`
  align-items: center;
  border-top: solid 1px #4d6582;
  color: #ffffff;
  display: grid;
  font-size: 14px;
  gap: 2vw;
  font-weight: 350;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  padding: 1vh 2vw;
  
  & a {
    color: #ffffff;
    text-decoration: none;
  }

  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    font-size: 10px;
    padding: 1vh 4vw;
  }
`;

const NoticeBox = styled.div`
  align-items: center;
  color: #ffffff;
  display: flex;
  font-size: 14px;
  font-weight: 350;
  justify-content: space-between;
  
  & p {
    width: 50vw;
  }

  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    font-size: 10px;
    grid-column: span 3 / span 3;
    
    & p {
      width: 100%;
    }
  }
`;

const FooterLinks = styled.div`
  column-gap: 24px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 800px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    align-items: center;
    flex-direction: column;
    row-gap: 3px;
  }
`;

const Section = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 350;
  
  & h3 {
    font-size: 24px;
    text-transform: uppercase;
  }
  
  & a {
    color: #ffffff;
    text-decoration: none;
  }

  & img {
    height: 120px;
    object-fit: contain;
    width: 70px;
  }

  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    font-size: 12px;
    
    & h3 {
      font-size: 20px;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1vw;
  justify-content: flex-end;
  overflow: hidden;
  
  & a, a > img {
    height: 40px;
    width: 40px;
  }

  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    & a, a > img {
      height: 30px;
      width: 30px;
    }
  }
`;

const UpperContainer = styled.div`
  display: grid;
  gap: 2vw;
  grid-template-columns: 1fr repeat(3, auto);
  grid-template-rows: 1fr;
  padding: 2vh 2vw;

  @media screen and (max-width: 800px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(2, auto);
    padding: 2vh 4vw;
    row-gap: 2vh;
  }
`;

export function Footer({ $bottom }: { $bottom?: boolean }) {
  return (<>
    <ScrollRestoration />
    <Container $bottom={$bottom ? $bottom : false}>
      <UpperContainer>
        <NoticeBox>
          <p>Claritas Wealth is a trading name of Claritas Wealth Management Ltd which is authorised and regulated by the Financial Conduct Authority under reference number 734968. Registered in England, number 08935426. Registered office: 10 Moorside Road, Heaton Moor, Stockport, SK4 4DT.</p>
        </NoticeBox>
        <Section>
          <img alt="Financial Planners Chartered" draggable="false" src={"/assets/images/chartered.webp"}/>
        </Section>
        <Section>
          <h3>Pages</h3>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>Meet the Team</Link>
          <Link to={"/blog"}>Blog</Link>
          <Link to={"/contact"}>Contact</Link>
        </Section>
        <Section>
          <h3>Contact</h3>
          <p>10 Moorside Road,<br />Heaton Moor,<br />Stockport<br />SK4 4DT</p>
          <Link to={"tel:01616369200"}>0161 636 9200</Link>
          <Link to={"mailto:hello@claritaswm.co.uk"}>hello@claritaswm.co.uk</Link>
        </Section>
      </UpperContainer>
      <LowerContainer>
        <p>&copy; SENDCode MMXXV</p>
        <FooterLinks>
          <a href="/Privacy_Policy_2023.pdf" target="_blank">Privacy Policy</a>
          <a className="cky-banner-element" href="#">Cookie Settings</a>
        </FooterLinks>
        <SocialLinks>
          <a href="https://www.linkedin.com/company/claritas-wealth-management-ltd/" target={"_blank"}>
            <img alt="LinkedIn" draggable={false} src={social_linkedin} />
          </a>
          <a href="https://www.instagram.com/claritaswm/" target={"_blank"}>
            <img alt="Instagram" draggable={false} src={social_instagram} />
          </a>
          <a href="https://twitter.com/claritaswm" target={"_blank"}>
            <img alt="Twitter/X" draggable={false} src={social_twitter} />
          </a>
        </SocialLinks>
      </LowerContainer>
    </Container>
  </>);
}
