"use strict";$(document).ready(function(){$(document.body).on("click",".priorityControl input",function(t){for(var r=parseInt(this.dataset.changepriority),e=t.target.parentNode.parentNode.children[0].children[0].innerText,o=["priorityM","priorityI","priorityB","priorityA"],i=JSON.parse(localStorage.getItem("todo")),a=0;a<i.length;a++)if(i[a].name===e){i[a].priority=r,localStorage.setItem("todo",JSON.stringify(i));var n=t.target.parentNode.parentNode;n.className="",n.classList.add(o[r-1])}})});