import {Earth3dModel} from "../../components/3dModel/Earth3dModel"
import * as S from './Earth.styled'

export default function Earth() {
  return (
    <S.ModelWrap>
      <Earth3dModel />
    </S.ModelWrap>
  )
}
