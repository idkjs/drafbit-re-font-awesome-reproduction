'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var ExampleStyles$DrafbitReFontAwesome = require("./ExampleStyles.bs.js");
var BlinkingGreeting$DrafbitReFontAwesome = require("./BlinkingGreeting/BlinkingGreeting.bs.js");
var BlinkingGreetingReact$DrafbitReFontAwesome = require("./BlinkingGreetingReact/BlinkingGreetingReact.bs.js");

var style = document.createElement("style");

document.head.appendChild(style);

style.innerHTML = ExampleStyles$DrafbitReFontAwesome.style;

function makeContainer(text) {
  var container = document.createElement("div");
  container.className = "container";
  var title = document.createElement("div");
  title.className = "containerTitle";
  title.innerText = text;
  var content = document.createElement("div");
  content.className = "containerContent";
  container.appendChild(title);
  container.appendChild(content);
  document.body.appendChild(container);
  return content;
}

ReactDom.render(React.createElement(BlinkingGreeting$DrafbitReFontAwesome.make, {
          children: "Hello Reason!"
        }), makeContainer("Blinking Greeting"));

ReactDom.render(React.createElement(BlinkingGreetingReact$DrafbitReFontAwesome.make, {
          children: "Hello Rescript!"
        }), makeContainer("Blinking Greeting React"));

exports.style = style;
exports.makeContainer = makeContainer;
/* style Not a pure module */
