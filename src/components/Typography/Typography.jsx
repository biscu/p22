import { StyledHeading1, StyledSymbol, StyledHero } from "./Typography.style"

export function Paragraph() {
  return (
    <div>Typography</div>
  )
}

export function Hero (props) {
    return (
      <StyledHero>{props.hero}</StyledHero>
    )
  }

export function Heading(props) {
return (
    <StyledHeading1> {props.title} </StyledHeading1>
    )
}
export function Symbol(props) {
    return (
        <StyledSymbol> {props.symbol} </StyledSymbol>
        )
    }

