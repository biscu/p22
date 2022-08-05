import styled from "styled-components";

export const Symbol = styled.p`
    line-height: 1;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.xLarge};
    font-family: "Firs";
    margin-bottom: ${({ theme: { spacings } }) => spacings.m16};
    margin-top: ${({ theme: { spacings } }) => spacings.m0};
    color: ${({ theme: { colors } }) => colors.text};
    font-weight: 400;
`
export const Hero = styled.h1`
    line-height: 1.3;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.hero};
    font-family: "Firs";
    margin-bottom: ${({ theme: { spacings } }) => spacings.m16};
    margin-top: ${({ theme: { spacings } }) => spacings.m0};
    color: ${({ theme: { colors } }) => colors.text};
    opacity: ${({ theme: { opacity } }) => opacity.light};
    font-weight: 600;
    
    @media (max-width: 768px) {
        font-size: ${({ theme: { fontSizes } }) => fontSizes.xLarge};
`
export const Heading1 = styled.h1`
    line-height: 1.5;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.Xlarge};
    font-family: "Firs";
    margin-bottom: ${({ theme: { spacings } }) => spacings.m16};
    margin-top: ${({ theme: { spacings } }) => spacings.m0};
    color: ${({ theme: { colors } }) => colors.text};
    opacity: ${({ theme: { opacity } }) => opacity.medium};
    font-weight: 600;
`
export const Heading2 = styled.h2`
    line-height: 1.5;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
    font-family: "Firs";
    margin-bottom: ${({ theme: { spacings } }) => spacings.m16};
    margin-top: ${({ theme: { spacings } }) => spacings.m0};
    color: ${({ theme: { colors } }) => colors.text};
    opacity: ${({ theme: { opacity } }) => opacity.medium};
    font-weight: 600;
`
export const Paragraph = styled.p`
    line-height: 1.75;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
    margin-bottom: ${({ theme: { spacings } }) => spacings.m24}; 
    margin-top: ${({ theme: { spacings } }) => spacings.m0};
    color: ${({ theme: { colors } }) => colors.text}; 
    opacity: ${({ theme: { opacity } }) => opacity.strong}; 
    font-family: "Inter";
`

