import express from 'express';
import bodyParser from 'body-parser';

const app = express()
const PORT = 1337;

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res)=>{

    res.send('Hola')

})

app.listen(PORT,() => console.log(`Llegue al server http://localhost:${PORT}`))
