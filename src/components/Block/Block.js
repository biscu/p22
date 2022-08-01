import { Heading, Symbol } from "../Typography/Typography"
import { StyleBlock, BlockImage, BlockP } from "./Block.style"

export default function Block (props) {
  return (
        <StyleBlock>
          <Symbol {...props}/>
          <Heading {...props}/>
          <BlockP> {props.paragraph} </BlockP>
          <BlockImage 
            noImage={props.noImage} 
            src={props.image} 
            alt={props.alt}>
          </BlockImage>
        </StyleBlock>
  )
}
