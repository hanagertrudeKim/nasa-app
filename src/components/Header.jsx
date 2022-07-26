import React from 'react'
import * as S from "./Header.style";
import "./DropDown"
import { PlanetDropDown } from './DropDown';
import { useDispatch, useSelector } from 'react-redux';
import { planetChange } from '../store/planetReducer';

export default function Header() {

  const DropDown = useSelector((state) => state.planetReducer);
  const dispatch = useDispatch();


  return (
    <S.Wrap>      
      <S.StyleLink to="/">
      <S.Logo alt="nasa-logo" src="./nasalogo.png" />
      </S.StyleLink>
      <S.Category><S.StyleLink to="/solarSystem">Solar System</S.StyleLink></S.Category>
      <S.Category>
        <S.StyleLink to="/planet"
        onClick={() => {
        dispatch(planetChange())
        }}> Planets </S.StyleLink>
        <S.DropDownWrap dropDown={DropDown}>
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
      <S.Category><S.StyleLink to="/moon">Moon</S.StyleLink></S.Category>
      <S.Category><S.StyleLink to="/reference">Reference</S.StyleLink></S.Category>
      <S.Category><S.StyleLink to="/marsTravel">Mars-Travel</S.StyleLink></S.Category>
    </S.Wrap>
  );
};