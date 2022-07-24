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

export const StledLink = styled(Link)`
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active{
    text-decoration: none; 
    color: white;
  }
` 