const express = require('express');
const cors=require('cors');
const mainRouter=require('./src/router/index');

const app=express();
app.use(cors());
app.use('/api/v1',mainRouter);

const PORT=process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`listning on ${PORT} port`);
})