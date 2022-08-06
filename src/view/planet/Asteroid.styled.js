import styled from 'styled-components';
import asteroid from '../../assets/image/asteroid.jpg';

export const Warp = styled.div`
  width: 100vw;
  height: 300vh;
  background-size: cover;
  background-image: url(${asteroid});
  display: flex;
  flex-direction: column;
`;

export const CountWrap = styled.div`
  background: none;
  place-content: center;
  place-items: center;
  font-family: 'Courier New', Courier, monospace;
`;

export const CountTitle = styled.div`
  padding-top: 100px;
  color: gray;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  background: none;
`;

export const Count = styled.div`
  color: white;
  margin-top: 10px;
  text-align: center;
  font-size: 35px;
  font-weight: 500;
  background: none;
`;
