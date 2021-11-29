import express from 'express';
import {v4 as uuidv4} from 'uuid';
import { collection, addDoc,getDocs } from "firebase/firestore";
import { getFirestore } from 'firebase/firestore';
import { queryDatabase } from '../sqltest.js'
import app from '../firebase.js';

const router = express.Router();

router.get('/', async function (req, res) {

  const valuesFromAzure = queryDatabase()
  console.log(valuesFromAzure)
   // const db = getFirestore(app);
    //console.log(db)
    
 //       const citiesCol = collection(db, 'PruebaCol');
   //     const citySnapshot = await getDocs(citiesCol);
     //   const cityList = citySnapshot.docs.map(doc => doc.data());
       // console.log(cityList)
   //cityList.forEach(element => console.log(element.Nombre))
  // res.render("index", { lista: cityList });
res.send(valuesFromAzure)
});

router.get('/:id', async function (req, res) {
  const db = getFirestore(app);

  const citiesCol = collection(db, 'PruebaCol',req.params.id,"Mensajes");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  console.log(cityList)
  res.render("index", { mensaje: cityList });

 // res.send(req)
})


     //   res.send(cityList)



//Funciona el POST
router.post('/',(req,res)=>{

     addDoc(collection(db, "users"), {
        name: "Diego",
      })
  //  const citiesCol = collection(db, 'users');
    res.send("listo agregado")


  //  const user = req.body;
  //  const userID = uuidv4()
   
})


export default router

