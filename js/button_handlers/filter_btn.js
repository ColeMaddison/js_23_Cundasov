'use strict';

$(document).ready(() => {
    // filter buttons handler
    $(document.body).on('click', '.stateFilter input', event => {
        let selectedFilter = event.target.dataset.statefilter;
        let inserter = $('.inserter');
        let selectedHString = `[data-stateH="${selectedFilter}"]`;
        let selectedH = $(selectedHString);
        let selectedUl = $('.' + selectedFilter);

        selectedUl.insertAfter(inserter);
        selectedH.insertAfter(inserter);
    });
});