import styled from 'styled-components';
import background from '../assets/image/marsBackground.jpg';

export const Wrap = styled.div`
  padding-top: 80px;
  width: 100vw;
  height: 100vh;
  background-image: url('${background}');
  background-size: cover;
  padding: 100px;
`;

export const Title = styled.div`
  font-family: 'Montserrat';
  color: black;
  font-weight: 200;
  font-size: 48px;
  letter-spacing: 3px;
  background: none;
  margin-top: 100px;
  margin-left: 50px;
`;
