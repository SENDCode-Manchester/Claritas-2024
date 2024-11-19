import styled, { css } from "styled-components";
import {useEffect, useState} from "react";

const Overflow = styled.div`
  height: 100%;
  overflow: hidden;
  position: absolute;
  width: 100%;
`;

const Background = styled.div<{ $animate: boolean; $i: number }>`
  @keyframes splashAnim {
    from {
      transform: scale(1);
    }
    
    to {
      transform: scale(1.25);
    }
  }
  
  ${props => props.$animate && css`
    animation: splashAnim 10s ease-in-out infinite;
  `}
  ${props => css`
    {/* Dynamically set through states, see useEffect in HomeSplash */}
    background-image: url("/assets/images/splash_background${props.$i}.webp");
    background-position-x: center;
    background-size: cover;
  `}
  height: 100%;
  transition: background-image ease 1s;
  width: 100%;
`;

export function HomeSplash() {
  const [animate, setAnimate] = useState(true);
  const [splashImage, setSplashImage] = useState(1);

  useEffect(function() {
    // change the image every 10 seconds
    // todo: there are bugs here but i have got absolutely no idea how to fix them
    const interval = setInterval(function() {
      setAnimate(false);
      if (splashImage > 3) return setSplashImage(1);
      setSplashImage(splashImage + 1);
      setAnimate(true);
    }, 10e3);

    return () => clearInterval(interval);
  }, [splashImage]);

  return (
    <Overflow>
      <Background $animate={animate} $i={splashImage} />
    </Overflow>
  );
}
