'use strict';

$(document).ready(function () {
        // send websocket button handler
        $(document.body).on('click', '.sendServer input:nth-child(2)', function () {
                var ws = new WebSocket('ws://echo.websocket.org/');
                var message = 'Houston Hello!';

                ws.onopen = function (event) {
                        ws.send(message);
                        console.log('ws - message sent...');
                };

                ws.onclose = function (event) {
                        return console.log('ws - connection closed.');
                };

                ws.onmessage = function (event) {
                        return console.log('ws - got response: ' + event.data);
                };

                ws.onerror = function (event) {
                        return console.log('ws - ERROR!');
                };
        });
});
