var router = require('express').Router();

router.get('/board/sub/sports',(req,res)=>{
    res.send('board for sport')
})
router.get('/board/sub/games',(req,res)=>{
    res.send('board for game')
})

module.exports=router;