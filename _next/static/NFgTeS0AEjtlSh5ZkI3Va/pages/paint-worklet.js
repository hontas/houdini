(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{231:function(e,t,a){__NEXT_REGISTER_PAGE("/paint-worklet",function(){return e.exports=a(249),{page:e.exports.default}})},249:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),i=a(0),o=a.n(i),r=a(53),l=a.n(r),m=a(13),c=function(e){var t=e.className;return o.a.createElement("div",{className:"jsx-3608163865 "+(t||"")},o.a.createElement("h3",{className:"jsx-3608163865"},"Smooth corners"),o.a.createElement("div",{className:"jsx-3608163865 smooth center-content"},"smooth"),o.a.createElement("div",{className:"jsx-3608163865 unsmooth center-content"},"unsmooth"),o.a.createElement(s.a,{styleId:"3608163865",css:[".smooth.jsx-3608163865,.unsmooth.jsx-3608163865{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;color:white;}",".smooth.jsx-3608163865{background:linear-gradient(deeppink,orangered);-webkit-mask-image:paint(smooth-corners);width:100px;height:100px;}",".unsmooth.jsx-3608163865{background:linear-gradient(deeppink,orangered);border-radius:20px;width:100px;height:100px;margin-left:10px;}"]}))},x=function(e){var t=e.className;return o.a.createElement("div",{className:"jsx-3654873192 "+(t||"")},o.a.createElement("h3",{className:"jsx-3654873192"},"Tooltip"),o.a.createElement("div",{className:"jsx-3654873192 tooltip"},"content"),o.a.createElement(s.a,{styleId:"3654873192",css:[".tooltip.jsx-3654873192{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:2em;color:#fff;height:100px;width:200px;margin:0 auto 50px;background:hsl(193,100%,30%);border-bottom:1px solid transparent;border-image-source:paint(tooltip);border-image-slice:0 0 100% 0;border-image-width:var(--border-width);border-image-outset:var(--border-width);-webkit-transition:.5s;transition:.5s;--tooltip-position:30%;--tooltip-size:30px;--border-width:20px;}",".tooltip.jsx-3654873192:hover{-webkit-animation:moveAround-jsx-3654873192 1s ease-in-out infinite alternate;animation:moveAround-jsx-3654873192 1s ease-in-out infinite alternate;}","@-webkit-keyframes moveAround-jsx-3654873192{from{--tooltip-position:15%;}to{--tooltip-position:85%;}}","@keyframes moveAround-jsx-3654873192{from{--tooltip-position:15%;}to{--tooltip-position:85%;}}"]}))},d=function(e){var t=e.className;return o.a.createElement("div",{className:"jsx-1331754570 "+(t||"")},o.a.createElement("h3",{className:"jsx-1331754570"},"Comhem-bollar"),o.a.createElement("div",{className:"jsx-1331754570 balls"}),o.a.createElement(s.a,{styleId:"1331754570",css:[".balls.jsx-1331754570{--ball-radius:20px;--ball-rotation:0deg;--rotation:0deg;background:paint(comhem-balls);width:250px;height:200px;margin:1em 0;-webkit-transition-property:--ball-radius,--ball-rotation,--rotation;transition-property:--ball-radius,--ball-rotation,--rotation;-webkit-transition-duration:.5s;transition-duration:.5s;-webkit-transition-timing-function:ease;transition-timing-function:ease;}",".balls.jsx-1331754570:hover{-webkit-animation:rotate-jsx-1331754570 1s ease-in-out infinite alternate;animation:rotate-jsx-1331754570 1s ease-in-out infinite alternate;}","@-webkit-keyframes rotate-jsx-1331754570{from{--rotation:0deg;--ball-rotation:0deg;}to{--rotation:180deg;--ball-rotation:180deg;}}","@keyframes rotate-jsx-1331754570{from{--rotation:0deg;--ball-rotation:0deg;}to{--rotation:180deg;--ball-rotation:180deg;}}"]}))},p=function(e){var t=e.className;return o.a.createElement("div",{className:"jsx-2464659663 "+"pacman-container ".concat(t)},o.a.createElement("h3",{className:"jsx-2464659663"},"Pacman"),o.a.createElement("div",{className:"jsx-2464659663 pacman"}),o.a.createElement(s.a,{styleId:"2464659663",css:["h3.jsx-2464659663{color:white;}",".pacman-container.jsx-2464659663{background:black;padding:1em;}",".pacman.jsx-2464659663{--pacman-mouth-open:1;--pacman-mouth-max-open:25%;background-image:paint(pacman);width:100px;height:100px;}",".pacman-container.jsx-2464659663:hover .pacman.jsx-2464659663{-webkit-animation:feed-jsx-2464659663 .25s ease-in-out alternate infinite;animation:feed-jsx-2464659663 .25s ease-in-out alternate infinite;}","@-webkit-keyframes feed-jsx-2464659663{from{--pacman-mouth-open:1;}to{--pacman-mouth-open:0;}}","@keyframes feed-jsx-2464659663{from{--pacman-mouth-open:1;}to{--pacman-mouth-open:0;}}"]}))};t.default=function(){return o.a.createElement("div",{className:"jsx-1188942183"},o.a.createElement(l.a,null,o.a.createElement("script",{src:"static/main.js",className:"jsx-1188942183"})),o.a.createElement(m.a,null),o.a.createElement("div",{className:"jsx-1188942183 paint-worklets"},o.a.createElement("h1",{className:"jsx-1188942183"},"Paint Worklet"),o.a.createElement("blockquote",{className:"jsx-1188942183"},"Web Worker-ish, but light-weight and short lived so they can run every. single. frame."),o.a.createElement("div",{className:"jsx-1188942183 worklets-list"},o.a.createElement(c,{className:"worklets-list__item"}),o.a.createElement(x,{className:"worklets-list__item"}),o.a.createElement(d,{className:"worklets-list__item"}),o.a.createElement(p,{className:"worklets-list__item"})),o.a.createElement("code",{className:"jsx-1188942183"},o.a.createElement("pre",{className:"jsx-1188942183"},"registerPaint('xxx', Class Xxx {})")),o.a.createElement("ol",{className:"jsx-1188942183"},o.a.createElement("li",{className:"jsx-1188942183"},"paintWorklet.addModule('xxx.js');"),o.a.createElement("li",{className:"jsx-1188942183"},"CSS.registerProperty({ name: '--xxx' })"))),o.a.createElement(s.a,{styleId:"1188942183",css:[".paint-worklets.jsx-1188942183{padding:0 1em;}",".worklets-list.jsx-1188942183{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}"]}))}}},[[231,1,0]]]);