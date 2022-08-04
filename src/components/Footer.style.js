import styled from "styled-components";
import footer from "../assets/image/footer.jpg";

export const FooterWrap = styled.div`
  margin-top: 200px;
  height: 100vh;
  width: 100vw;
  filter: brightness(70%);
  background-image: url('${footer}');
  background-size: cover;
  display: flex;
  place-content: center;
`

export const ConnectWrap = styled.div`
 background: none;
 color: white;
 text-align: center;
 font-size: 30px;
 font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 font-weight: 700;
 letter-spacing: 2px;
`

export const IconWrap = styled.div`
  background: none;
  margin-top: 30px;
  `

export const IconLink = styled.a`
  width: 48px;
  height: 48px;
  &:-webkit-any-link {
    color: none;
    cursor: pointer;
    text-decoration: none;
}
`
export const Explain = styled.div`
  margin-top: 100px;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  line-height: 150%;
  background: none;
`