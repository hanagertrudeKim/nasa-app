import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Logo = styled.img`
  width: 130px;
  height: 70px;
  position: relative;
  top: 0;
`

export const Wrap = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  height: 70px;
  display: flex;
  place-content: center;
  place-items: center;
  gap: 45px;
`

export const Category = styled.li`
  list-style: none;
  font-size: 12px;
  font-family: sans-serif;
`

export const StyleLink = styled(Link)`
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active{
    text-decoration: none; 
    color: white;
  }
` 

export const DropDownWrap = styled.ul`
  display: ${props => props.dropDown ? "true" : "none"};
  width: 10rem;
  position: absolute;
  list-style: none;
  text-align: start;
`

export const SubLinkWrap = styled.li`
  width: 30%;
`

export const StyleSubLink = styled(Link)`
  display: block;
  position: relative;
  top: 20px;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: white;
  padding: 16px;
  cursor: pointer;
  background-color: gray;
`