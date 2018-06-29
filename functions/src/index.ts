import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
 export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
 });


export const addMessage = functions.https.onRequest(async (request, response) => {
 const original = request.query.text;
 // Push the new message into the Realtime Database using the Firebase Admin SDK.
 const snapshot = await admin.database().ref('/messages').push({original: original})
  // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
  return response.redirect(303, snapshot.ref.toString());
});
