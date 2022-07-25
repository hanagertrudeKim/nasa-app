import React from 'react'
import * as S from "./Header.style";
import "./DropDown"
import { PlanetDropDown } from './DropDown';
import { useDispatch, useSelector } from 'react-redux';
import { change } from '../store/categoryReducer';

export default function Header() {
  const dropDown = useSelector((state) => state.categoryReducer);
  const dispatch = useDispatch();

  return (
    <S.Wrap>
      <S.Category><S.StyleLink to="/solarSystem">Solar System</S.StyleLink></S.Category>
      <S.Category>
        <S.StyleLink 
        to="/planet" 
        onClick={() => {
        dispatch(change())
        }} 
        >Planet</S.StyleLink>
        <S.DropDownWrap dropDown={dropDown}>
        {PlanetDropDown.map(item => {
          return (
            <S.SubLinkWrap key={item.id}>
              <S.StyleSubLink
              to={item.path} >
              {item.title}
              </S.StyleSubLink>
            </S.SubLinkWrap>
          )
        })}
        </S.DropDownWrap>
        </S.Category>
      <S.Category><S.StyleLink to="/">
        <S.Logo alt="nasa-logo" src="./nasalogo.png" />
      </S.StyleLink></S.Category>
      <S.Category><S.StyleLink to="/reference">Reference</S.StyleLink></S.Category>
      <S.Category><S.StyleLink to="/marsTravel">Mars-Travel</S.StyleLink></S.Category>
    </S.Wrap>
  );
};