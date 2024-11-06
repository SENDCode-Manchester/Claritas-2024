import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 50vh;
  mask-image: linear-gradient(black, black, transparent);
  overflow: hidden;
`;

const CarouselItem = styled.p`
  animation: carousel 20s linear infinite;
  color: white;
  font-size: 24px;
  font-weight: 350;
  padding: 20px 0;
  text-align: center;
  width: 800px;
  
  @keyframes carousel {
    from {
      transform: translateY(-100px);
    }
    to {
      transform: translateY(-932px);
    }
  }

  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    @keyframes carousel {
      from {
        transform: translateY(-100px);
      }
      to {
        transform: translateY(-975px);
      }
    }
    
    font-size: 16px;
    margin: 0 10vw;
    width: 300px;
  }
`;

export function Carousel({ $items } : { $items: string[] }) {
  return (
    <Container>
      {$items.map(function(item, key) {
        return (<CarouselItem key={key}>{item}</CarouselItem>)
      })}
      {$items.map(function(item, key) {
        return (<CarouselItem key={key}>{item}</CarouselItem>)
      })}
    </Container>
  );
}
