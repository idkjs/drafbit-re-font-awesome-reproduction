// module Icon = {
//   @module("@fortawesome/react-fontawesome") @react.component
//   external make: (~icon: FontAwesome.IconObject.t, ~className: string=?) => React.element = "FontAwesomeIcon"
// }

@react.component
let make = (~children) => {
  let (show, setShow) = React.useState(() => true)

  // Notice that instead of `useEffect`, we have `useEffect0`. See
  // reasonml.github.io/reason-react/docs/en/components#hooks for more info
  React.useEffect0(() => {
    let id = Js.Global.setInterval(() => setShow(previousShow => !previousShow), 1000)

    Some(() => Js.Global.clearInterval(id))
  })

  let style = if show {
    ReactDOM.Style.make(~opacity="1", ~transition="opacity 1s", ())
  } else {
    ReactDOM.Style.make(~opacity="0", ~transition="opacity 1s", ())
  }

  <div style>
    <Icon icon=FontAwesome.FreeRegular.faClock />
    children
    <Icon icon=FontAwesome.FreeSolid.faXRay className="MyIcon" />
  </div>
}
