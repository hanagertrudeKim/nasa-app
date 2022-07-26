import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Logo = styled.img`
  width: 130px;
  height: 70px;
  position: fixed;
  top: 5px;
  left: 0;
`

export const Wrap = styled.div`
  padding-top: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid gray;
  width: 100%;
  height: 50px;
  display: flex;
  place-content: flex-end;
  place-items: center;
  position: absolute;
`

export const Category = styled.li`
  list-style: none;
  font-size: 13px;
  font-family: Metropolis,Helvetica,Arial,sans-serif;
  padding-left: 20px;
  padding-right: 50px;
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
  width: 70px;
  position: absolute;
  list-style: none;
  text-align: start;
`

export const SubLinkWrap = styled.li`
  width: 100%;
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