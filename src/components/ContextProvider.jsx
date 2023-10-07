import React, { createContext, useEffect, useState } from 'react';
import  { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider , onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null);

const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const ContextProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true);
    //create User

    const createUser = (email,password) =>{
          setLoading(true)
      return  createUserWithEmailAndPassword(auth,email,password);
   }
   //userLogin

   const userLogin = (email,password)=>{
          setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
   }

   //google Login

   const google = () =>{
     return signInWithPopup(auth, provider)
   }

   //userLogout

   const userLogOut = () => {
     setLoading(true);
     return signOut(auth);
   }

   useEffect(()=>{
         const unSubscribe  = onAuthStateChanged(auth,currentUser =>{
          console.log('User in the auth State change',currentUser)
               setUser(currentUser);
               setLoading(false);
          })
          return () =>{
               unSubscribe();
          }
   },[])
   
    const authInfo = {user,createUser,userLogin,userLogOut,loading};
    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default ContextProvider;