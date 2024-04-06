import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth } from '../firebase'

const AuthDetails = () => {

    const [authUser, setAuthUser] = React.useState(null)

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
          if (user) {
            setAuthUser(user)
          } else {
            setAuthUser(null)
          }
        })

        return () => {
            listen();
        }
    },[])

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('signed out')
        }).catch((error) => {
            console.log(error)
        })
    }

  return (
    <div>{authUser ? <><p>{`Signed In as ${authUser.email}`}</p> <button onClick={userSignOut}>Sign Out</button> </> : <p>SignedOut</p> }</div>
  )
}

export default AuthDetails