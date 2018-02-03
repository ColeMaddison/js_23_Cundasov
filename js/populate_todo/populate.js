'use strict';

// create list template
let populateContents =  (name, comment, priority, content) => {
    // svg signs for buttons
    let doneSign = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>';
    let progressSign = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"/></svg>';
    let todoSign = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM8.5 15H7.3l-2.55-3.5V15H3.5V9h1.25l2.5 3.5V9H8.5v6zm5-4.74H11v1.12h2.5v1.26H11v1.11h2.5V15h-4V9h4v1.26zm7 3.74c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1V9h1.25v4.51h1.13V9.99h1.25v3.51h1.12V9h1.25v5z"/></svg>';
    let removedSign = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>';

    let selectedContent = `[data-content=${content}]`; 
    let todosList = $(selectedContent);
    let li = $('<li></li>');
    todosList.append(li);

    // fill the li with the priority color
    let priorityClasses = ['priorityM', 'priorityI', 'priorityB', 'priorityA'];
    li.className = '';
    li.addClass(priorityClasses[priority-1]);

    //create and add name and comment for the todo
    let infoDiv = $('<div></div>');
    infoDiv.addClass('todoInfo');
    let infoNameSpan = $('<span></span>');
    infoNameSpan.addClass('todoName');
    infoNameSpan.html(name);

    let infoCommentSpan = $('<span></span>');
    infoCommentSpan.addClass('todoComment');
    infoCommentSpan.html(comment);

    infoDiv.append(infoNameSpan, infoCommentSpan);

    // create and add buttons for the priority control
    let priorityDiv = $('<div></div>');
    priorityDiv.addClass("priorityControl");
    // Minor button
    let priorityBtnM = $('<input></input>');
    priorityBtnM.attr('type', 'button');
    priorityBtnM.attr('value', 'M');
    priorityBtnM.attr('data-changePriority', '1');
    // Important button
    let priorityBtnI = $('<input></input>');
    priorityBtnI.attr('type', 'button');
    priorityBtnI.attr('value', 'I');
    priorityBtnI.attr('data-changePriority', '2');
    // Blocker button
    let priorityBtnB = $('<input></input>');
    priorityBtnB.attr('type', 'button');
    priorityBtnB.attr('value', 'B');
    priorityBtnB.attr('data-changePriority', '3');
    // ASAP button
    let priorityBtnA = $('<input></input>');
    priorityBtnA.attr('type', 'button');
    priorityBtnA.attr('value', 'A');
    priorityBtnA.attr('data-changePriority', '4');
    priorityDiv.append(priorityBtnM, priorityBtnI, priorityBtnB, priorityBtnA);

    // create and add send to server buttons
    let sendDiv = $('<div></div>');
    sendDiv.addClass('sendServer');
    // ajax button
    let ajaxButton = $('<input></input>');
    ajaxButton.attr('value', 'AJAX');
    ajaxButton.attr('type', 'button');
    // websocket button
    let socketButton = $('<input></input>');
    socketButton.attr('value', 'Socket');
    socketButton.attr('type', 'button');
    sendDiv.append(ajaxButton, socketButton);

    // create and add state control buttons
    let stateDiv = $('<div></div>');
    stateDiv.addClass('stateControl');
    // change to done button
    let changeDone = $('<button></button>');
    changeDone.addClass('changeDoneBtn');
    changeDone.html(todoSign);
    // change to in progress sign
    let changeProgress = $('<button></button>');
    changeProgress.addClass('changeProgressBtn');
    changeProgress.html(progressSign);
    // change to to do sigh
    let changeTodo = $('<button></button>');
    changeTodo.addClass('changeTodoBtn');
    changeTodo.html(doneSign);
    // change to removed sign
    let changeRemoved = $('<button></button>');
    changeRemoved.addClass('changeRemovedBtn');
    changeRemoved.html(removedSign);

    stateDiv.append(changeDone, changeProgress, changeTodo, changeRemoved);


    li.append(infoDiv, priorityDiv, stateDiv, sendDiv);
    todosList.append(li);
}


// clear form
let clearIputFields = () => $('.form')[0].reset();