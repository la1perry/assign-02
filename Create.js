
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



const Linda={
  name:"Linda",
  phone:"323-323-2413",
}

function newContact(id, contact){
  db.child(id).set(contact);
}


newContact(2,Linda);


db.once('value')
.then(function(snapshot){
  console.log(snapshot.val());
})


// db.child('1').set({
//   name:"Bob",
//   phone:"030-223-4566"
// });


//   db.update({
// "Sarah":"543-4355",
// "Chris":"549-2049"
//   });


// const query=db.orderByChild('name').equalTo('Carl');
// query.once('value', data=> console.log(data.val()));

// db.on('value',data => console.log(data.val()));

  // var show = firebase.app().database().ref();
  // show.once("value")
  //  .then(function (snap) {
  //  console.log("snap.val()", snap.val());
  //  });


  

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

