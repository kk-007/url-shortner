const express = require('express');
const CONFIG = require('./config');
const app = express();

// app.use(express.json());
// app.route('/',require('./route'));
// app.route('/api/shorten',require('./route/url'));
// app.get('/',(req,res)=>{
//     res.send('lala');
// });
app.listen(CONFIG.PORT,`Server running on ${CONFIG.PORT}`)