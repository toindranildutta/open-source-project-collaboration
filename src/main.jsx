import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import Homepage from './pages/Homepage.jsx'
import About from './pages/About.jsx'
import Layout from './Layout.jsx';
import Contact from './pages/Contact.jsx'
import Login from './authentication/Login.jsx'
import ErrorPage from './error/ErrorPage.jsx'
import Signup from './authentication/Signup.jsx';




const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path='home' element={<Homepage />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path="*" element={<ErrorPage />} />
        </Route>
    )
);


ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        
        <RouterProvider router={router} />
    </React.StrictMode>

)
