import firebase from "firebase/app";
import "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyAUo7hHsMS-3DCEyh1Okk9b9Y4AiPnOBw8",
    authDomain: "vue-blog-system-2ca2e.firebaseapp.com",
    projectId: "vue-blog-system-2ca2e",
    storageBucket: "vue-blog-system-2ca2e.appspot.com",
    messagingSenderId: "691843420825",
    appId: "1:691843420825:web:ca38f26b752bfb28335e08"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// database setup
let db=firebase.firestore();

export {db};