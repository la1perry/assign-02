
const firebase=require('firebase');

firebase.initializeApp({
    apiKey: "AIzaSyDQlgQ51SRGdlAuL_SKZlKUsmsB__I6hrE",
      authDomain: "fir-test-a2a78.firebaseapp.com",
      databaseURL: "https://fir-test-a2a78.firebaseio.com",
      projectId: "fir-test-a2a78",
      storageBucket: "fir-test-a2a78.appspot.com",
      messagingSenderId: "46278298725"
  });

  let db=firebase.database().ref('contacts');
  db.update({
"Sarah":"543-4355",
"Chris":"549-2049"
  });

  var show = firebase.app().database().ref();
  show.once("value")
   .then(function (snap) {
   console.log("snap.val()", snap.val());
   });
// const db=firebase.database();
// let ref=db.ref('new');

// const addedRef=ref.child('added');
// addedRef.set({

//     contact:{
//         name:"sarah",
//         phone:"888-8888"
//     },
// someone:{
//     name:"thisguy",
//     phone:"545-2222"
// }
// });

