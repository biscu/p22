import "./Wrapper.scss"

export default function Wrapper (props) {
  return (
    <div className="wrapper">
        {props.children}
    </div>
  )
}
