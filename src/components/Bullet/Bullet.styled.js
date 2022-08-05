import styled from "styled-components";

export const StyledBulletWrapper = styled.div`
    display: flex;
`
export const StyledBulletIconWrapper = styled.div`
    padding-top: ${({ theme: { spacings } }) => spacings.m4};
    margin-right: ${({ theme: { spacings } }) => spacings.m8};
`
