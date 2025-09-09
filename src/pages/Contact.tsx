import {PageHeader} from "../components/PageHeader.tsx";
import {Footer} from "../components/nav/Footer.tsx";
import {useEffect, useState} from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
// import contact_email from "../assets/icons/contact_email.svg
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

const FormGrid = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 32px;
  row-gap: 16px;
  column-gap: 24px;
  padding: 0 32px;

  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 32px;
`;

const GridFill = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: span 2 / span 2;

  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    grid-column: unset;
  }
`;

const Label = styled.label`
  font-size: 15px;
  margin-bottom: 4px;
`;

const CustomTextArea = styled.textarea`
  border: solid 1px black;
  font-family: inherit;
  font-size: 15px;
  resize: none;
  padding: 8px;
`;

const CustomInput = styled.input`
  border: solid 1px black;
  font-family: inherit;
  font-size: 15px;
  padding: 8px;
`;

const CustomButton = styled.button`
  background-color: #354860;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  cursor: pointer;
  font-family: inherit;
  font-size: 17px;
  margin-top: 2vh;
  outline: solid 2px #ffffff;
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

const Text = styled.p`
  font-size: 20px;
  text-align: center;
  margin-top: 32px;
`;

export function Contact() {
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  
  async function submitForm() {
    // @ts-expect-error no types
    if (!(formData.advice && formData.name && formData.email && formData.phone))
      return alert("All fields are required");
  
    await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, {
      ...formData,
      isExtendedOption: false
    });
    setSubmitted(true);
  }
  
  useEffect(() => {
    emailjs.init({
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    });
  }, []);

  return (
    <>
      <PageHeader $backgroundImage={"/assets/images/pagehead_contact.webp"} $backgroundPosition={"50% 60%"} $title={"Contact"} />
      <Container>
        <Header>If you're interested in finding out how Claritas Wealth can help you, please complete the form below and we'll be in touch. We'd love to hear from you.</Header>
        {!submitted && (
          <>
            <FormGrid>
              <GridFill>
                <Label htmlFor={"advice"}>Basic details of your enquiry</Label>
                <CustomTextArea id={"advice"} rows={4} onChange={(e) => setFormData({ ...formData, advice: e.target.value })}></CustomTextArea>
              </GridFill>
              <FormItem>
                <Label htmlFor={"name"}>Name</Label>
                <CustomInput autoComplete={"name"} id={"name"} type={"text"} onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
              </FormItem>
              <FormItem>
                <Label htmlFor={"email"}>Email address</Label>
                <CustomInput autoComplete={"email"} id={"email"} type={"email"} onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
              </FormItem>
              <FormItem>
                <Label htmlFor={"phone"}>Mobile number</Label>
                <CustomInput autoComplete={"mobile"} id={"phone"} type={"tel"} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}/>
              </FormItem>
            </FormGrid>
            <FlexEnd>
              <CustomButton onClick={() => submitForm()}>Submit</CustomButton>
            </FlexEnd>
          </>
        )}
        {submitted && (
          <Text>Your message has been submitted.</Text>
        )}
        <Flexbox>
          {/* <Box>
            <img alt={"Send us an E-mail"} src={contact_email} />
            <Header>Send us an E-mail</Header>
            <Link href={"mailto:hello@claritaswm.co.uk"}>hello@claritaswm.co.uk</Link>
          </Box> */}
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
