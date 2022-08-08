import styled from 'styled-components';
import background from '../../assets/image/planetsbackground.jpg';

export const Background = styled.div`
  background-image: url('${background}');
  background-size: cover;
  padding-top: 80px;
  height: 320vh;
`;

export const Wrap = styled.div`
  width: 100vw;
  height: 320vh;
  background: rgb(18, 18, 15, 0.4);
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
`;

export const PlanetWrap = styled.div`
  background-color: rgb(41 44 54 / 60%);
  height: 260px;
  width: 70vw;
  margin-top: 50px;
  display: grid;
  grid-template-columns: 260px 1fr;
`;

export const Image = styled.img`
  height: 260px;
  width: 260px;
  background: none;
`;

export const ExplainWrap = styled.div`
  background: none;
  color: white;
  padding: 20px;
`;

export const Name = styled.div`
  background: none;
  font-size: 25px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Explain = styled.div`
  background: none;
  font-size: 18px;
  font-weight: 300;
  line-height: 160%;
`;
