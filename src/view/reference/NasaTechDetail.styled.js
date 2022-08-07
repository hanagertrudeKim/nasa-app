import styled from 'styled-components';

export const Warp = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
`;

export const TitleWrap = styled.div`
  width: 100vw;
  height: 550px;
  background: linear-gradient(#414141, #e0e7ef, #414141);
  display: flex;
  flex-direction: column-reverse;
`;

export const Title = styled.div`
  color: white;
  font-size: 30px;
  font-weight: 800;
  font-family: sans-serif;
  text-align: center;
  width: 100vw;
  height: 10vh;
  background: none;
  .highlight {
    background: none;
    color: #43aaed;
  }
`;

export const ExplainWrap = styled.div`
  margin: 150px;
  margin-top: 200px;
  color: white;
  font-size: 18.5px;
  font-family: sans-serif;
  letter-spacing: 2px;
  display: flex;
  flex-direction: row;
`;

export const CaseNum = styled.div`
  color: skyblue;
`;

export const Explain = styled.div`
  margin-top: 90px;
  margin-right: 80px;
  line-height: 35px;
`;

export const Image = styled.img`
  width: 400px;
  height: 350px;
`;
