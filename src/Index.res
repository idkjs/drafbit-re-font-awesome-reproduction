// Entry point

@bs.val external document: {..} = "document"

// We're using raw DOM manipulations here, to avoid making you read
// ReasonReact when you might precisely be trying to learn it for the first
// time through the examples later.
let style = document["createElement"]("style")
document["head"]["appendChild"](style)
style["innerHTML"] = ExampleStyles.style

let makeContainer = text => {
  let container = document["createElement"]("div")
  container["className"] = "container"

  let title = document["createElement"]("div")
  title["className"] = "containerTitle"
  title["innerText"] = text

  let content = document["createElement"]("div")
  content["className"] = "containerContent"

  let () = container["appendChild"](title)
  let () = container["appendChild"](content)
  let () = document["body"]["appendChild"](container)

  content
}

// All 4 examples.
ReactDOM.render(
  <BlinkingGreeting> {React.string("Hello Reason!")} </BlinkingGreeting>,
  makeContainer("Blinking Greeting"),
)
ReactDOM.render(
  <BlinkingGreetingReact> {React.string("Hello Rescript!")} </BlinkingGreetingReact>,
  makeContainer("Blinking Greeting React"),
)
