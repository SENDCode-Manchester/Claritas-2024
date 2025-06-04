import styled from "styled-components";
import {PageHeader} from "../../components/PageHeader.tsx";
import {Footer} from "../../components/nav/Footer.tsx";
import {Link} from "react-router-dom";

export const W4Grid = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(2, 1fr);
  margin: 64px 64px;

  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    gap: 24px;
    grid-template-columns: 1fr;
    margin: 64px 20px;
  }
`;

export const W4Item = styled(Link)<{ $image: string }>`
  align-items: center;
  background-blend-mode: darken;
  background-color: #00000030;
  background-image: url(${props => props.$image});
  background-size: cover;
  background-repeat: no-repeat;
  color: #ffffff;
  display: flex;
  font-size: 32px;
  font-weight: 600;
  height: 384px;
  justify-content: center;
  text-align: center;
  text-decoration: none;

  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    font-size: 18px;
    height: 196px;
  }
`;

export function WhoWeWorkWith() {
  return (
    <>
      <PageHeader $backgroundImage={"/assets/images/pagehead_whoweworkwith.webp"} $title={"Who We Work With"} />
      <W4Grid>
        <W4Item $image={"/assets/images/pagehead_execprof.webp"} to={"/executives-professionals"}>Executives & Professionals</W4Item>
        <W4Item $image={"/assets/images/pagehead_businessowner.webp"} to={"/business-owner"}>Business Owners</W4Item>
        <W4Item $image={"/assets/images/pagehead_financialindep.webp"} to={"/financial-independence"}>Approaching Retirement or seeking Financial Independence</W4Item>
        <W4Item $image={"/assets/images/pagehead_thirdact.webp"} to={"/third-act"}>Later years (the 'Third Act')</W4Item>
      </W4Grid>
      <Footer />
    </>
  );
}
