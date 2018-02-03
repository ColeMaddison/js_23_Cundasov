'use strict';

$(document).ready(function () {
    // filter buttons handler
    $(document.body).on('click', '.stateFilter input', function (event) {
        var selectedFilter = event.target.dataset.statefilter;
        var inserter = $('.inserter');
        var selectedHString = '[data-stateH="' + selectedFilter + '"]';
        var selectedH = $(selectedHString);
        var selectedUl = $('.' + selectedFilter);

        selectedUl.insertAfter(inserter);
        selectedH.insertAfter(inserter);
    });
});
