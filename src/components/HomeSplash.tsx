import styled, { css } from "styled-components";

const Overflow = styled.div`
  height: 100%;
  overflow: hidden;
  position: absolute;
  width: 100%;
`;

const Background = styled.div<{ $i: number }>`
  ${props => css`
    @keyframes splashAnim${props.$i} {
      0% {
        opacity: ${props.$i === 1 ? '1' : '0'};
        transform: ${props.$i === 4 ? 'scale(1.25)' : 'scale(1)'};
      }

      23% {
        opacity: ${props.$i === 1 ? '1' : '0'};
        transform: ${props.$i === 1 ? 'scale(1.25)' : 'scale(1)'};
      }

      25% {
        opacity: ${props.$i === 2 ? '1' : '0'};
        transform: ${props.$i === 1 ? 'scale(1.25)' : 'scale(1)'};
      }

      48% {
        opacity: ${props.$i === 2 ? '1' : '0'};
        transform: ${props.$i === 2 ? 'scale(1.25)' : 'scale(1)'};
      }

      50% {
        opacity: ${props.$i === 3 ? '1' : '0'};
        transform: ${props.$i === 2 ? 'scale(1.25)' : 'scale(1)'};
      }

      73% {
        opacity: ${props.$i === 3 ? '1' : '0'};
        transform: ${props.$i === 3 ? 'scale(1.25)' : 'scale(1)'};
      }

      75% {
        opacity: ${props.$i === 4 ? '1' : '0'};
        transform: ${props.$i === 3 ? 'scale(1.25)' : 'scale(1)'};
      }

      98% {
        opacity: ${props.$i === 4 ? '1' : '0'};
        transform: ${props.$i === 4 ? 'scale(1.25)' : 'scale(1)'};
      }

      100% {
        opacity: ${props.$i === 1 ? '1' : '0'};
        transform: ${props.$i === 4 ? 'scale(1.25)' : 'scale(1)'};
      }
    }

    animation: splashAnim${props.$i} 40s ease-in-out infinite;
    background-image: url("/assets/images/splash_background${props.$i}.webp");
    background-position-x: center;
    background-size: cover;
    position: absolute;
    height: 100%;
    width: 100%;
  `}
`;

export function HomeSplash() {
  return (
    <Overflow>
      <Background $i={1} />
      <Background $i={2} />
      <Background $i={3} />
      <Background $i={4} />
    </Overflow>
  );
}
