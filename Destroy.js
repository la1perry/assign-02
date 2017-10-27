
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


    function remove(id){
        db.ref.child(id).once('value', function(snapshot){
            snapshot.ref.remove();
        })
    }

    remove(5);




    //   function removePerson(id){
//     db.child(id).remove();
//     }
//     removePerson('2');
