import React from 'react'
import styled from 'styled-components'

export const ButtonMore = styled.div`
  height: 4vh;
  background-color: #A9D3EE;
  font-size: 18px;
  font-weight: 700;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  place-items: center;
  place-content: center;
`

export default function MoreBtn() {
  return (
    <ButtonMore>
      MORE ▽
    </ButtonMore>
  )
}
