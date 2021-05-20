  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBwxh0NqgUeAIZaQcATeENsUW_w9XU5hNk",
    authDomain: "perforaciones-horizontal-5ab7c.firebaseapp.com",
    projectId: "perforaciones-horizontal-5ab7c",
    storageBucket: "perforaciones-horizontal-5ab7c.appspot.com",
    messagingSenderId: "1083446609504",
    appId: "1:1083446609504:web:3059259dd62296f8346505",
    measurementId: "G-61PPPKYKD6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();



/*   const dbRef = firebase.database().ref();
  const usersRef = dbRef.child('cotizacion-web');
  console.log('userRef', usersRef) */
/*   const dbRef = firebase.database('cotizacion-web');
  console.log('dbRef', dbRef) */