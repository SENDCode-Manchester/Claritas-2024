import {PageHeader} from "../components/PageHeader.tsx";
import {Footer} from "../components/nav/Footer.tsx";
import styled from "styled-components";
import contact_email from "../assets/icons/contact_email.svg";
import contact_phone from "../assets/icons/contact_phone.svg";

const Box = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  margin: 100px 25vw;

  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    margin: 100px 6vw;
  }
`;

const Flexbox = styled.div`
  display: flex;
  gap: 10vw;
  justify-content: center;
  margin-top: 100px;

  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    flex-direction: column;
  }
`;

const Header = styled.h1`
  font-size: 24px;
  text-align: center;
`;

const Link = styled.a`
  color: #6e6e6e;
  font-size: 14px;
  text-decoration: none;
`;

export function Contact() {
  return (
    <>
      <PageHeader $backgroundImage={"/assets/images/pagehead_contact.webp"} $backgroundPosition={"50% 60%"} $title={"Contact"} />
      <Container>
        <Header>If you are interested in finding out how Claritas can help you achieve your financial and lifestyle goals, please contact us.</Header>
        <Flexbox>
          <Box>
            <img alt={"Send us an E-mail"} src={contact_email} />
            <Header>Send us an E-mail</Header>
            <Link href={"mailto:hello@claritaswm.co.uk"}>hello@claritaswm.co.uk</Link>
          </Box>
          <Box>
            <img alt={"Give us a call"} src={contact_phone} />
            <Header>Give us a call</Header>
            <Link href={"tel:01616369200"}>0161 636 9200</Link>
          </Box>
        </Flexbox>
      </Container>
      <Footer />
    </>
  );
}
