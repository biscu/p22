import "./Card.style.js"
import { Heading } from "../Typography/Typography"
import { CardWrapper, StyledImage } from "./Card.style.js"

export default function Card ( props ) {
  return (
    <CardWrapper>
      <Heading {...props}/>
      <StyledImage src={props.image} alt={props.alt}></StyledImage>
    </CardWrapper>
  )
}
