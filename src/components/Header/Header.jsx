import "./Header.scss"
import { P } from "../Typography/Typography.style"
import { Heading, Hero } from "../Typography/Typography"

export default function header (props) {
  return (
    <div className="header">
       <Hero {...props}/>
       <Heading {...props}/>
       <P size="medium"> {props.subtitle } </P>
    </div>
  )
}
