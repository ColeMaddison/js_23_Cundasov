'use strict';

$(document).ready(function () {
    // get the values from the input form and push to global array todos
    $('.addButton').click(function () {
        var todoInputName = $('.inputForm input').val();
        var todoIputComment = $('.inputForm textarea').val();
        var todoInputPriority = parseInt($("input[name='priority']:checked").attr('data-priority'));
        var todoContent = 1;

        if (todoInputName && todoIputComment) {
            var newTodo = {
                name: todoInputName,
                comment: todoIputComment,
                priority: todoInputPriority,
                content: todoContent
            };
            todos.push(newTodo);
            localStorage.setItem('todo', JSON.stringify(todos));
            clearIputFields();
            populateContents(todoInputName, todoIputComment, todoInputPriority, todoContent);
        }
    });
});
