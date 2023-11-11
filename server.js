import express from 'express'
import url from './apps/url/domain/index.js'

const app = express();

app.use(express.json())


app.use('/', url)



const PORT = 9999;

app.listen(PORT);
