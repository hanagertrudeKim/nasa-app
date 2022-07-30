import React from 'react'
import * as S from "./Header.style";
import "./DropDown"
import { PlanetDropDown } from './DropDown';

export default function Header() {

  return (
    <S.Wrap>      
      <S.StyleLink to="/">
      <S.Logo alt="nasa-logo" src="./nasalogo.png" />
      </S.StyleLink>
      <S.Category><S.StyleLink to="/solarSystem">Solar System</S.StyleLink></S.Category>
      <S.Category>
        <S.SelectWrap>
        <S.Select class="menu bar"> Planets </S.Select>
        <S.OptionWrap className='sub-menu'>
        {PlanetDropDown.map(item => {
          return (
            <S.OptionLinkWrap className='ul' key={item.id}>
              <S.OptionLink className='li'
              to={item.path} >
              {item.title}
              </S.OptionLink>
            </S.OptionLinkWrap>
          )
        })}
        </S.OptionWrap>
        </S.SelectWrap>
        </S.Category>
        
      <S.Category><S.StyleLink to="/moon">Moon</S.StyleLink></S.Category>
      <S.Category><S.StyleLink to="/reference">Reference</S.StyleLink></S.Category>
      <S.Category><S.StyleLink to="/marsTravel">Mars-Travel</S.StyleLink></S.Category>
    </S.Wrap>
  );
};