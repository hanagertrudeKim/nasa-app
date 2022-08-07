import styled from 'styled-components';
import image from '../../assets/image/asteroid.jpg';

export const Warp = styled.div`
  padding-top: 60px;
  width: 100vw;
  height: 100vh;
  background-image: url('${image}');
  background-size: cover;
`;

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(16, 16, 18, 0.7);
  display: flex;
  place-content: center;
  place-items: center;
`;

export const BoxWrap = styled.div`
  background-color: rgb(16, 16, 17);
  width: 1000px;
  height: 520px;
  border-radius: 8%;
  display: flex;
`;

export const ExplainWrap = styled.div`
  background-color: inherit;
  border-radius: inherit;
  border: 1px solid #25282b;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const AsteroidWrap = styled.div`
  background-color: inherit;
  border-radius: inherit;
  border: 0.7px solid #25282b;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  background: none;
  font-family: Metropolis, sans-serif;
  text-align: center;
  font-weight: 300;
  border-bottom: 0.7px solid #25282b;
  margin: 17px;
  padding-top: 10px;
`;

export const Title = styled.div`
  color: white;
  background: none;
  font-size: 26px;
`;

export const SubTitle = styled.div`
  color: rgb(131 149 155);
  background: none;
  font-size: 15px;
  margin-top: 15px;
  margin-bottom: 10px;
`;

export const Card = styled.div`
  width: 500px;
  height: 100%;
  float: left;
  display: flex;
  background: none;
  overflow: hidden;
  transform: translate('${(props) => -`${props.btnIndex * 500}vw`}');
`;

export const DetailWrap = styled.div`
  display: flex;
  background: none;
  width: 100%;
  height: 50%;
  color: rgb(210 225 232);
`;

export const Detail = styled.div`
  background: none;
  width: 300px;
  height: 250px;
  padding: 20px;
`;

export const Name = styled.div`
  background: none;
`;

export const Text = styled.div``;

export const Information = styled.div``;

export const ImageWrap = styled.div`
  width: 200px;
  height: 250px;
  padding: 20px;
  text-align: center;
`;

export const Image = styled.div``;

export const ImageExplain = styled.div``;

export const ArrowBtn = styled.div`
  width: 5px;
  height: 5px;
  font-size: 30px;
  font-weight: 800;
  color: rgb(164 186 193);
  position: absolute;
  left: 1000px;
  top: 670px;
  cursor: pointer;
`;
