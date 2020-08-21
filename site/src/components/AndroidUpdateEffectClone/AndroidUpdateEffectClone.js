import React from "react"
import styled from "styled-components"
import CircleSVG from "@assets/circle-animation.svg"

import "./AndroidUpdateEffectClone.css"

const Wrapper = styled.div`
  max-width: 100%;
  
  svg {
    max-width: 100%;
  }
`

export default () => <Wrapper>
  <a href="https://www.youtube.com/watch?v=WZIGwN-5Ioo">
    <CircleSVG />
  </a>
</Wrapper>
