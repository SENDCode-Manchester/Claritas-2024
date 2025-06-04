import styled from "styled-components";
import {useEffect, useState} from "react";
import emailjs from "@emailjs/browser";

const Container = styled.div`
  background-color: #354860;
  color: #ffffff;
  margin-top: 48px;
  padding: 16px;
`;

const Header = styled.h2`
  font-size: 32px;
  margin-bottom: 8px;
`;

const AccentRadio = styled.input`
  accent-color: #354860;
`;

const OptionContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 24px;
`;

const OptionLabel = styled.label`
  font-size: 17px;
  margin-left: 8px;
`;

const Text = styled.p`
  font-size: 17px;
  margin-bottom: 8px;
`;

const FormGrid = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 24px;
  row-gap: 16px;
  column-gap: 24px;

  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const GridFill = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: span 2 / span 2;

  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    grid-column: unset;
  }
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexEnd = styled.div`
  display: flex;
  justify-content: flex-end;
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

export function ContactForm() {
  const [option, setOption] = useState(0);
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  async function submitForm() {
    if (
      // @ts-expect-error no types
      !(formData.advice && formData.name && formData.email && formData.phone) ||
      // @ts-expect-error no types
      (option === 2 && !(formData.occupation && formData.age && formData.income && formData.assets)))
      return alert("All fields are required");

    await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, {
      ...formData,
      isExtendedOption: option === 2
    });
    setSubmitted(true);
  }

  useEffect(() => {
    emailjs.init({
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    });
  }, []);

  useEffect(() => {
    setFormData({});
  }, [option]);

  return (
    <Container>
      <Header>Contact</Header>
      {!submitted && (
        <OptionContainer>
          <div>
            <AccentRadio type={"radio"} id={"opt1"} name={"option"} onChange={() => setOption(1)}/>
            <OptionLabel htmlFor={"opt1"}>I am interested in the above and would like to arrange a no obligation, no cost introductory chat.</OptionLabel>
          </div>
          <div>
            <AccentRadio type={"radio"} id={"opt2"} name={"option"} onChange={() => setOption(2)}/>
            <OptionLabel htmlFor={"opt2"}>I am not sure whether the above is right for me but would like some guidance as to where I should go for my financial advice.</OptionLabel>
          </div>
        </OptionContainer>
      )}
      {(!submitted && option === 1) && (
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
      {(!submitted && option === 2) && (
        <>
          <Text>We know that Claritas Wealth will not be right for everybody and have therefore established relationships with other advice firms who may be a better fit for you.</Text>
          <Text>In order to work out which firm may be the best fit, please could you answer the following questions? They should only take a couple of minutes to answer.</Text>
          <FormGrid>
            <GridFill>
              <Label htmlFor={"advice"}>Briefly describe the advice you require</Label>
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
            <FormItem>
              <Label htmlFor={"occupation"}>Occupation(s)</Label>
              <CustomInput id={"occupation"} type={"text"} onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}/>
            </FormItem>
            <FormItem>
              <Label htmlFor={"age"}>Age(s)</Label>
              <CustomInput id={"age"} type={"text"} onChange={(e) => setFormData({ ...formData, age: e.target.value })}/>
            </FormItem>
            <FormItem>
              <Label htmlFor={"income"}>Household income</Label>
              <CustomInput id={"income"} type={"text"} onChange={(e) => setFormData({ ...formData, income: e.target.value })}/>
            </FormItem>
            <GridFill>
              <Label htmlFor={"assets"}>Investable assets (including workplace pensions)</Label>
              <CustomTextArea id={"assets"} rows={4} onChange={(e) => setFormData({ ...formData, assets: e.target.value })}></CustomTextArea>
            </GridFill>
          </FormGrid>
          <FlexEnd>
            <CustomButton onClick={() => submitForm()}>Submit</CustomButton>
          </FlexEnd>
        </>
      )}
      {submitted && (
        <>
          <Text>Your message has been submitted.</Text>
        </>
      )}
    </Container>
  );
}
