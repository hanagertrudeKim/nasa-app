import styled from 'styled-components';
import image from '../../../assets/image/asteroid.jpg';

export const Warp = styled.div`
  padding-top: 60px;
  width: 100vw;
  height: 100vh;
  background-image: url('${image}');
  background-size: cover;
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;500&display=swap');
  font-family: 'Roboto Mono', monospace;
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
  height: 500px;
  border-radius: 8%;
  display: flex;
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
  padding: 10px;
  padding-left: 30px;
`;

export const Name = styled.div`
  background: none;
  font-size: 29px;
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const Text = styled.div`
  background: none;
  font-weight: 100;
  margin-bottom: 5px;
  font-size: 14px;
  color: rgb(131 149 155);
`;

export const Information = styled.div`
  font-weight: 500;
  background: none;
  margin-bottom: 25px;
  letter-spacing: 1.5px;
`;

export const ImageWrap = styled.div`
  width: 200px;
  height: 250px;
  padding: 20px;
  margin-top: 20px;
  text-align: center;
  background: none;
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
`;

export const StoneImg = styled.img`
  width: 130px;
  height: 130px;
  background: none;
`;

export const RulerImg = styled.img`
  width: 40px;
  height: 30px;
  background: none;
`;

export const ImageExplain = styled.div`
  margin-top: 2px;
  background: none;
  letter-spacing: 1.5px;
`;

export const ArrowBtn = styled.div`
  width: 5px;
  height: 5px;
  font-size: 30px;
  font-weight: 800;
  color: rgb(164 186 193);
  position: absolute;
  left: 1180px;
  top: 670px;
  cursor: pointer;
`;
