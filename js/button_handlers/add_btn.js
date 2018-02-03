'use strict';

$(document).ready(() => {
    // get the values from the input form and push to global array todos
    $('.addButton').click(() => {
        let todoInputName = $('.inputForm input').val();
        let todoIputComment = $('.inputForm textarea').val();
        let todoInputPriority = parseInt($("input[name='priority']:checked").attr('data-priority'));
        let todoContent = 1;
        
        if(todoInputName && todoIputComment){
            let newTodo = {
                name: todoInputName,
                comment: todoIputComment,
                priority: todoInputPriority,
                content: todoContent,
            }
            todos.push(newTodo);
            localStorage.setItem('todo', JSON.stringify(todos));
            clearIputFields();
            populateContents(todoInputName, todoIputComment, todoInputPriority, todoContent);
        }
    });
});