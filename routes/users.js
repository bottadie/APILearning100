import express from 'express';
import {v4 as uuidv4} from 'uuid';
import { collection, addDoc,getDocs } from "firebase/firestore";

import db from '../firebase.js';

const router = express.Router();

router.get('/',(req,res)=>{
   // const usersCol = collection(db, 'users');
    //const usersDocs = getDocs(usersCol)
     //   });
   //  const usersCol = collection(db, 'users');
     //console.log(usersCol)
     async function quickstartListen(db) {
        // [START firestore_setup_dataset_read]
        const snapshot = await db.collection('users').get();
        snapshot.forEach((doc) => {
          console.log(doc.id, '=>', doc.data());
        })}});


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

