
import styled from "styled-components";


export const CardWrapper = styled.div`
    margin-bottom: ${({ theme: { spacings } }) => spacings.m40};
`
export const StyledImage = styled.img`
    height:auto;
    width:100%;
    border-radius:8px;
    background-color: ${({ theme: { bg } }) => bg.image};
`