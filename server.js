import express from 'express'

const app = express();


app.get('/',(req, res) =>  res.send('Hello World'));


const PORT = 9999;

app.listen(PORT);
