const express = require('express');
const CONFIG = require('../config');
const validURL = require('valid-url');
const getID = require('getid');
const router = express.Router();

router.post('/',(req,res)=>{
    let { fullURL } = req.body;

    if(validURL.isUri(fullURL)){
        let obj = CONFIG.DATA.find(e=>e.fullURL===fullURL);
        if(!obj){
            let id=getID();
            let chunk={
                fullURL,
                url:`http://localhost:${CONFIG.PORT}/${id}`,
                id
            }
            CONFIG.DATA.push(chunk);
            res.send(chunk);
        }else{
            res.send(obj);
        }
    }else{
        res.status(401).send('URL not found');
    }
});

module.exports = router;