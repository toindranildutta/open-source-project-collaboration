import React, { useState } from 'react'
import OSPC from '../../assets/images/OSPC.png'
import { NavLink} from "react-router-dom";
import { useFirebase } from '../../context/firebase';

const Header = () => {

	const { isLoggedIn, logoutUser, user } = useFirebase();

	const [darkMode, setDarkMode] = useState(false);


	const handleLogout = () => {
        logoutUser().then(() => {

            console.log('User signed out successfully');
        }).catch((error) => {
            console.error('Error signing out:', error);
        });
    };

	return (
		<nav className={!darkMode ? "bg-blue-900 shadow shadow-gray-300 w-100 px-8 md:px-auto" : "bg-gray-900 shadow shadow-gray-300 w-100 px-8 md:px-auto"}>
			<div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
				{/* <!-- Logo --> */}
				<div className="text-indigo-500 md:order-1">
					{/* <!-- Heroicon - Chip Outline --> */}
					<NavLink to="/home">
						<img src={OSPC} className="h-10" alt="Logo" />
					</NavLink>

				</div>

				<div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
					<ul className="flex font-semibold justify-between">
						{/* <!-- Active Link = text-indigo-500
                Inactive Link = hover:text-indigo-500 --> */}

						<li className='md:py-4' >
							<NavLink
								to="/home"
								className={({ isActive }) => `md:px-4 md:py-2 ${isActive ? "text-green-400" : "text-white"}`
								}> Home
							</NavLink>
						</li>
						
						<li className='md:py-4' >
							<NavLink
								to="/addprofile"
								className={({ isActive }) => `md:px-4 md:py-2 ${isActive ? "text-green-400" : "text-white"}`
								}> Edit Profile
							</NavLink>
						</li>
						<li className='md:py-4' >
							<NavLink
								to="/repo"
								className={({ isActive }) => `md:px-4 md:py-2 ${isActive ? "text-green-400" : "text-white"}`
								}> Repo List
							</NavLink>
						</li>
						<li className='md:py-4' >
							<NavLink
								to="/about"
								className={({ isActive }) => `md:px-4 md:py-2 ${isActive ? "text-green-400" : "text-white"}`
								}> About
							</NavLink>
						</li>
						<li className='md:py-4' >
							<NavLink
								to="/contact"
								className={({ isActive }) => `md:px-4 md:py-2 ${isActive ? "text-green-400" : "text-white"}`
								}> Contact Us
							</NavLink>
						</li>
					</ul>
				</div>
				<div className="order-2 md:order-3">



					{!isLoggedIn ?
						<><button className="px-5 py-2 text-base bg-green-600 hover:bg-green-500 text-white font-normal rounded-md flex items-center hover:font-medium gap-2"><NavLink to="/login"> Login	</NavLink>
						</button></> :
						<div className='flex gap-2 '>
						<img src={user?.photoURL} className="w-10 h-10 rounded-full" alt="profileimg" />
						<h4 className='px-4 py-2 text-white'>{user.displayName} </h4>
						<button className="px-5 py-2 text-base bg-green-600 hover:bg-green-500 text-white font-normal rounded-md flex items-center hover:font-medium gap-2" onClick={handleLogout}>  Sign Out
						</button></div>}
				</div>
				{/* <div>
							{darkMode ? <><button className="text-gray-50 bg-slate-800 rounded-md p-5" onClick={() => setDarkMode(!darkMode)}>Light Mode</button></> : <> <button className="text-gray-800 bg-slate-100 rounded-md p-5" onClick={() => setDarkMode(!darkMode)}>Dark Mode</button></>}
				</div> */}
			</div>
		</nav >
	)
}

export default Header