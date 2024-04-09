import React, { useState, useEffect } from 'react'
import { useFirebase } from '../context/firebase';
import UserCard from '../components/UserCard';



const Homepage = () => {
  const firebase = useFirebase();
  const [data, setData] = useState([]);

  // get data from firebase database
  useEffect(() => {
    firebase.listAllUsers().then((data) => {
      setData(data.docs);
    }, [])

  })


  return (
    <>{!data ? <h1 className='text-2xl font-bold text-center text-green-600'>Loading...</h1> :
      <div className='flex justify-center'>
        <div className='grid grid-cols-3 max-w-fit gap-16'> {data.map((user) => (<UserCard key={user.data().userID} id={user.id} user={user.data()} />))}
        </div>
      </div>
    }


    </>

  )
}

export default Homepage