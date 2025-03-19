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

export function ExecProfService() {
    return (
        <>
            <PageHeader $backgroundImage={"/assets/images/pagehead_execprof.webp"} $title={"Executives & Professionals Service"} />
            <Container>
                <Header>We work with many successful executives and professionals and are familiar with the issues you maybe facing.</Header>
                <Header>You're likely to be –</Header>
                <ul>
                    <ListItem><strong>Extremely busy with your career and family and looking for someone to simplify and make sense of your financial life.</strong></ListItem>
                    <ListItem>Unsure how much money you should be putting away for your financial future versus more pressing things such as house moves, education fees and generally living your life!</ListItem>
                    <ListItem>Wondering when you can stop work, slow down or at least know that work is optional.</ListItem>
                </ul>
                <Header>You're looking to –</Header>
                <ul>
                    <ListItem>Create a financial plan to achieve financial independence from work. <strong>How much is enough?</strong></ListItem>
                    <ListItem>Establish a long-term relationship with a trusted adviser who will truly understand you and what you’re trying to achieve.</ListItem>
                    <ListItem><strong>Strike the right balance between spending now and spending later.</strong> If you have children, they’ll only be young once and time flies. If you don’t have children, you’ll only be young once!</ListItem>
                    <ListItem>Ensure that your loved ones would be ok if disaster strikes (death or incapacity).</ListItem>
                    <ListItem>Make sense of your employee benefits package and/or share options and how they fit into your financial plan.</ListItem>
                    <ListItem>Minimise your tax bills along the way.</ListItem>
                </ul>
                <Header>You have –</Header>
                <ul>
                    <ListItem>A desire to plan for your financial future.</ListItem>
                    <ListItem>Household income of circa £200k pa or above.</ListItem>
                    <ListItem>Surplus income to invest towards your financial future.</ListItem>
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
            </Container>
            <Footer />
        </>
    );
}
