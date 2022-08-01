import Header from "../components/Header/Header";
import Wrapper from "../components/Wrapper/Wrapper";
import Card from "../components/Card/Card";
import { P, H } from "../components/Typography/Typography.style"
import Theme from "../components/Theme/Theme.style";
import HM from "../Images/Test.jpg";

function About() {
  return (
    <Theme>
        <div className="App">
          <Wrapper>
            <P><i>*Crowd cheering*</i></P>
            <P><i>Davide enter the room, shakes hand to the presenter and sits down.</i></P>
            <P>- Welcome, Davide! How do you feel?</P>
            <P>- It's good to be here Shaun. It's been a while...</P>
            <P>- Indeed, two years. Tell us, what have you been up to?</P>
            <P><i>A smile grows on Davide's face.</i></P>
            <P>- I have been good. Changed country, changed job..</P>
          </Wrapper>
        </div>
      </Theme>
  )
}

export default About