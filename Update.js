
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


let data={
  address:"WonderWarf"
}

function update(id){
return db.child(id).update(data);
}

update(4);


  db.once('value')
  .then(function(snapshot){
    console.log(snapshot.val())
  })





    // function updateContact(id,newEmail){
  //   db.child(id).update({email: newEmail});
  // }
  // updateContact(5,"Tina.Belcher@gmail.com");
  
    
// function addItem(id, newItem){
//     db.child(id).push({address: newItem});
// }
// addItem(3, "Wonder Warf")