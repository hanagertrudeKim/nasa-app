import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Logo = styled.img`
  width: 130px;
  height: 70px;
  position: fixed;
  top: 5px;
  left: 0;
`;

export const Wrap = styled.div`
  margin: 0;
  padding-top: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid gray;
  width: 100vw;
  height: 50px;
  display: flex;
  place-content: flex-end;
  place-items: center;
  position: fixed;
  z-index: 100;
`;

export const Category = styled.li`
  list-style: none;
  font-size: 15px;
  font-family: Metropolis, Helvetica, Arial, sans-serif;
  padding-left: 20px;
  padding-right: 50px;
  font-weight: 550;
`;

export const StyleLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: white;
  }
  &:hover {
    color: lightblue;
  }
`;

export const SelectWrap = styled.div`
  .sub-menu {
    display: none;
  }

  &:hover {
    display: block;
    .sub-menu {
      display: block;
    }
    .ul {
      display: block;
    }
    .li {
      display: block;
    }
  }
  position: relative;
`;

export const OptionWrap = styled.div`
  color: white;
  cursor: pointer;
  &:hover {
    display: block;
  }
  position: absolute;
  top: 15px;
`;

export const OptionLinkWrap = styled.ul`
  padding-top: 18px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 30px;
`;

export const Select = styled.div`
  color: white;
  cursor: pointer;
  &:hover {
    color: lightblue;
  }
`;

export const OptionLink = styled(Link)`
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: white;
  &:hover {
    color: lightblue;
  }
`;
