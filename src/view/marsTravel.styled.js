import styled from 'styled-components';
import background from '../assets/image/marsBackground.jpg';

export const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('${background}');
  background-size: cover;
  padding: 50px;
  * {
    background: none;
  }
`;

export const Title = styled.div`
  font-family: 'Montserrat';
  color: black;
  font-weight: 300;
  font-size: 38px;
  letter-spacing: 3px;
  background: none;
  margin-top: 80px;
  margin-left: 50px;
`;
