'use strict';

$(document).ready(function () {
    // send ajax button handler
    $(document.body).on('click', '.sendServer input:nth-child(1)', function () {
        $.ajax({
            method: 'GET',
            url: 'http://localhost:8000/',
            dataType: "text",
            data: { 'some': 'data' }
        }).done(function (res) {
            console.log('AJAX - SUCCESS');
            console.log(res);
        }).fail(function (res) {
            console.log('AJAX - FAILED');
            console.log(res);
        });
    });
});
