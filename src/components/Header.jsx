import React from 'react';
import * as S from './Header.style';
import './static/dropDown';
import { PlanetDropDown } from './static/dropDown';
import logo from '../assets/image/nasalogo.png';

export default function Header() {
  return (
    <S.Wrap>
      <S.StyleLink to="/">
        <S.Logo alt="nasa" src={logo} />
      </S.StyleLink>
      <S.Category>
        <S.SelectWrap>
          <S.Select class="menu bar"> Solar System </S.Select>
          <S.OptionWrap className="sub-menu">
            {PlanetDropDown.map((item) => {
              return (
                <S.OptionLinkWrap className="ul" key={item.id}>
                  <S.OptionLink className="li" to={item.path}>
                    {item.title}
                  </S.OptionLink>
                </S.OptionLinkWrap>
              );
            })}
          </S.OptionWrap>
        </S.SelectWrap>
      </S.Category>

      <S.Category>
        <S.StyleLink to="/reference">Reference</S.StyleLink>
      </S.Category>
      <S.Category>
        <S.StyleLink to="/gallery">Gallery</S.StyleLink>
      </S.Category>
      <S.Category>
        <S.StyleLink to="/marsTravel">Mars-Travel</S.StyleLink>
      </S.Category>
    </S.Wrap>
  );
}
