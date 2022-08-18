import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  place-content: center;
  height: 100vh;
  width: 100vw;
  font-family: 'Montserrat';
`;

export const ModelWrap = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  position: relative;
  z-index: 1;
  padding-top: 50px;
`;

export const DetailWrap = styled.div`
  height: 100vh;
  * {
    background-color: rgb(5, 5, 5, 0.3);
  }
`;

export const ModelExplain = styled.div`
  background: #272727;
  height: 10vh;
  width: 100vw;
  font-size: 38px;
  font-weight: 700;
  letter-spacing: 2px;
  text-align: center;
  position: absolute;
  display: ${(props) => (props.status ? 'flex' : 'none')};
  bottom: 0;
  align-content: center;
  align-items: center;
  justify-content: space-evenly;
  z-index: 3;
`;

export const Icon = styled.img`
  background: none;
  cursor: pointer;
`;

export const ModelDetail = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  place-content: center;
  flex-direction: column;
  width: 400px;
  height: 90vh;
  border: 1px solid white;
  z-index: 2;
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid gray;
  padding-bottom: 100px;
  padding: 40px;
`;

export const Title = styled.div`
  color: white;
  font-family: 'Exo', sans-serif;
  font-size: 40px;
  margin-bottom: 50px;
`;

export const Explain = styled.div`
  color: white;
  font-family: 'Metrophobic', sans-serif;
`;

export const InfoWrap = styled.div`
  display: flex;
  color: white;
  font-family: 'Metrophobic', sans-serif;
  margin-top: 50px;
  flex-direction: column;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  font-family: 'Metrophobic', sans-serif;
  align-items: flex-end;
`;

export const Number = styled.div`
  color: rgb(121 115 220);
  font-size: 25px;
  font-weight: 500;
`;

export const Text = styled.div`
  font-size: 15px;
  font-weight: 200;
  margin-left: 7px;
  padding-bottom: 5px;
`;

export const SubTitle = styled.div`
  color: rgb(255, 255, 255, 0.5);
  font-size: 12px;
  width: 200px;
  border-top: 1px solid rgb(255, 255, 255, 0.5);
`;

export const Next = styled.div`
  color: white;
  font-size: 30px;
  position: absolute;
  bottom: 15px;
  right: 17px;
  cursor: pointer;
`;
