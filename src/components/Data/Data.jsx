import React from 'react'
import { StyledData, StyledDataInner, StyledDataLabel, StyledDataWrapper, StyledDataText } from './Data.style'

export function Data (props) {
  return (
    <StyledDataWrapper>
        <StyledDataInner>
            <StyledData> {props.data1}</StyledData>
            <StyledDataLabel>{props.label1}</StyledDataLabel>
        </StyledDataInner>
        <StyledDataInner>
            <StyledData> {props.data2}</StyledData>
            <StyledDataLabel>{props.label2}</StyledDataLabel>
        </StyledDataInner>
    </StyledDataWrapper>
  )
}

export function DataText (props) {
  return (
    <StyledDataText> {props.dataText} </StyledDataText>
  )
}
