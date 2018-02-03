'use strict';

const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());

app.get('/', (req, res) => res.send('Hello'));

app.listen(8000, () => console.log('Server listen on port 8000...'));