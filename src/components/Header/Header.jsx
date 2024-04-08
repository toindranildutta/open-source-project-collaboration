import React from 'react'
import OSPC from '../../assets/images/OSPC.png'
import { NavLink } from "react-router-dom";
import { useFirebase } from '../../context/firebase';

const Header = () => {
	const { isLoggedIn, logoutUser, user } = useFirebase();
	console.log(user)


	const handleLogout = () => {
        logoutUser().then(() => {
            console.log('User signed out successfully');
        }).catch((error) => {
            console.error('Error signing out:', error);
        });
    };

	return (
		<nav className="bg-blue-900 shadow shadow-gray-300 w-100 px-8 md:px-auto">
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
								className={({ isActive }) => `md:px-4 md:py-2 ${isActive ? "text-light" : "text-white"}`
								}> Home
							</NavLink>
						</li>
						<li className='md:py-4' >
							<NavLink
								to="/profile"
								className={({ isActive }) => `md:px-4 md:py-2 ${isActive ? "text-light" : "text-white"}`
								}> Profile
							</NavLink>
						</li>
						<li className='md:py-4' >
							<NavLink
								to="/addprofile"
								className={({ isActive }) => `md:px-4 md:py-2 ${isActive ? "text-light" : "text-white"}`
								}> Add Profile Details
							</NavLink>
						</li>
						<li className='md:py-4' >
							<NavLink
								to="/about"
								className={({ isActive }) => `md:px-4 md:py-2 ${isActive ? "text-light" : "text-white"}`
								}> About
							</NavLink>
						</li>
						<li className='md:py-4' >
							<NavLink
								to="/contact"
								className={({ isActive }) => `md:px-4 md:py-2 ${isActive ? "text-light" : "text-white"}`
								}> Contact Us
							</NavLink>
						</li>
					</ul>
				</div>
				<div className="order-2 md:order-3">



					{isLoggedIn ? <div className='flex gap-2 '>
						<h4 className='px-4 py-2 text-white'>{user.email} </h4>
						<button className="px-4 py-2 bg-green-600 hover:bg-gray-400 text-gray-50 rounded-xl flex items-center gap-2"><NavLink to="/" onClick={handleLogout}> Sign Out	</NavLink>
						</button></div> :
						<><button className="px-4 py-2 bg-green-600 hover:bg-gray-400 text-gray-50 rounded-xl flex items-center gap-2"><NavLink to="/login"> Login	</NavLink>
						</button></>}
				</div>
			</div>
		</nav >
	)
}

export default Header