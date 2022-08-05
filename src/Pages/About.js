import Wrapper from "../components/Wrapper/Wrapper";
import Theme from "../components/Theme/Theme.style";
import {Paragraph, Heading1, Heading2, Hero} from "../components/Typography/Typography.style"

function About() {
  return (
    <Theme>
        <div className="App">
          <Wrapper>
          <Hero> Hero </Hero>
          <Heading1> Heading1 </Heading1>
          <Heading2> Heading2 </Heading2>
          <Paragraph> Paragraph </Paragraph>
          <Paragraph><i>*Crowd cheering*</i></Paragraph>
          <Paragraph><i>Davide enter the room, shakes hand to the presenter and sits down.</i></Paragraph>
          <Paragraph>- Welcome, Davide! How do you feel?</Paragraph>
          <Paragraph>- It's good to be here Shaun. It's been a while...</Paragraph>
          <Paragraph>- Indeed, two years. Tell us, what have you been up to?</Paragraph>
          <Paragraph><i>A smile grows on Davide's face.</i></Paragraph>
          <Paragraph>- I have been good. Changed country, changed job..</Paragraph>
          </Wrapper>
        </div>
      </Theme>
  )
}

export default About