import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrap = styled.div`
  color: white;
  padding: 150px;
  padding-top: 80px;
  width: 65vw;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  place-content: center;
  place-items: center;
  place-self: center;
  justify-content: space-around;
`;

export const TitleWrap = styled(Link)`
  border: 1px solid #9bdaf1;
  margin-bottom: 20px;
  width: 260px;
  height: 400px;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:-webkit-any-link {
    color: inherit;
    cursor: pointer;
    &:hover {
      background-color: #212121;
    }
  }
`;
export const FrontImg = styled.img`
  width: 260px;
  height: 230px;
`;

export const Title = styled.div`
  font-family: sans-serif;
  letter-spacing: 1px;
  font-size: 15px;
  font-weight: 800;
  color: #9bdaf1;
  padding: 5px;
  background-color: inherit;
  .highlight {
    background: none;
  }
`;

export const Number = styled.div`
  font-family: 'Courier New', Courier, monospace;
  color: white;
  font-size: 12px;
  padding: 5px;
  background-color: inherit;
`;

export const Warp = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
  place-self: center;
  color: white;
  padding: 100px;
`;
