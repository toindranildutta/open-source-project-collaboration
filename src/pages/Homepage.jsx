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

  

  // <div className="card-body" key={user.data().userID}>
        //   <div className='flex justify-around '>
        //     <div className="flex flex-col items-start ">
        //       <h2 className="text-sm">{user.data().userID}</h2>
        //       <h2 className="text-xl font-bold text-green-600">{user.data().name}</h2>
        //       <h5 className=" ">{user.data().githuburl}</h5>
        //       <h6 className=" mb-2 ">Want Collaboration: {user.data().wantcollaboration ? "Yes" : "No"}</h6>
        //       <button className='bg-green-600 m-4 p-5'>View</button>
        //     </div>
        //   </div>
        // </div>
  return (
    <div className='grid grid-cols-3 '> {data.map((user) => (<UserCard key={user.data().userID} id={user.id} user={user.data()} /> ))}

        

        
     
    </div>

  )
}

export default Homepage