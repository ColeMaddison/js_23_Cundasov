"use strict";var todos=localStorage.length?JSON.parse(localStorage.getItem("todo")):[];$(document).ready(function(){for(var o in todos)populateContents(todos[o].name,todos[o].comment,todos[o].priority,todos[o].content)});