import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp(functions.config().firebase);

exports.add = functions.https.onRequest((req, res)=>{
   admin.firestore().collection('loan').add({
       text: req.query.text
   }).then(r=>{
       res.send('Credito Creado de Maera Exitosa');
   }).catch(err=>{
       res.send('Error al crear el Credito');
   })
   
});

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
