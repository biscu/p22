import styled from "styled-components";
import { P } from "../Typography/Typography.style"
import { keyframes } from 'styled-components'

export const StyleBlock = styled.div`
margin-bottom: ${({ theme: { spacings } }) => spacings.m40};
`
const fadeIn = keyframes`
 0% { opacity: 0;}
 100% { opacity: 1; }
 `
export const BlockImage  = styled.img`
    height:auto;
    width:160%;
    margin-left: -180px;
    border-radius:8px;
    ${props => props.noImage &&`
    display:none;`}
    background-color: ${({ theme: { bg } }) => bg.image};
    animation-name: ${fadeIn};
    animation-duration: 0.4s;
    animation-timing-function: cubic-bezier(.65,-0.01,.16,.99);

    @media (max-width: 768px) {
      width:100%;
      margin-left: 0px;
`

  export const BlockP  = styled(P)`
    margin-bottom: ${({ theme: { spacings } }) => spacings.m48};
`