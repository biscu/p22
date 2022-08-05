import "./Card.style.js"
import { Heading1 } from "../Typography/Typography.style"
import { CardWrapper, StyledImage } from "./Card.style.js"

export default function Card ( props ) {
  return (
    <CardWrapper>
      <Heading1> {props.heading1} </Heading1>
      <StyledImage src={props.image} alt={props.alt}></StyledImage>
    </CardWrapper>
  )
}
