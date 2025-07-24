
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyBScVtOapoSSO9TsgekpmMnmJNDoLmaf38",
  authDomain: "netflix-clone-de8e8.firebaseapp.com",
  projectId: "netflix-clone-de8e8",
  storageBucket: "netflix-clone-de8e8.firebasestorage.app",
  messagingSenderId: "735219417079",
  appId: "1:735219417079:web:6a829064354f9819ab78f2"
};


const app = initializeApp(firebaseConfig);
const auth= getAuth(app)

const db=getFirestore(app)

const signup= async (name,email,password)=>{
try{
   const response= await createUserWithEmailAndPassword(auth,email,password)
     const user=response.user;
     await addDoc(collection(db,"user"),{
        uid:user.uid,
        name,
        authProvider: "local",
        email,
     })
}
catch(error){
 console.log(error);
toast.error(error.code.split("/")[1].split("-").join(" "))
}
}

const login=async(email,password)=>{
    try{
      await signInWithEmailAndPassword(auth,email,password);
    }
    catch(error)
    {
      console.log(error)
    toast.error(error.code.split("/")[1].split("-").join(" "))
    }
}
const logout=()=>{
    signOut(auth);
}

export {auth,db,login,signup, logout};
