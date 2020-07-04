const express = require('express');
const CONFIG = require('../config');
const { param } = require('./url');
const router = express.Router();

router.get('/:id',(req,res)=>{
    let obj=CONFIG.DATA.find(e=>e.id === req.params.id);
    if(obj){
        res.redirect(obj.fullURL);
    }else{
        res.status(401).send('not found');
    }
});

module.exports = router;