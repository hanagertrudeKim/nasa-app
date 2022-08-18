import styled from 'styled-components';

export const APODWrap = styled.div`
  margin: 100px;
  height: 500px;
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
`;

export const APODTitle = styled.div`
  font-size: 30px;
  margin-bottom: 40px;
  font-weight: 700;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

export const PhotoWrap = styled.div`
  display: felx;
  border: 1px solid gray;
  width: 80%;
  height: 550px;
  text-align: center;
  font-family: monospace;
  word-spacing: 1px;
  line-height: 160%;
  color: beige;
  font-size: 15px;
`;
export const ExplainWrap = styled.div`
  width: 50%;
`;

export const Photo = styled.img`
  display: flex;
  width: 50%;
  height: 550px;
`;

export const VideoWrap = styled.div`
  border: 1px solid gray;
  width: 60vw;
  text-align: center;
  font-family: monospace;
  word-spacing: 1px;
  line-height: 160%;
  color: beige;
  font-size: 15px;
`;

export const Title = styled.div`
  padding: 15px;
  color: rgb(255 255 255);
  font-family: Metropolis, Helvetica, Arial, sans-serif;
  font-size: 23px;
  font-weight: 700;
  font-weight: bold;
  background-color: #2a2b2d;
`;

export const Explain = styled.div`
  padding-left: 50px;
  padding-right: 50px;
  height: 400px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 6px;
    opacity: 0;
  }
  ::-webkit-scrollbar-thumb {
    visibility: hidden;
    background-color: #cfd2cf;
    border-radius: 6px;
    opacity: 0.2;
  }
  :hover {
    ::-webkit-scrollbar-thumb {
      visibility: visible;
    }
    ::-webkit-scrollbar-thumb:hover {
      background-color: #73777b;
    }
  }
`;

export const VideoLink = styled.div`
  font-size: 20px;
  padding-bottom: 30px;
`;
