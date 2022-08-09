import styled from 'styled-components';

export const Wrap = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  padding-bottom: 3000px;
  color: white;
  place-content: center;
  letter-spacing: 3px;
`;

export const Title = styled.div`
  margin-top: 100px;
  font-size: 41px;
  font-weight: 700;
  color: white;
  margin-bottom: 100px;
`;

export const SearchWrap = styled.form`
  display: grid;
  grid-template-columns: 240px 60px 50px 200px;
`;

export const Search = styled.input`
  padding-left: 15px;
  height: 40px;
  border-radius: 15px 0 0 15px;
  border: none;
  background-color: rgb(240, 240, 240, 0.5);
  outline: none;
  font-size: 18px;
  &::placeholder {
    color: black;
  }
`;

export const SubmitBtn = styled.button`
  border: none;
  border-radius: 0 15px 15px 0;
  margin: 0;
  text-align: center;
  font-size: 20px;
  background-color: rgb(240, 240, 240, 0.5);
`;

export const AssetsWrap = styled.div`
  margin-top: 50px;
  padding-top: 100px;
  display: flex;
  flex-wrap: wrap;
  border-top: 0.5px solid whitesmoke;
`;

export const Asset = styled.img`
  width: 320px;
  height: 250px;
`;

export const AssetTitle = styled.div`
  font-size: 14px;
  margin-top: 10px;
  height: 40px;
  width: 320px;
  text-align: center;
`;

export const Type = styled.select`
  background: rgb(29 86 163);
  font-size: 16px;
  border: 0;
  height: 40px;
  vertical-align: middle;
  color: rgb(255 255 255);
  -webkit-appearance: none;
  padding-left: 15px;
  border-radius: 15px;
  letter-spacing: 2px;
  outline: none;
`;

export const ImageWrap = styled.div`
  margin: 20px;
  margin-bottom: 100px;
  cursor: pointer;
`;

export const Option = styled.option``;

export const VideoWrap = styled(ImageWrap)`
  position: relative;
`;

export const PlayBtn = styled.img`
  width: 40px;
  height: 40px;
  position: absolute;
  background: none;
  top: 10px;
  left: 10px;
  background-color: white;
  border-radius: 100%;
  border: none;
  border: 0;
`;
