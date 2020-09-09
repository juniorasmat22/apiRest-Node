const {Router}=require('express');
const router=Router();
const movies=require('../ejemplo.json');

router.get('/',(req,res)=>{
    res.json(movies);
});
//peticion post
router.post('/',(req,res)=>{
    const {title,director,year,rating}=req.body;
    if(title && director  && year  && rating){
        const id=movies.length+1;
        const newMovie={...req.body,id};
        movie.push(newMovie);
        res.json('save');
    }else{
        res.json('error');
    }
    res.send("recibido");
});
//peticion delete  :id es el parametro que ñempasaremos
router.delete('/:id',(req,res)=>{
//obtener el parametro para buscar la pelicula
const {id}=req.params
});

module.exports=router;