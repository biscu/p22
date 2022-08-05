import { StyleBlock, BlockImage } from "./Block.style"
import {Paragraph, Heading1, Heading2, Symbol} from "../Typography/Typography.style"

export default function Block (props) {
  return (
        <StyleBlock>
          <Symbol {...props}/>
          <Heading1> {props.heading1} </Heading1>
          <Heading2> {props.heading2} </Heading2>
          <Paragraph> {props.paragraph} </Paragraph>  
          <BlockImage 
            noImage={props.noImage} 
            src={props.image} 
            alt={props.alt}>
          </BlockImage>
        </StyleBlock>
  )
}
