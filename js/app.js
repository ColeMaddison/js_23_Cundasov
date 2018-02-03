"use strict";

//var for all the todos, if localstorage is set, get values from localstorage
let todos = localStorage.length ? JSON.parse(localStorage.getItem('todo')) : [];

$(document).ready(() => {                                                                   
    //populate list with the values from local storage
    for(let i in todos){
        populateContents(todos[i].name, todos[i].comment, todos[i].priority, todos[i].content);
    }
});
