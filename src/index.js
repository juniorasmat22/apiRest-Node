const express=require('express');
const morgan=require('morgan');
const app=express();
const indexRouter=require('./routes/index');
//seting
app.set('port',process.env.PORT || 3000);
//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json())

//ROUTES
app.use(indexRouter);
app.use('/api/movies',require('./routes/movies'));
//listening server
app.listen(app.get('port') ,()=>{
 console.log("server on port ",app.get('port'));
});