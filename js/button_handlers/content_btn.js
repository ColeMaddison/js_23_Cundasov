'use strict';

$(document).ready(function(){
    // change content on button click
    $(document.body).on('click', '.stateControl button' , function(){
        let classExplanation = {
            changeDoneBtn: 1,
            changeProgressBtn: 2,
            changeTodoBtn: 3, 
            changeRemovedBtn: 4
        };
        // get current local storage
        let localStorageContent = JSON.parse(localStorage.getItem('todo'));
        // get the required state
        let changeToStateId = classExplanation[$(this)[0].className];
        let currentTodoName = $(this)[0].parentNode.parentNode.children[0].children[0].innerText;
        // change local storage info of the element, repopulate in the new list and remove from the old one
        for(let i = 0; i<localStorageContent.length; i++){
            if(localStorageContent[i].name === currentTodoName){
                localStorageContent[i].content = changeToStateId;
                localStorage.setItem('todo', JSON.stringify(localStorageContent));
                populateContents(localStorageContent[i].name, localStorageContent[i].comment, localStorageContent[i].priority, changeToStateId);
                $(this)[0].parentNode.parentNode.remove();
                $(window).scrollTop(0);
            }
        }
    });
});