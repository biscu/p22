import "./Header.scss"
import { Heading1, Heading2, Hero, Paragraph } from "../Typography/Typography.style"

export default function header (props) {
  return (
    <div className="header">
       <Hero> {props.hero} </Hero>
       <Heading1> {props.heading1} </Heading1>
       <Heading2> {props.heading2} </Heading2>
       <Paragraph size="medium"> {props.paragraph } </Paragraph>
    </div>
  )
}
