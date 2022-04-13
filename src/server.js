const express = require('express');
const cors=require('cors');
const mainRouter=require('./router');

const app=express();
app.use(cors());
app.use('/api/v1',mainRouter);


app.listen(8080,()=>{
    console.log(`listning on ${8080} port`);
})