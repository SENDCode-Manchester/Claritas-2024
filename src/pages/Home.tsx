import {HomeSplash} from "../components/HomeSplash.tsx";
import styled from "styled-components";
import {TopNav} from "../components/nav/TopNav.tsx";
import {ScrollButton} from "../components/nav/ScrollButton.tsx";
import {FilledBox} from "../components/content/FilledBox.tsx";
import {GridBox, GridImage, GridText} from "../components/content/GridBox.tsx";
import {ScrollBox, ScrollContent} from "../components/content/ScrollBox.tsx";
import {Carousel} from "../components/content/dynamic/Carousel.tsx";
import {Testimonials} from "../components/content/dynamic/Testimonials.tsx";
import {ContentBox} from "../components/content/ContentBox.tsx";
import {Footer} from "../components/nav/Footer.tsx";
import {LinkButton} from "../components/LinkButton.tsx";

const Content = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 0 20vw;
  pointer-events: none;
  position: absolute;
  width: 100%;
  
  & * {
    pointer-events: all;
  }
  
  & h1 {
    font-size: 86px;
    font-weight: 900;
    line-height: 1;
  }
  
  & p {
    font-size: 24px;
    font-weight: 350;
    margin-top: 2vh;
  }
  
  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    padding: 0 5vw;
    
    & h1 {
      font-size: 48px;
    }
    
    & p {
      font-size: 18px;
    }
  }
`;

const SplashSection = styled.div`
  height: 100vh;
  width: 100%;
`;

export function Home() {
  return (
    <>
      <SplashSection>
        <HomeSplash />
        <TopNav />
        <Content>
          <h1>Live today.<br />Plan for tomorrow.</h1>
          <p>Life's not a rehearsal and time passes quickly.<br />We want you to reach a ripe old age, look back and have no regrets.</p>
          <LinkButton to="/contact">Contact Us</LinkButton>
        </Content>
        <ScrollButton />
      </SplashSection>
      <FilledBox id={"content"}>
        <p>Money in itself is pretty dull.<br />It's what you do with it that matters.</p>
      </FilledBox>
      <GridBox>
        <GridText $primary={false}>What have you always wanted to do? What will you regret not having done?<br />Everyone is different. We'll listen to you (and we mean really listen).</GridText>
        <GridImage alt="" draggable={false} src="/assets/images/grid_background1.webp" />
      </GridBox>
      <GridBox>
        <GridImage alt="" draggable={false} src="/assets/images/grid_background2.webp" />
        <GridText $primary={false}>Together we'll discuss and clarify what you want to do with the rest of your life and create a clear, elegantly simple plan for you to do the things that are important to you.</GridText>
      </GridBox>
      <ScrollBox>
        <FilledBox>
          <p>Your hopes, worries and fears will be completely personal to you but here's some examples of the kinds of things that might be on your mind.</p>
        </FilledBox>
        <ScrollContent>
          <Carousel $items={[
            "How can I minimise inheritance tax?",
            "How would long term care costs affect me?",
            "How can I plan for long term care costs?",
            "When can I afford to retire?",
            "How much money is enough to retire?",
            "How much can I afford to spend in the early years of retirement?",
            "How do I strike the balance between living for today and looking after tomorrow?",
            "How much can I afford to gift to my children or grandchildren without affecting my own lifestyle?",
            "Would my dependants be ok in the event of my death?",
            "How should I pass my estate on to the next generation?"
          ]}></Carousel>
          <LinkButton to="/contact">Get in touch for a chat</LinkButton>
        </ScrollContent>
      </ScrollBox>
      <Testimonials $items={[
        // Images are loaded based on the names, for example:
        // Jack & Lindsey will load client_jack-lindsey.jpg
        // from the /public/assets/images/ folder.
        {
          name: "Jack & Lindsey",
          quote: [
            "I was introduced to Tim Walsham by a colleague in 2014 when I was investigating my options for early retirement. A major concern was whether my wife and I could maintain the lifestyle in retirement that we had enjoyed while I was working. Our financial affairs at that time were quite complicated, but with Tim’s expert help we developed a financial plan that allowed me to retire later that year.",
            "Meeting Tim was definitely a life changing event for us. The biannual checkpoint meetings reinforce our confidence and give us an opportunity to adjust our plan based on changing world, market and personal circumstances. Many years later we can honestly say that thanks to a robust financial plan and Tim’s ongoing involvement we have been able to maintain our lifestyle without worrying that we might be depleting our resources too quickly. Life is good!",
            "We particularly like that they are a small firm so we always see/talk with the same people and their fee structure is very transparent. Everyone in the Claritas team treats us as individuals and we really do feel like valued clients and not ‘just another customer’. Claritas takes care of our financial worries leaving us free to enjoy our retirement and we have no hesitation in recommending them."
          ]
        },
        {
          name: "Paul",
          quote: [
            "I have been working with Claritas since their inception and with Tim for many years before that, in that time they have earned my complete trust by providing a consistent and highly valuable service. Their investment strategies are well thought out and thoroughly researched resulting in consistent above market returns. Their approach is very open and every aspect of the advice is considered and explained. I get advice on all aspects of my financial dealings, not just the ones that they are directly involved with which over time has added significant value to their already excellent service. They have, on occasion, even advised with financial issues for my close relatives!",
            "The overall service outside of the advice is equally excellent, everything is done very efficiently and they will use appropriate technology to make aspects of working with them easier. My particular favourite is the use of video 'talk overs' when they need to explain a change or a new investment. These are emailed to me so I can watch at my convenience, ask any questions and make a decision. That said, they are the most friendly and personable people to work with and very easy to get hold of if I simply need to discuss something.",
            "All in all, I highly recommend Claritas as far and away the best IFA I have worked with."
          ]
        },
        {
          name: "Tom & Emma",
          quote: [
            "We have been delighted in how useful our discussions with Krish and the team at Claritas have been for us. Given we still have a long way to run in our careers before retirement, we did wonder whether wealth management advice was going to be for us, but we were keen to explore whether or not we were doing the right things in terms of planning for the future.",
            "We were put at ease very quickly and have enjoyed the open dialogue with the Claritas team. They have been very helpful in navigating our employee benefits packages and providing advice how we can optimise our choices now to help with options over the next 20+ years.",
            "The financial modelling exercise and advice provided by the team has brought to life our overall financial position both now and in the future, which in turn has given us the confidence to make spending and investment decisions so that we can enjoy the benefit of our hard work with our family. We would highly recommend a consultation with Claritas."
          ]
        },
        {
          name: "Graham & Michele",
          quote: [
            "We were recommended Claritas by a friend who had worked with them for a number of years. We are so glad we took that recommendation. We get informative and impactful advice, specifically tailored to our needs and wishes, the advice is also delivered in a clear, concise, and friendly way.",
            "It is genuinely comforting to think we have people we trust managing our finances, whilst still maintaining a level of control that allows us to carry on the lifestyle that we want.",
            "We cannot recommend Krish and the team at Claritas highly enough and only wish we had started using them sooner."
          ]
        },
        {
          name: "John",
          quote: [
            "I’m absolutely delighted with the service Claritas provides me.",
            "They have given clear advice and recommendations to ensure my current finances are optimised.",
            "I am very happy I am in safe hands and that my retirement plans are being actively managed. It’s a huge weight off my mind to have Claritas help plan my future."
          ]
        },
        {
          name: "Peter & Susan",
          quote: [
            "We have been with Claritas since the beginning; Tim and the team have always made us feel comfortable and relaxed in our future plans.",
            "Planning for the future plus the unexpected could be seen as daunting however, with Tim and the team at our side we always feel we are ready for whatever happens. There is never any pressure to do anything we don’t feel comfortable with, and they have helped us set up for the future financially and with peace of mind. Tim always explains the options open to us, and covers many of the activities we wouldn’t have thought about.",
            "The communications we receive and the access to online real time data via their website and app make us feel happy and secure with progress both financially and with our lifestyle decisions we make.",
            "I see Claritas as our safety net, not just from a wealth management perspective, but also for our future life milestones."
          ]
        },
        {
          name: "Hazel",
          quote: [
            "Tim has been my financial advisor for about 15 years.",
            "I have had financial advisers previously but as soon as I met Tim I realised that he operates in an entirely different way. He took the time to understand my attitude towards money, saving and risk. He listened and explained about financial issues that seemed opaque to me in a patient manner. This style of advice has continued over the years.",
            "I have complete trust in him and in his advice which brings me peace of mind."
          ]
        },
        {
          name: "Kevin & Lorraine",
          quote: [
            "Claritas have been a great help to us while we have been navigating our early retirement.",
            "We have had excellent advice on pensions and have been guided through some difficult decisions.",
            "We now have more organised finances and a clearer plan for our future."
          ]
        },
        {
          name: "Reg & Linda",
          quote: [
            "We first met Tim with our existing financial adviser (who was retiring) who introduced us and recommended Tim to take on our portfolio. We immediately felt that Tim was a complete professional and when he told us he was forming his own Company and would we like to join him, we said yes with confidence. Since then Tim and all the team at Claritas have been dedicated to our financial needs and support.",
            "Despite the turbulence in the markets Tim has offered a steady and knowledgeable service. Both of us have always been nervous about the risk we undertake in our investments, with Tim and his Team we feel confident our investments are managed properly and they have earned our trust."
          ]
        },
        {
          name: "Ken & Jane",
          quote: [
            "We have been clients of Tim for over ten years and Claritas since it’s founding.",
            "We have found them proactive and highly informative across a wide range of wealth management and financial planning topics and now rely upon them for all financial advice. We attribute much of our financial peace of mind to their capability and feel assured that they always have our financial goals front and centre in everything they do.",
            "I would not hesitate to recommend them to friends and colleagues and indeed have done so several times."
          ]
        }
      ]}></Testimonials>
      <GridBox>
        <GridText $primary={true}>The one thing we can guarantee is that things will change (both personally and with the world in general). On an ongoing basis we'll handhold you through the inevitable ups and downs of life. Having a caring, empathetic and trusted adviser by your side can really help.</GridText>
        <GridImage alt="" draggable={false} src="/assets/images/grid_background3.webp" />
      </GridBox>
      <ContentBox>
        <p>Where capital needs to be invested we have the Claritas Investment Process, an impeccably researched, world class investment solution based on the latest evidence and a healthy dose of common sense.</p>
        <LinkButton to={"/contact"}>Contact Us</LinkButton>
      </ContentBox>
      <Footer></Footer>
    </>
  );
}
