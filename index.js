'use strict';
const express = require('express');

let app = express();

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hello World!');
});

app.listen(3000, function() {
    console.log('listening on 3000');
});
