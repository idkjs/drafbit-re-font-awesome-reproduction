'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReactFontawesome = require("@fortawesome/react-fontawesome");
var FreeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var FreeRegularSvgIcons = require("@fortawesome/free-regular-svg-icons");

function BlinkingGreetingReact(Props) {
  var children = Props.children;
  var match = React.useState(function () {
        return true;
      });
  var setShow = match[1];
  React.useEffect((function () {
          var id = setInterval((function (param) {
                  return Curry._1(setShow, (function (previousShow) {
                                return !previousShow;
                              }));
                }), 1000);
          return (function (param) {
                    clearInterval(id);
                    
                  });
        }), []);
  var style = match[0] ? ({
        opacity: "1",
        transition: "opacity 1s"
      }) : ({
        opacity: "0",
        transition: "opacity 1s"
      });
  return React.createElement("div", {
              style: style
            }, React.createElement(ReactFontawesome.FontAwesomeIcon, {
                  icon: FreeRegularSvgIcons.faClock
                }), children, React.createElement(ReactFontawesome.FontAwesomeIcon, {
                  icon: FreeSolidSvgIcons.faXRay,
                  className: "MyIcon"
                }));
}

var make = BlinkingGreetingReact;

exports.make = make;
/* react Not a pure module */
