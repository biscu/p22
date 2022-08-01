import styled from "styled-components";

export const StyledData = styled.h3`
    line-height: 1.3;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.xLarge};
    font-family: "Firs";
    margin-bottom: ${({ theme: { spacings } }) => spacings.m8};
    margin-top: ${({ theme: { spacings } }) => spacings.m0};
    color: ${({ theme: { colors } }) => colors.positive};
    opacity: ${({ theme: { opacity } }) => opacity.light};
`

export const StyledDataLabel = styled.p`
    line-height: 1.3;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
    font-family: "Firs";
    margin-bottom: ${({ theme: { spacings } }) => spacings.m0};
    margin-top: ${({ theme: { spacings } }) => spacings.m0};
    color: ${({ theme: { colors } }) => colors.text};
    opacity: ${({ theme: { opacity } }) => opacity.strong};
`

export const StyledDataInner = styled.div`
    padding: 24px;
    margin-bottom: ${({ theme: { spacings } }) => spacings.m24};
    margin-top: ${({ theme: { spacings } }) => spacings.m0};
    margin-: ${({ theme: { spacings } }) => spacings.m0};
    background-color: ${({ theme: { bg } }) => bg.image};
    border-radius: 8px;
    flex: 1;
`
export const StyledDataWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: ${({ theme: { spacings } }) => spacings.m24};
`

export const StyledDataText = styled.span`
    border-radius: 8px; 
    background-color: ${({ theme: { bg } }) => bg.image};
    padding: ${({ theme: { spacings } }) => spacings.m8};
    color: ${({ theme: { colors } }) => colors.positive};
    display:inline-block;
`

