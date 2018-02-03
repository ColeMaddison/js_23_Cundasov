'use strict';

$(document).ready(function () {
    // change priorities handler
    $(document.body).on('click', '.priorityControl input', function (event) {
        // get selected priority to change to
        var selectedPriority = parseInt(this.dataset.changepriority);
        // get current todo name
        var currentTodoName = event.target.parentNode.parentNode.children[0].children[0].innerText;
        var priorityClasses = ['priorityM', 'priorityI', 'priorityB', 'priorityA'];

        //get current local storage
        var localStorageContent = JSON.parse(localStorage.getItem('todo'));
        // change priotity in local storage and add the class for the priority color
        for (var i = 0; i < localStorageContent.length; i++) {
            if (localStorageContent[i].name === currentTodoName) {
                localStorageContent[i].priority = selectedPriority;
                localStorage.setItem('todo', JSON.stringify(localStorageContent));
                var selectedLi = event.target.parentNode.parentNode;
                selectedLi.className = '';
                selectedLi.classList.add(priorityClasses[selectedPriority - 1]);
            }
        }
    });
});
