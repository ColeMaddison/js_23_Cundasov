"use strict";$(document).ready(function(){$(document.body).on("click",".stateControl button",function(){for(var e=JSON.parse(localStorage.getItem("todo")),t={changeDoneBtn:1,changeProgressBtn:2,changeTodoBtn:3,changeRemovedBtn:4}[$(this)[0].className],n=$(this)[0].parentNode.parentNode.children[0].children[0].innerText,o=0;o<e.length;o++)e[o].name===n&&(e[o].content=t,localStorage.setItem("todo",JSON.stringify(e)),populateContents(e[o].name,e[o].comment,e[o].priority,t),$(this)[0].parentNode.parentNode.remove(),$(window).scrollTop(0))})});