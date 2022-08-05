import styled from "styled-components";
import { Link } from "react-router-dom";

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
`

export const TitleWrap = styled(Link)`
  border: 1px solid #9BDAF1;
  margin-bottom: 20px;
  width: 17vw;
  height: 65vh;
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
  &:-webkit-any-link {
    color: inherit;
    cursor: pointer;
  &:hover{
    background-color: #212121;
  }
}
`
export const FrontImg = styled.img`
  width: 17vw;
  height: 15vw;
`

export const Title = styled.div`
  font-family: sans-serif;
  letter-spacing: 1px;
  font-size: 15px;
  font-weight: 800;
  color: #9BDAF1;
  padding: 5px;
  background-color: inherit;
`

export const Number = styled.div`
  font-family: 'Courier New', Courier, monospace;
  color: white;
  font-size: 12px;
  padding: 5px;
  background-color: inherit;
`