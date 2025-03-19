import {PageHeader} from "../../components/PageHeader.tsx";
import {Footer} from "../../components/nav/Footer.tsx";
import styled from "styled-components";

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

export function ThirdActService() {
  return (
    <>
      <PageHeader $backgroundImage={"/assets/images/pagehead_thirdact.webp"} $title={"The 'Third Act' Service"} $darken={true} />
      <Container>
        <Header>We work with lots of people that have entered the 'third act' of life and have either retired or achieved financial independence from work. We're familiar with the issues you maybe facing.</Header>
        <Header>You're likely to be –</Header>
        <ul>
          <ListItem>Unsure how much you can spend in the earlier years without jeopardising your financial future.</ListItem>
          <ListItem><strong>Looking to have a fulfilling and wonderful 'third act' of your life.</strong></ListItem>
          <ListItem>Unsure to what degree you can afford to financially help your children or grandchildren.</ListItem>
          <ListItem>Unsure about the degree of risk you should be taking with your investments at this stage of your life.</ListItem>
          <ListItem>Concerned about the potential cost of long term care.</ListItem>
        </ul>
        <Header>You're looking to –</Header>
        <ul>
          <ListItem><strong>Establish a long-term relationship with a trusted adviser who will truly understand you and what you're trying to achieve.</strong></ListItem>
          <ListItem>Strike the right balance between spending now and spending later (including possible gifts to children / grandchildren).</ListItem>
          <ListItem>Get to a ripe old age, look back and feel like you've given life a good go! Life's not a rehearsal and time passes quickly.</ListItem>
          <ListItem><strong>Ensure that you outlive your money rather than the other way around!</strong></ListItem>
          <ListItem>Have your investments/pensions managed by a trusted adviser with a long and successful track record.</ListItem>
          <ListItem>Establish a sensible withdrawal strategy from pensions, investments and other assets. Which assets should be spent first? This can be hugely complicated but we'll make it simple.</ListItem>
          <ListItem>Ensure that you've considered the potential cost of long term care.</ListItem>
          <ListItem>Ensure that your assets are passed on to the next generation in the right way in the event of your death (keeping inheritance tax to a minimum)</ListItem>
        </ul>
        <Header>You have –</Header>
        <ul>
          <ListItem>A desire to plan for your own and your wider family's financial future.</ListItem>
          <ListItem>Investable assets in excess of £750k (if likely to make withdrawals) or in excess of £500k (if not planning to make withdrawals).
            <ul>
              <ListItem>This isn't an exact science though. If you are in the ball-park it is still worth getting in touch as we will take your overall circumstances into account.</ListItem>
            </ul>
          </ListItem>
        </ul>
        <Header>How we want you to feel –</Header>
        <ul>
          <ListItem><strong>Reassured</strong> that you have a trusted adviser who is interested in you and not just your money.</ListItem>
          <ListItem><strong>Secure</strong> that you have a financial plan to do the things that you want to do.</ListItem>
          <ListItem><strong>Free to get on with your life</strong> because you have the <strong>peace of mind</strong> of knowing that financial matters are taken care of.</ListItem>
        </ul>
      </Container>
      <Footer />
    </>
  );
}
