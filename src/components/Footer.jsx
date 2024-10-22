import React from 'react';
import * as S from './footer.styled';
import twitter from '../assets/image/twitter.png';
import facebook from '../assets/image/facebook.png';
import instagram from '../assets/image/instagram.png';

export default function Footer() {
  return (
    <S.FooterWrap>
      <S.ConnectWrap>
        Stay Connect
        <S.IconWrap>
          <S.IconLink href="https://twitter.com/NASASolarSystem">
            <img src={twitter} alt="twitter" />{' '}
          </S.IconLink>
          <S.IconLink href="https://www.facebook.com/NASASolarSystem/">
            <img src={facebook} alt="facebook" />{' '}
          </S.IconLink>
          <S.IconLink href="https://www.instagram.com/nasasolarsystem/">
            <img src={instagram} alt="instagram" />{' '}
          </S.IconLink>
        </S.IconWrap>
        <S.Explain>
          This site is maintained by Hana Kim
          <br />
          NASA Official: Kristen Erickson
          <br />
          Site Manager: Hana Kim <br />
          Science Writer: Amanda Barnett
          <br />
          Social Media Lead: Bill Dunford
        </S.Explain>
      </S.ConnectWrap>
    </S.FooterWrap>
  );
}
