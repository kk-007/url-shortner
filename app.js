const express = require('express');
const app = express();
const CONFIG = require('./config');

app.use(express.json());
app.use('/',require('./route'));
app.use('/api/shorten',require('./route/url'));

app.listen(CONFIG.PORT,console.log(`Server running at: http://localhost:${CONFIG.PORT}/`));