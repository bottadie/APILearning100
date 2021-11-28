import express from 'express';
import {v4 as uuidv4} from 'uuid';
import { collection, addDoc,getDocs } from "firebase/firestore";
import { getFirestore } from 'firebase/firestore';

import app from '../firebase.js';

const router = express.Router();

router.get('/', async function (req, res) {
    const db = getFirestore(app);
    console.log(db)
    
        const citiesCol = collection(db, 'PruebaCol');
        const citySnapshot = await getDocs(citiesCol);
        const cityList = citySnapshot.docs.map(doc => doc.data());
       
  //  var admin = require('firebase-admin');
    //    const firebaseConfig = require('../firebaseConfig.json');
    //
     //   admin.initializeApp({
       //     credential: admin.credential.cert(firebaseConfig),
         //   databaseURL: 'https://gundies.firebaseio.com'
     //   });
    
       // let db = admin.firestore();
        

        res.send(cityList)
})


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

