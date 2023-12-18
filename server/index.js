import express from 'express'
import * as tf from '@tensorflow/tfjs-node';

app = express()
const PORT = 8000

app.get('/predict', async (req,res)=>{
})

app.listen(PORT,()=>{
    console.log('we runnin');
})