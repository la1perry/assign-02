
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

// remove contact 

    function remove(id){
        db.ref.child(id).once('value', function(snapshot){
            snapshot.ref.remove();
        })
    }

    // remove(5);
   
    
function removeTarget(id){
  
    let deleteNode=db.child(id).child('address');
    
    deleteNode.once('value')
    .then(function(snapshot){
snapshot.ref.remove();    })
}
    removeTarget(1);
    
    // remove node
// function removeNode(id){
// const query=id.child('address');
// query.remove();
// query.orderByChild('address').equalTo('WonderWarf');
// query.once('value', data=>console.log(data.val()));
// .then(function(snapshot){
// snapshot.ref.remove()})
// }

// const query=db.orderByChild('name').equalTo('Carl');
// query.once('value', data=> console.log(data.val()));


    //   function removePerson(id){
//     db.child(id).remove();
//     }
//     removePerson('2');
