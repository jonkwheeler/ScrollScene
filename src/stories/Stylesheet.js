import * as React from 'react'

export const Stylesheet = () => (
  <style>
    {`
.w100 {
	width: 100%;
}

.h100 {
	height: 100vh;
}

.mini-trigger {
	width: 10px;
	height: 10px;
	background: yellow;
	position: absolute;
	right: 100px;
}

.mini-trigger.active {
	background: red;
}

.middle{
	top: 50%;
}

.top {
	top: 0;
}

.bottom {
	bottom: 0;
}

.fullscreen-scene {
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 255, 0.05);
	box-shadow: inset 0px 0px 3px 2px #000000;
	position: relative;
	transition: opacity 500ms ease-in-out;
}

.loaded--false {
	opacity: 0;
}

.text-block {
	padding-top: 15vh;
	width: 100%;
	text-align: center;
}

.pos-r {
	position: relative;
}

.pos-f {
	position: fixed;
}

.pos-a {
	position: absolute;
}

.scaled-box{
	width: 50vh;
	height: 35vh;
	background: lightgrey;
	opacity: 0.66;
	margin: 15vh auto 0 auto;
}

.page-padding {
	padding: 10vh 20vw;
}

`}
  </style>
)
