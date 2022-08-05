import React from 'react'
import Wrapper from "../components/Wrapper/Wrapper";
import Theme from "../components/Theme/Theme.style";
import { Hero, Heading1, Heading2, Paragraph} from "../components/Typography/Typography.style"

function StyleGuide() {
  return (
    <Theme>
      <Wrapper>
        <Hero> Hero </Hero>
        <Heading1> Heading1 </Heading1>
        <Heading2> Heading2 </Heading2>
        <Paragraph> Paragraph </Paragraph>
      </Wrapper>
    </Theme>
  )
}

export default StyleGuide