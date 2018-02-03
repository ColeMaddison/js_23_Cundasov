'use strict';

$(document).ready(() => {
    // send ajax button handler
    $(document.body).on('click', '.sendServer input:nth-child(1)', function(){
        $.ajax({
            method:'GET',
            url: 'http://localhost:8000/',
            dataType: "text",
            data: {'some': 'data'}
        }).done((res) => {
            console.log('AJAX - SUCCESS');
            console.log(res);
        }).fail((res) => {
            console.log('AJAX - FAILED');
            console.log(res);
        });
    });
});