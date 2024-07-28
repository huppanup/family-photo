import React, { useContext, useState, useEffect } from "react"
import {auth, firestore} from "../firebase"
import { deleteUser } from "firebase/auth";
import {doc, setDoc, onSnapshot} from 'firebase/firestore'


const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(true)

  async function signup(uid, password) {
    const user = (await auth.createUserWithEmailAndPassword( uid + '@sample.com', password));
    await setDoc(doc(firestore,"users",user.user.uid),{id: uid, pw: password, verified: false});
    return user;
  }

  function login(uid, password) {
    return auth.signInWithEmailAndPassword(uid + '@sample.com', password)
  }

  function logout() {
    return auth.signOut()
  }


  function deleteAccount(){
    return deleteUser(currentUser)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
        console.log(user);
      setCurrentUser(user);
      if (user){
        console.log("User exists")
        const unsub = onSnapshot(doc(firestore, "users", user.uid), (doc) => {
            console.log(doc.data())
          setIsVerified(doc.data().verified);
        });
      }
      setLoading(false);
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    isVerified,
    login,
    signup,
    logout,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}