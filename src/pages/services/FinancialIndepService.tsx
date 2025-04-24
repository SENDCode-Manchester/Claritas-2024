import {PageHeader} from "../../components/PageHeader.tsx";
import {Footer} from "../../components/nav/Footer.tsx";
import styled from "styled-components";
import {ContactForm} from "./ContactForm.tsx";

const Container = styled.div`
    margin: 50px 20vw;

    @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
        margin: 48px 10vw;
    }
`;

const Header = styled.h1`
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 16px;
    margin-top: 24px;
`;

const ListItem = styled.li`
    font-size: 17px;
    margin: 12px 0;

    @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
        font-size: unset;
    }
`;

export function FinancialIndepService() {
  return (
    <>
      <PageHeader $backgroundImage={"/assets/images/pagehead_financialindep.webp"} $title={"Financial Independence Service"} />
      <Container>
        <Header>We work with lots of people in the run-up to retirement / financial independence and are familiar with the issues you maybe facing.</Header>
        <Header>You're likely to be –</Header>
        <ul>
          <ListItem>Wanting to <strong>achieve financial independence from work within the next 10 years.</strong></ListItem>
          <ListItem>Unsure how much money you should be putting away for your financial future versus the things that you want to do now.</ListItem>
          <ListItem><strong>Wondering when you can stop work, slow down or at least know that work is optional.</strong></ListItem>
          <ListItem>Too busy living your life to be able to wade through the details of your financial planning yourself.</ListItem>
        </ul>
        <Header>You're looking to –</Header>
        <ul>
          <ListItem>Create a financial plan to achieve financial independence from work. <strong>How much is enough?</strong></ListItem>
          <ListItem>Establish a long-term relationship with a trusted adviser who will truly understand you and what you’re trying to achieve.</ListItem>
          <ListItem>Work out what the next stage of your life will look like. We've seen this lots of times and can help you through this potentially difficult transition.</ListItem>
          <ListItem>Work out <strong>how much is enough?</strong> You could already have enough and therefore be able to make changes to your life that you didn't think were possible.</ListItem>
          <ListItem><strong>Strike the right balance between spending now and spending later.</strong> You only get one chance to make the most of your younger and hopefully healthier years. We want you to get to a ripe old age, look back and feel like you've given life a good go!</ListItem>
          <ListItem><strong>Ensure that you outlive your money rather than the other way around!</strong></ListItem>
          <ListItem>Ensure that your loved ones would be ok if disaster strikes (death or incapacity).</ListItem>
          <ListItem>Work out the degree to which you can afford to financially help your children.</ListItem>
          <ListItem>Minimise your tax bills along the way.</ListItem>
          <ListItem>Ensure that your assets are passed on to the next generation in the right way in the event of your death, keeping inheritance tax to a minimum.</ListItem>
        </ul>
        <Header>You have –</Header>
        <ul>
          <ListItem>A desire to plan for your own and your wider family's financial future.</ListItem>
          <ListItem>Investable assets (including workplace pensions)
            <ul>
              <ListItem>&gt; £250k (in your 40s).</ListItem>
              <ListItem>&gt; circa £400k (in your 50s).</ListItem>
              <ListItem>&gt; £500k (within 5 years of requiring financial independence).
                <ul>
                  <ListItem>It’s not an exact science though. If you have scope to investment significant amounts of money in the future then the above limits are flexible. Let’s have a chat.</ListItem>
                </ul>
              </ListItem>
            </ul>
          </ListItem>
        </ul>
        <Header>How we want you to feel –</Header>
        <ul>
          <ListItem><strong>Reassured</strong> that you have a trusted adviser who is interested in you and not just your money.</ListItem>
          <ListItem><strong>Secure</strong> that you have a financial plan to do the things that you want to do.</ListItem>
          <ListItem><strong>Free to get on with your life</strong> because you have the <strong>peace of mind</strong> of knowing that financial matters are taken care of.</ListItem>
        </ul>
        <ContactForm />
      </Container>
      <Footer />
    </>
  );
}
