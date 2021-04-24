const express = require('express')
const router = new express.Router

router.post('/', (req,res) => {
    if(req.body.message == 'hello'){
        return res.status(200).send()
    }
    res.status(400).send()
})

module.exports=router