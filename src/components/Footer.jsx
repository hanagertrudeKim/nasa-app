import React from 'react';
import * as S from './Footer.style';
import twitter from "../assets/svg/twitter.png";
import facebook from "../assets/svg/facebook.png";
import instagram from "../assets/svg/instagram.png";

export default function Footer() {
  return (
    <S.FooterWrap>
       <S.ConnectWrap>
          Stay Connect
        <S.IconWrap>
        <S.IconLink href='https://twitter.com/NASASolarSystem'>
          <img src={twitter} alt='twitter' /> </S.IconLink> 
          <S.IconLink href='https://www.facebook.com/NASASolarSystem/'>
          <img src={facebook} alt='facebook'/> </S.IconLink>
          <S.IconLink href='https://www.instagram.com/nasasolarsystem/'>
          <img src={instagram} alt='instagram'/> </S.IconLink>
        </S.IconWrap>
      </S.ConnectWrap>  
    </S.FooterWrap>
  )
}
