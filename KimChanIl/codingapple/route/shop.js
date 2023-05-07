var router = require('express').Router();

router.get('/shop/shirts',(req,res)=>{
    res.send('shirt shopping page');
})
router.get('/shop/pants',(req,res)=>{
    res.send('pants shopping page');
})

module.exports=router;