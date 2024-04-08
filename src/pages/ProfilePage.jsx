import React, { useState, useEffect } from 'react';
import sh2 from '../assets/images/sh2.webp';


function ProfilePage() {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [showExtraContent, setShowExtraContent] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000); // Update every second

        return () => clearInterval(intervalId);
    }, []);

    const toggleExtraContent = () => {
        setShowExtraContent(!showExtraContent);
    };

    return (
        <>
            <div className="flex justify-between p-4 ml-4">
                <div>
                    <h5>{currentDateTime.toLocaleTimeString()}</h5>
                </div>
                <div>
                    <form className="flex" role="search">
                        <input className="form-input mr-2 border rounded-md" type="search" placeholder="Search" aria-label="Search" />
                        {/* <button className="bg-white text-green-500 border border-green-500 py-2 px-4 rounded-md hover:bg-green-500 hover:text-white" type="submit">Search</button> */}
                    </form>
                </div>
            </div>


            <div className=" flex m-4 p-3 bg-blue-500 bg-opacity-10 shadow-2xl rounded-l-2 rounded-r-2">

                <div className="w-[350px]  mx-auto bg-white border shadow-2xl p-4 mt-5">
                    <div className='flex  justify-around '>
                        <div className='flex justify-center items-center'>
                            <img src={sh2} className="w-16 h-16 border rounded-full" alt="profile" />
                        </div>
                        <div className="flex flex-col items-start ">
                            <h2 className="text-xl font-bold text-green-600">Participants</h2>
                            <h5 className=" ">Date: {currentDateTime.toLocaleString()}</h5>
                            <h6 className=" mb-2 ">Technology: Java</h6>
                        </div>
                    </div>
                    <div className="max-w-xs shadow-sm mt-4 mx-auto bg-white rounded-md" style={{ width: '20rem' }}>
                        <ul className="list-none  p-6 m-2 ">
                            <li className="border-t border-gray-200 shadow-2xl ">An item</li>
                            <p className='border-t mb-2 shadow-2xl'></p>
                            <li className=" border-t border-gray-200 shadow-2xl ">A second item</li>
                            <p className='border-t mb-2 shadow-2xl'></p>

                            <li className="border-t border-gray-200 shadow-2xl ">A third item</li>
                            <p className='border-t mb-2 shadow-2xl'></p>

                            <li className="border-t border-gray-200 shadow-2xl ">An item</li>
                            <p className='border-t mb-2 shadow-2xl'></p>

                            <li className="border-t border-gray-200 shadow-2xl ">A second item</li>
                            <p className='border-t mb-2 shadow-2xl'></p>

                            <li className="border-t border-gray-200 shadow-2xl ">A third item</li>
                            <p className='border-t mb-2 shadow-2xl'></p>

                            <li className="border-t border-gray-200 shadow-2xl ">An item</li>
                            <p className='border-t mb-2 shadow-2xl'></p>

                            <li className="border-t border-gray-200 shadow-2xl ">A second item</li>
                            <p className='border-t mb-2 shadow-2xl'></p>

                            <li className="border-t border-gray-200 shadow-2xl ">A third item</li>
                            <p className='border-t mb-2 shadow-2xl'></p>

                            <li className="border-t border-gray-200 shadow-2xl ">An item</li>
                            <p className='border-t mb-2 shadow-2xl'></p>

                            <li className="border-t border-gray-200 shadow-2xl ">A second item</li>
                            <p className='border-t mb-2 shadow-2xl'></p>

                            <li className="border-t border-gray-200 shadow-2xl ">A third item</li>
                            <p className='border-t mb-2 shadow-2xl'></p>
                            



                        </ul>
                    </div>
                </div>



                <div className="w-[900px] mx-auto border shadow-md  m-4">
                    <div className="p-4">

                        <div className="max-w-30vw mx-auto bg-white border shadow-2xl rounded-md mb-2">
                            <div className="p-4">
                                <h5 className="text-lg font-semibold mb-1">Card title</h5>
                                <h6 className="text-sm text-gray-600 mb-2">Card subtitle</h6>
                                <a href="#" className="text-blue-500 hover:text-blue-600 mr-1">Card link</a>
                                <a href="#" className="text-blue-500 hover:text-blue-600">Another link</a>
                            </div>
                        </div>

                        <div className="max-w-30vw mx-auto bg-white border shadow-2xl rounded-md mb-2">
                            <div className="p-4">
                                <h5 className="text-lg font-semibold mb-1">Card title</h5>
                                <h6 className="text-sm text-gray-600 mb-2">Card subtitle</h6>
                                <a href="#" className="text-blue-500 hover:text-blue-600 mr-1">Card link</a>
                                <a href="#" className="text-blue-500 hover:text-blue-600">Another link</a>
                            </div>
                        </div>

                        <div className="max-w-30vw mx-auto bg-white border shadow-2xl mb-2 rounded-md">
                            <div className="p-4">
                                <h5 className="text-lg font-semibold mb-1">Card title</h5>
                                <h6 className="text-sm text-gray-600 mb-2">Card subtitle</h6>
                                <a href="#" className="text-blue-500 hover:text-blue-600  mr-1">Card link</a>
                                <a href="#" className="text-blue-500 hover:text-blue-600">Another link</a>
                            </div>
                        </div>

                        <div className="max-w-30vw mx-auto bg-white border shadow-2xl  rounded-md">
                            <div className="p-4">
                                <h5 className="text-lg font-semibold mb-1">Card title</h5>
                                <h6 className="text-sm text-gray-600 mb-2">Card subtitle</h6>
                                <a href="#" className="text-blue-500 hover:text-blue-600 mr-1">Card link</a>
                                <a href="#" className="text-blue-500 hover:text-blue-600">Another link</a>
                            </div>
                        </div>

                        <div className="flex items-center w-full justify-center mt-5">
                            <button type="button" className="btn-white justify-content-center font-light  py-1 text-[12px] shadow-2xl" onClick={toggleExtraContent}>
                                SEE MORE &gt;&gt;
                            </button>

                        </div>
                    </div>

                </div>


            </div>


        </>
    );
}

export default ProfilePage;
