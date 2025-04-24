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

export function BusinessOwnerService() {
  return (
    <>
      <PageHeader $backgroundImage={"/assets/images/pagehead_businessowner.webp"} $title={"Business Owner Service"} />
      <Container>
        <Header>We work with lots of business owners and are familiar with the issues you maybe facing.</Header>
        <Header>You're likely to be –</Header>
        <ul>
          <ListItem><strong>Extremely busy running your business and looking for someone to simplify and make sense of your financial life.</strong></ListItem>
          <ListItem>Unsure how much money you should be putting away for your financial future versus the things that you want to do now.</ListItem>
          <ListItem>Wondering when you can stop work, slow down or at least know that work is optional.</ListItem>
        </ul>
        <Header>You're looking to –</Header>
        <ul>
          <ListItem>Create a financial plan to achieve financial independence from work. <strong>How much is enough?</strong></ListItem>
          <ListItem>Get to a ripe old age, look back and feel like you've given life a good go. No regrets!</ListItem>
          <ListItem>Establish a long-term relationship with a trusted adviser who will truly understand you and what you’re trying to achieve.</ListItem>
          <ListItem>Work out what the next stage of your life will look like. We've seen this lots of times and can help you through this potentially difficult transition</ListItem>
          <ListItem><strong>Work out how your business fits into your financial plan.</strong> If you're looking to sell, how much do you need to sell for and what are your options for exit and/or succession planning?</ListItem>
          <ListItem>Strike the right balance between spending now and spending later (including possible gifts to your children / grandchildren).</ListItem>
          <ListItem>Ensure that your loved ones would be ok if disaster strikes (death or incapacity).</ListItem>
          <ListItem>Minimise your tax bills along the way.</ListItem>
          <ListItem>Ensure that your assets are passed on to the next generation in the right way in the event of your death, keeping inheritance tax to a minimum.</ListItem>
        </ul>
        <Header>You have –</Header>
        <ul>
          <ListItem>A desire to plan for your financial future.</ListItem>
          <ListItem>A profitable business with surplus profits to invest.</ListItem>
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
