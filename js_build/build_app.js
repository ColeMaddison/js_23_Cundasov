'use strict';

//var for all the todos, if localstorage is set, get values from localstorage

var todos = localStorage.length ? JSON.parse(localStorage.getItem('todo')) : [];

$(document).ready(function () {
    //populate list with the values from local storage
    for (var i in todos) {
        populateContents(todos[i].name, todos[i].comment, todos[i].priority, todos[i].content);
    }
});
