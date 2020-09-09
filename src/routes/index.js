const express=require('express');
const router=express.Router();
router.get('/',(req,res)=>{
    res.json({titulo:"hola"});
    res.end();
});
module.exports=router;
