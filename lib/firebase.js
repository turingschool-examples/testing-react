import firebase from 'firebase';
var config = {
{ apiKey: "AIzaSyCCezG64aQOnO65WZFMsVz7kOy7xcU4COE",
  authDomain: "grocery-list-763ea.firebaseapp.com",
  databaseURL: "https://grocery-list-763ea.firebaseio.com",
  storageBucket: "grocery-list-763ea.appspot.com",
  messagingSenderId: "583866695058"
};

export default firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();

export function signIn() {
  return firebase.auth().signInWithPopup(provider);
}

export function logOut(){
  return firebase.auth().signOut()
}

export function deleteItem(id){
  return firebase.database().ref('ideas/' + id).remove()
}

export const reference = firebase.database().ref('ideas');
