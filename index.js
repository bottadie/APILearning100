import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js'

const app = express()
const PORT = 1337;

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');


app.use('/users',usersRoutes);

app.get('/', (req,res)=>{

    res.send('Hola')

})

app.listen(PORT,() => console.log(`Llegue al server http://localhost:${PORT}`))
