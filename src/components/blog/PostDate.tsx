import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const DatePart = styled.p`
  color: #6e6e6e;
  font-weight: 950;
  line-height: 1;
  margin-right: 10px;
  text-align: right;
  text-transform: uppercase;
`;

const Month = styled(DatePart)`
  font-size: 24px;

  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    font-size: 14px;
  }
`;

const Year = styled(DatePart)`
  font-size: 18px;

  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    font-size: 14px;
  }
`;

export function PostDate({ $date } : { $date: string }) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const date = new Date($date);

  return (
    <Container>
      <Month>{months[date.getMonth()]}</Month>
      <Year>{date.getFullYear()}</Year>
    </Container>
  );
}
