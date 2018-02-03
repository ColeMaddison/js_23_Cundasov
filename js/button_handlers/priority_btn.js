'use strict';

$(document).ready(() => {
    // change priorities handler
    $(document.body).on('click', '.priorityControl input', function(event){
        // get selected priority to change to
        let selectedPriority = parseInt(this.dataset.changepriority);
        // get current todo name
        let currentTodoName = event.target.parentNode.parentNode.children[0].children[0].innerText;
        let priorityClasses = ['priorityM', 'priorityI', 'priorityB', 'priorityA'];

        //get current local storage
        let localStorageContent = JSON.parse(localStorage.getItem('todo'));
        // change priotity in local storage and add the class for the priority color
        for(let i = 0; i<localStorageContent.length; i++){
            if(localStorageContent[i].name === currentTodoName){
                localStorageContent[i].priority = selectedPriority;
                localStorage.setItem('todo', JSON.stringify(localStorageContent));
                let selectedLi = event.target.parentNode.parentNode;
                selectedLi.className = '';
                selectedLi.classList.add(priorityClasses[selectedPriority-1]);
            }
        }
    });
});