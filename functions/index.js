const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore()
const functions = require("firebase-functions");
const json = {
    "book": [
        
        {
            "id":"01",
            "language": "Java",
            "edition": "third",
            "author": "Herbert Schildt"
        },
        
        {
            "id":"07",
            "language": "C++",
            "edition": "second",
            "author": "E.Balagurusamy"
        }
    ]
};
exports.helloWorldEnkhmunkh= functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send(json);
});
exports.enkhmunkhFunctions = functions.firestore
    .document('enkhmunkh/test/shorted/{shortedId}')
    .onWrite(async (change, context) =>  {
        // console.log(JSON.stringify(change));
        // console.log(JSON.stringify(context));
        const data = await change.after.data(); 
        // console.log(context.params.shortedId);
        await db.collection(`enkhmunkh/test/${data.user}`)
        .doc(`${context.params.shortedId}`)
        .set({
            outputUrl: data.outputUrl, 
            inputUrl: data.inputUrl
            // [data.outputUrl]: data.inputUrl
        })
    });