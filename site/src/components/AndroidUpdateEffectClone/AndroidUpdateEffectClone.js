import React from "react"
import styled from "styled-components"
import CircleSVG from "@assets/circle-animation.svg"

import "./AndroidUpdateEffectClone.css"

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
  svg {
    max-width: 100%;
  }
`

export default () => <Wrapper>
  <a href="https://www.youtube.com/watch?v=WZIGwN-5Ioo">
    <CircleSVG />
  </a>
</Wrapper>
