import React from 'react'
import { StyledBulletWrapper, StyledBulletIconWrapper } from './Bullet.styled'
import { FiX } from "react-icons/fi";
import { IconContext } from "react-icons";
import { Paragraph } from '../Typography/Typography.style';


export default function Bullet(props) {
  return (
    <StyledBulletWrapper>
      <StyledBulletIconWrapper>
        <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
          <FiX/>
        </IconContext.Provider>    
      </StyledBulletIconWrapper>

      <Paragraph>{props.paragraph}</Paragraph>
      
    </StyledBulletWrapper>
  )
}
