import "./styles/css/materialIcons.css";
//import "./styles/css/material.yellow-red.min.css";
import "./styles/sass/index.scss";
import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

let [img0, img1, img2] = [
	"http://vignette2.wikia.nocookie.net/disney/images/5/55/Pirates-of-the-Carribbean-Captain-Jack-Sparrow-620x350.jpg/revision/latest?cb=20161116164833&path-prefix=ru",
	"https://s.appleinsider.ru/2016/01/tim-cook-1.jpg",
	"http://stuki-druki.com/aforizms/gates01.jpg"
];
const dataFromServer = [
	{ id: 0, name:"Jack VOROBEI :)", img: img0, conters: 10, follow: true, ides: 0, following: 20, followers: 70 },
	{ id: 1, name:"Tim Cook", img: img1, conters: 20, follow: false, ides: 10, following: 20, followers: 70 },
	{ id: 2, name:"Bill Gates", img: img2, conters: 30, follow: true, ides: 0, following: 20, followers: 70 },
	{ id: 3, name:"Jack VOROBEI :)", img: img0, conters: 40, follow: false, ides: 50, following: 1059, followers: 70 },
	{ id: 4, name:"Jack VOROBEI :)", img: img1, conters: 50, follow: true, ides: 0, following: 20, followers: 70 },
	{ id: 5, name:"Jack VOROBEI :)", img: img2, conters: 60, follow: false, ides: 53, following: 20, followers: 70 },
	{ id: 6, name:"Bill Gates", img: img0, conters: 70, follow: false, ides: 0, following: 20, followers: 70 },
	{ id: 7, name:"Bill Gates", img: img1, conters: 228, follow: false, ides: 77, following: 20, followers: 70 },
	{ id: 8, name:"Bill Gates", img: img2, conters: 1111, follow: false, ides: 0, following: 20, followers: 70 },
	{ id: 9, name:"Jack VOROBEI :)", img: img0, conters: 1448, follow: true, ides: 5888, following: 20, followers: 70 },
	{ id: 10, name:"Bill Gates", img: img1, conters: 1008, follow: false, ides: 0, following: 20, followers: 70 },
];

ReactDOM.render(
	<App data={dataFromServer}/>,
	document.getElementById("root")
)