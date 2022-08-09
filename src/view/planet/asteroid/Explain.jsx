import React from 'react';
import styled from 'styled-components';
import asteroid from '../../../assets/image/asteroid-earth.webp';

const ExplainWrap = styled.div`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    visibility: hidden;
    background-color: #cfd2cf;
    border-radius: 6px;
  }
  :hover {
    ::-webkit-scrollbar-thumb {
      visibility: visible;
    }
    ::-webkit-scrollbar-thumb:hover {
      background-color: #73777b;
    }
  }
  background-color: inherit;
  border-radius: 8%;
  width: 100%;
  height: 100%;
`;

const Wrap = styled.div`
  background-color: inherit;
  border-radius: 8%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  place-content: center;
  place-items: center;
  color: rgb(210 225 232);
`;

const Image = styled.img`
  height: 270px;
  width: 450px;
`;

const Title = styled.div`
  margin-top: 80px;
  margin-bottom: 40px;
  background: none;
  @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&display=swap');
  font-family: 'Inconsolata', monospace;
  font-size: 30px;
  color: white;
`;

const Info = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200&display=swap');
  font-family: 'Inconsolata', monospace;
  font-size: 15px;
  padding: 40px;
  line-height: 180%;
  letter-spacing: 2px;
  background: none;
`;

export default function Explain() {
  return (
    <Wrap>
      <ExplainWrap>
        <Title>☄️ What is Asteroid?</Title>
        <Info>
          Asteroids, sometimes called minor planets, are rocky, airless remnants left over from the
          early formation of our solar system about 4.6 billion years ago.
        </Info>
        <Image src={asteroid} alt="asteroid" />
        <Info>
          Most of this ancient space rubble can be found orbiting our Sun between Mars and Jupiter
          within the main asteroid belt. Asteroids range in size from Vesta – the largest at about
          329 miles (530 kilometers) in diameter – to bodies that are less than 33 feet (10 meters)
          across. The total mass of all the asteroids combined is less than that of Earth's Moon.
          Most asteroids are irregularly shaped, though a few are nearly spherical, and they are
          often pitted or cratered. As they revolve around the Sun in elliptical orbits, the
          asteroids also rotate, sometimes quite erratically, tumbling as they go. More than 150
          asteroids are known to have a small companion moon (some have two moons). There are also
          binary (double) asteroids, in which two rocky bodies of roughly equal size orbit each
          other, as well as triple asteroid systems.
        </Info>
      </ExplainWrap>
    </Wrap>
  );
}
