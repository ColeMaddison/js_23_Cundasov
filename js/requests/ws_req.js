'use strict';

$(document).ready(() => {
    // send websocket button handler
    $(document.body).on('click', '.sendServer input:nth-child(2)', function(){
        let ws = new WebSocket('ws://echo.websocket.org/');
        let message = 'Houston Hello!';

        ws.onopen = event => {
            ws.send(message);
            console.log('ws - message sent...');
        }

        ws.onclose = event => console.log('ws - connection closed.');

        ws.onmessage = event => console.log(`ws - got response: ${event.data}`);

        ws.onerror = event => console.log('ws - ERROR!');
    });
});