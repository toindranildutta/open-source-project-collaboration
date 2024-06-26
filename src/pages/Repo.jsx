import React, { useState, useEffect } from 'react';
import sh2 from '../assets/images/sh2.webp';
import sh4 from '../assets/images/OSPC.png';
import Ta2 from '../assets/images/Ta2.png';
import Ta1Img from '../assets/images/Ta1.jpg';


const Repo = () => {
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
      <div >
      <div className='text-violate-500 font-san font-semi-bold text-4xl flex justify-center m-4'>
        <p className='border-t-1 border-r-2 border-l-2 border-b-2 border-pink-500 p-2 rounded-2xl shadow-2xl  hover:bg-gray-300= hover:text-black= hover:shadow-red-500'>All Participants</p>
      </div>



      <div className="flex flex-col">

        <div className='flex w-full justify-around p-2 '>

          <div className="p-2 flex w-[22%] shadow-2xl text-black border-t-2 border-b-2 border-cyan-500 hover:shadow-cyan-100 hover:text-black= hover:bg-gray-300=">
            <div className="card-body ">
              <div className='flex justify-around '>
                <div className='flex justify-center items-center'>
                  <img src={sh4} className="w-16 h-16" alt="profile" />
                </div>
                <div className="flex flex-col items-start">
                  <h2 className="text-xl font-bold text-green-600">Participants</h2>
                  <h5 className=" ">Date: {currentDateTime.toLocaleString()}</h5>
                  <h6 className="mb-2 ">Technology: Java</h6>
                </div>
              </div>

              <div className="card w-full flex mt-5 ml-2">
                <ul className="list-none flex flex-col">
                  <li className="flex mb-2 border shadow-2xl w-[300px] hover:shadow-cyan-100 ">
                    <img src={sh2} className="w-12 h-12 rounded-full mr-3" alt="profile" />
                    <div >
                      <h6 className="ml-9 font-semibold"> Miss. Suhani</h6>
                      <small className="ml-9 text-blue-500">tosuhani.@example.com</small>
                    </div>
                  </li>
                  <li className="flex mb-2 border shadow-2xl w-[300px] hover:shadow-cyan-100">
                    <img src={Ta1Img} className="w-12 h-12 rounded-full mr-3" alt="profile" />
                    <div>
                      <h6 className="ml-9 font-semibold">Tanmoy Dutta</h6>
                      <small className="ml-9 text-blue-500">mr.tanmoy.@example.com</small>
                    </div>
                  </li>
                  <li className="flex mb-2 border shadow-2xl w-[300px] hover:shadow-cyan-100">
                    <img src={Ta2} className="w-12 h-12 rounded-full mr-3" alt="profile" />
                    <div>
                      <h6 className="ml-9 font-semibold">Mr. chiku</h6>
                      <small className="ml-9 text-blue-500">chiku.dutta@example.com</small>
                    </div>
                  </li>
                </ul>
              </div>

              {showExtraContent && (
                <div className="card">
                  <ul className="list-none">
                    {/* Additional content here */}
                    <li className="flex mb-2 border shadow-2xl w-[300px] hover:shadow-cyan-100 ">
                    <img src={sh2} className="w-12 h-12 rounded-full mr-3" alt="profile" />
                    <div >
                      <h6 className="ml-9 font-semibold"> Miss. Suhani</h6>
                      <small className="ml-9 text-blue-500">tosuhani.@example.com</small>
                    </div>
                  </li>
                  <li className="flex mb-2 border shadow-2xl w-[300px] hover:shadow-cyan-100">
                    <img src={Ta1Img} className="w-12 h-12 rounded-full mr-3" alt="profile" />
                    <div>
                      <h6 className="ml-9 font-semibold">Tanmoy Dutta</h6>
                      <small className="ml-9 text-blue-500">mr.tanmoy.@example.com</small>
                    </div>
                  </li>
                  <li className="flex mb-2 border shadow-2xl w-[300px] hover:shadow-cyan-100">
                    <img src={Ta2} className="w-12 h-12 rounded-full mr-3" alt="profile" />
                    <div>
                      <h6 className="ml-9 font-semibold">Mr. chiku</h6>
                      <small className="ml-9 text-blue-500">chiku.dutta@example.com</small>
                    </div>
                  </li>
                  </ul>
                </div>
              )}

              <div className="flex items-center w-full justify-center mt-5">
                <button type="button" className="btn-white text-orange-400 justify-content-center font-light py-1 text-[12px] hover:text-black= hover:bg-gray-300= hover:shadow-white-md" onClick={toggleExtraContent}>
                  SEE MORE &gt;&gt;
                </button>
              </div>

            </div>
          </div>




          <div className=" p-2 flex w-[22%] shadow-2xl text-black border-t-2 border-b-2 border-cyan-500 hover:shadow-cyan-100 hover:text-black= hover:bg-gray-300=">
            <div className="card-body">
              <div className='flex justify-around '>
                <div className='flex justify-center items-center'>
                  <img src={sh4} className="w-16 h-16" alt="profile" />
                </div>
                <div className="flex flex-col items-start ">
                  <h2 className="text-xl font-bold text-green-600">Participants</h2>
                  <h5 className=" ">Date: {currentDateTime.toLocaleString()}</h5>
                  <h6 className=" mb-2 ">Technology: Java</h6>
                </div>
              </div>

              <div className="card w-full flex mt-5 ml-2">
                <ul className="list-none flex flex-col">
                  <li className=" flex mb-2 border shadow-2xl w-[300px] hover:shadow-cyan-100 ">
                    <img src={sh2} className="w-12 h-12 rounded-full mr-3 " alt="profile" />
                    <div className=''>
                      <h6 className=" ml-9 font-semibold "> Miss. Suhani</h6>
                      <small className="ml-9 text-blue-500">tosuhani.@example.com</small>
                    </div>
                  </li>
                  <li className="flex mb-2 border shadow-2xl w-[300px] hover:shadow-cyan-100"> {/* Changed to flex-col */}
                    <img src={Ta1Img} className="w-12 h-12 rounded-full mr-3" alt="profile" />
                    <div>
                      <h6 className=" ml-9 font-semibold ">Tanmoy Dutta</h6>
                      <small className=" ml-9 text-blue-500">mr.tanmoy.@example.com</small>
                    </div>
                  </li>
                  <li className=" flex mb-2 border shadow-2xl w-[300px] hover:shadow-cyan-100"> {/* Changed to flex-col */}
                    <img src={Ta2} className="w-12 h-12 rounded-full mr-3" alt="profile" />
                    <div>
                      <h6 className=" ml-9 font-semibold ">Mr. chiku</h6>
                      <small className=" ml-9 text-blue-500">chiku.dutta@example.com</small>
                    </div>
                  </li>
                </ul>
              </div>

              {showExtraContent && (
                <div className="card">
                  <ul className="list-none">
                    {/* Additional content here */}
                  </ul>
                </div>
              )}

              <div className="flex items-center w-full justify-center mt-5">
                <button type="button" className="btn-white text-orange-400 justify-content-center font-light  py-1 text-[12px] shadow-2xl" onClick={toggleExtraContent}>
                  SEE MORE &gt;&gt;
                </button>

              </div>

            </div>
          </div>


          <div className=" p-2 flex w-[22%]   shadow-2xl text-black border-t-2 border-b-2 border-cyan-500 hover:shadow-cyan-100 hover:text-black= hover:bg-gray-300=">
            <div className="card-body">
              <div className='flex justify-around '>
                <div className='flex justify-center items-center'>
                  <img src={sh4} className="w-16 h-16" alt="profile" />
                </div>
                <div className="flex flex-col items-start ">
                  <h2 className="text-xl font-bold text-green-600">Participants</h2>
                  <h5 className=" ">Date: {currentDateTime.toLocaleString()}</h5>
                  <h6 className=" mb-2 ">Technology: Java</h6>
                </div>
              </div>

              <div className="card w-full flex mt-5 ml-2">
                <ul className="list-none flex flex-col">
                  <li className=" flex mb-2 border shadow-2xl w-[300px]  hover:shadow-cyan-100">
                    <img src={sh2} className="w-12 h-12 rounded-full mr-3 " alt="profile" />
                    <div className=''>
                      <h6 className=" ml-9 font-semibold "> Miss. Suhani</h6>
                      <small className="ml-9 text-blue-500">tosuhani.@example.com</small>
                    </div>
                  </li>
                  <li className="flex mb-2 border shadow-2xl w-[300px] hover:shadow-cyan-100"> {/* Changed to flex-col */}
                    <img src={Ta1Img} className="w-12 h-12 rounded-full mr-3" alt="profile" />
                    <div>
                      <h6 className=" ml-9 font-semibold ">Tanmoy Dutta</h6>
                      <small className=" ml-9 text-blue-500">mr.tanmoy.@example.com</small>
                    </div>
                  </li>
                  <li className=" flex mb-2 border shadow-2xl w-[300px] hover:shadow-cyan-100"> {/* Changed to flex-col */}
                    <img src={Ta2} className="w-12 h-12 rounded-full mr-3" alt="profile" />
                    <div>
                      <h6 className=" ml-9 font-semibold ">Mr. chiku</h6>
                      <small className=" ml-9 text-blue-500">chiku.dutta@example.com</small>
                    </div>
                  </li>
                </ul>
              </div>

              {showExtraContent && (
                <div className="card">
                  <ul className="list-none">
                    {/* Additional content here */}
                  </ul>
                </div>
              )}

              <div className="flex items-center w-full justify-center mt-5">
                <button type="button" className="btn-white text-orange-400 justify-content-center font-light  py-1 text-[12px] shadow-2xl" onClick={toggleExtraContent}>
                  SEE MORE &gt;&gt;
                </button>

              </div>

            </div>
          </div>


          <div className=" p-2 flex w-[22%]   shadow-2xl text-black border-t-2 border-b-2 border-cyan-500 hover:shadow-cyan-100 hover:text-black= hover:bg-gray-300=">
            <div className="card-body">
              <div className='flex justify-around '>
                <div className='flex justify-center items-center'>
                  <img src={sh4} className="w-16 h-16" alt="profile" />
                </div>
                <div className="flex flex-col items-start ">
                  <h2 className="text-xl font-bold text-green-600">Participants</h2>
                  <h5 className=" ">Date: {currentDateTime.toLocaleString()}</h5>
                  <h6 className=" mb-2 ">Technology: Java</h6>
                </div>
              </div>

              <div className="card w-full flex mt-5 ml-2">
                <ul className="list-none flex flex-col">
                  <li className=" flex mb-2 border shadow-2xl w-[300px] hover:shadow-cyan-100">
                    <img src={sh2} className="w-12 h-12 rounded-full mr-3 " alt="profile" />
                    <div className=''>
                      <h6 className=" ml-9 font-semibold "> Miss. Suhani</h6>
                      <small className="ml-9 text-blue-500">tosuhani.@example.com</small>
                    </div>
                  </li>
                  <li className="flex mb-2 border shadow-2xl w-[300px] hover:shadow-cyan-100"> {/* Changed to flex-col */}
                    <img src={Ta1Img} className="w-12 h-12 rounded-full mr-3" alt="profile" />
                    <div>
                      <h6 className=" ml-9 font-semibold ">Tanmoy Dutta</h6>
                      <small className=" ml-9 text-blue-500">mr.tanmoy.@example.com</small>
                    </div>
                  </li>
                  <li className=" flex mb-2 border shadow-2xl w-[300px] hover:shadow-cyan-100"> {/* Changed to flex-col */}
                    <img src={Ta2} className="w-12 h-12 rounded-full mr-3" alt="profile" />
                    <div>
                      <h6 className=" ml-9 font-semibold ">Mr. chiku</h6>
                      <small className=" ml-9 text-blue-500">chiku.dutta@example.com</small>
                    </div>
                  </li>
                </ul>
              </div>

              {showExtraContent && (
                <div className="card">
                  <ul className="list-none">
                    {/* Additional content here */}
                  </ul>
                </div>
              )}

              <div className="flex items-center w-full justify-center mt-5">
                <button type="button" className="btn-white text-orange-400 justify-content-center font-light  py-1 text-[12px] shadow-2xl" onClick={toggleExtraContent}>
                  SEE MORE &gt;&gt;
                </button>

              </div>

            </div>
          </div>

        </div>


        <div className='flex w-full justify-around p-2 mt-4'>

          <div className=" p-2 flex w-[22%]   shadow-2xl text-black border-t-2 border-b-2 border-cyan-500 hover:shadow-cyan-100 hover:text-black= hover:bg-gray-300=">
            <div className="card-body">
              <div className='flex justify-around '>
                <div className='flex justify-center items-center'>
                  <img src={sh4} className="w-16 h-16" alt="profile" />
                </div>
                <div className="flex flex-col items-start ">
                  <h2 className="text-xl font-bold text-green-600">Participants</h2>
                  <h5 className=" ">Date: {currentDateTime.toLocaleString()}</h5>
                  <h6 className=" mb-2 ">Technology: Java</h6>
                </div>
              </div>

              <div className="card w-full flex mt-5 ml-2">
                <ul className="list-none flex flex-col">
                  <li className=" flex mb-2 border shadow-2xl w-[300px]  hover:shadow-cyan-100">
                    <img src={sh2} className="w-12 h-12 rounded-full mr-3 " alt="profile" />
                    <div className=''>
                      <h6 className=" ml-9 font-semibold "> Miss. Suhani</h6>
                      <small className="ml-9 text-blue-500">tosuhani.@example.com</small>
                    </div>
                  </li>
                  <li className="flex mb-2 border shadow-2xl w-[300px] hover:shadow-cyan-100"> {/* Changed to flex-col */}
                    <img src={Ta1Img} className="w-12 h-12 rounded-full mr-3" alt="profile" />
                    <div>
                      <h6 className=" ml-9 font-semibold ">Tanmoy Dutta</h6>
                      <small className=" ml-9 text-blue-500">mr.tanmoy.@example.com</small>
                    </div>
                  </li>
                  <li className=" flex mb-2 border shadow-2xl w-[300px] hover:shadow-cyan-100"> {/* Changed to flex-col */}
                    <img src={Ta2} className="w-12 h-12 rounded-full mr-3" alt="profile" />
                    <div>
                      <h6 className=" ml-9 font-semibold ">Mr. chiku</h6>
                      <small className=" ml-9 text-blue-500">chiku.dutta@example.com</small>
                    </div>
                  </li>
                </ul>
              </div>

              {showExtraContent && (
                <div className="card">
                  <ul className="list-none">
                    {/* Additional content here */}
                  </ul>
                </div>
              )}

              <div className="flex items-center w-full justify-center mt-5">
                <button type="button" className="btn-white text-orange-400 justify-content-center font-light  py-1 text-[12px] shadow-2xl" onClick={toggleExtraContent}>
                  SEE MORE &gt;&gt;
                </button>

              </div>

            </div>
          </div>


          <div className=" p-2 flex w-[22%]   shadow-2xl text-black border-t-2 border-b-2 border-cyan-500 hover:shadow-cyan-100 hover:text-black= hover:bg-gray-300=">
            <div className="card-body">
              <div className='flex justify-around '>
                <div className='flex justify-center items-center'>
                  <img src={sh4} className="w-16 h-16" alt="profile" />
                </div>
                <div className="flex flex-col items-start ">
                  <h2 className="text-xl font-bold text-green-600">Participants</h2>
                  <h5 className=" ">Date: {currentDateTime.toLocaleString()}</h5>
                  <h6 className=" mb-2 ">Technology: Java</h6>
                </div>
              </div>

              <div className="card w-full flex mt-5 ml-2">
                <ul className="list-none flex flex-col">
                  <li className=" flex mb-2 border shadow-2xl w-[300px]  hover:shadow-cyan-100">
                    <img src={sh2} className="w-12 h-12 rounded-full mr-3 " alt="profile" />
                    <div className=''>
                      <h6 className=" ml-9 font-semibold "> Miss. Suhani</h6>
                      <small className="ml-9 text-blue-500">tosuhani.@example.com</small>
                    </div>
                  </li>
                  <li className="flex mb-2 border shadow-2xl w-[300px] hover:shadow-cyan-100"> {/* Changed to flex-col */}
                    <img src={Ta1Img} className="w-12 h-12 rounded-full mr-3" alt="profile" />
                    <div>
                      <h6 className=" ml-9 font-semibold ">Tanmoy Dutta</h6>
                      <small className=" ml-9 text-blue-500">mr.tanmoy.@example.com</small>
                    </div>
                  </li>
                  <li className=" flex mb-2 border shadow-2xl w-[300px] hover:shadow-cyan-100"> {/* Changed to flex-col */}
                    <img src={Ta2} className="w-12 h-12 rounded-full mr-3" alt="profile" />
                    <div>
                      <h6 className=" ml-9 font-semibold ">Mr. chiku</h6>
                      <small className=" ml-9 text-blue-500">chiku.dutta@example.com</small>
                    </div>
                  </li>
                </ul>
              </div>

              {showExtraContent && (
                <div className="card">
                  <ul className="list-none">
                    {/* Additional content here */}
                  </ul>
                </div>
              )}

              <div className="flex items-center w-full justify-center mt-5">
                <button type="button" className="btn-white text-orange-400 justify-content-center font-light  py-1 text-[12px] shadow-2xl" onClick={toggleExtraContent}>
                  SEE MORE &gt;&gt;
                </button>

              </div>

            </div>
          </div>


          <div className=" p-2 flex w-[22%]   shadow-2xl text-black border-t-2 border-b-2 border-cyan-500 hover:shadow-cyan-100 hover:text-black= hover:bg-gray-300=">
            <div className="card-body">
              <div className='flex justify-around '>
                <div className='flex justify-center items-center'>
                  <img src={sh4} className="w-16 h-16" alt="profile" />
                </div>
                <div className="flex flex-col items-start ">
                  <h2 className="text-xl font-bold text-green-600">Participants</h2>
                  <h5 className=" ">Date: {currentDateTime.toLocaleString()}</h5>
                  <h6 className=" mb-2 ">Technology: Java</h6>
                </div>
              </div>

              <div className="card w-full flex mt-5 ml-2">
                <ul className="list-none flex flex-col">
                  <li className=" flex mb-2 border shadow-2xl w-[300px]  hover:shadow-cyan-100">
                    <img src={sh2} className="w-12 h-12 rounded-full mr-3 " alt="profile" />
                    <div className=''>
                      <h6 className=" ml-9 font-semibold "> Miss. Suhani</h6>
                      <small className="ml-9 text-blue-500">tosuhani.@example.com</small>
                    </div>
                  </li>
                  <li className="flex mb-2 border shadow-2xl w-[300px] hover:shadow-cyan-100"> {/* Changed to flex-col */}
                    <img src={Ta1Img} className="w-12 h-12 rounded-full mr-3" alt="profile" />
                    <div>
                      <h6 className=" ml-9 font-semibold ">Tanmoy Dutta</h6>
                      <small className=" ml-9 text-blue-500">mr.tanmoy.@example.com</small>
                    </div>
                  </li>
                  <li className=" flex mb-2 border shadow-2xl w-[300px] hover:shadow-cyan-100"> {/* Changed to flex-col */}
                    <img src={Ta2} className="w-12 h-12 rounded-full mr-3" alt="profile" />
                    <div>
                      <h6 className=" ml-9 font-semibold ">Mr. chiku</h6>
                      <small className=" ml-9 text-blue-500">chiku.dutta@example.com</small>
                    </div>
                  </li>
                </ul>
              </div>

              {showExtraContent && (
                <div className="card">
                  <ul className="list-none">
                    {/* Additional content here */}
                  </ul>
                </div>
              )}

              <div className="flex items-center w-full justify-center mt-5">
                <button type="button" className="btn-white text-orange-400 justify-content-center font-light  py-1 text-[12px] shadow-2xl" onClick={toggleExtraContent}>
                  SEE MORE &gt;&gt;
                </button>

              </div>

            </div>
          </div>


          <div className=" p-2 flex w-[22%]   shadow-2xl text-black border-t-2 border-b-2 border-cyan-500 hover:shadow-cyan-100 hover:text-black= hover:bg-gray-300=">
            <div className="card-body">
              <div className='flex justify-around '>
                <div className='flex justify-center items-center'>
                  <img src={sh4} className="w-16 h-16" alt="profile" />
                </div>
                <div className="flex flex-col items-start ">
                  <h2 className="text-xl font-bold text-green-600">Participants</h2>
                  <h5 className=" ">Date: {currentDateTime.toLocaleString()}</h5>
                  <h6 className=" mb-2 ">Technology: Java</h6>
                </div>
              </div>

              <div className="card w-full flex mt-5 ml-2">
                <ul className="list-none flex flex-col">
                  <li className=" flex mb-2 border shadow-2xl w-[300px]  hover:shadow-cyan-100">
                    <img src={sh2} className="w-12 h-12 rounded-full mr-3 " alt="profile" />
                    <div className=''>
                      <h6 className=" ml-9 font-semibold "> Miss. Suhani</h6>
                      <small className="ml-9 text-blue-500">tosuhani.@example.com</small>
                    </div>
                  </li>
                  <li className="flex mb-2 border shadow-2xl w-[300px] hover:shadow-cyan-100"> {/* Changed to flex-col */}
                    <img src={Ta1Img} className="w-12 h-12 rounded-full mr-3" alt="profile" />
                    <div>
                      <h6 className=" ml-9 font-semibold ">Tanmoy Dutta</h6>
                      <small className=" ml-9 text-blue-500">mr.tanmoy.@example.com</small>
                    </div>
                  </li>
                  <li className=" flex mb-2 border shadow-2xl w-[300px] hover:shadow-cyan-100"> {/* Changed to flex-col */}
                    <img src={Ta2} className="w-12 h-12 rounded-full mr-3" alt="profile" />
                    <div>
                      <h6 className=" ml-9 font-semibold ">Mr. chiku</h6>
                      <small className=" ml-9 text-blue-500">chiku.dutta@example.com</small>
                    </div>
                  </li>
                </ul>
              </div>

              {showExtraContent && (
                <div className="card">
                  <ul className="list-none">
                    {/* Additional content here */}
                  </ul>
                </div>
              )}

              <div className="flex items-center w-full justify-center mt-5">
                <button type="button" className="btn-white text-orange-400 justify-content-center font-light  py-1 text-[12px] shadow-2xl" onClick={toggleExtraContent}>
                  SEE MORE &gt;&gt;
                </button>

              </div>

            </div>
          </div>


        </div>

      </div>

      <div className="flex items-center w-full justify-center mt-6">
        <button type="button" className="btn-white justify-content-center font-light  py-1 text-[12px] shadow-2xl" onClick={toggleExtraContent}>
          SEE MORE &gt;&gt;
        </button>

      </div>

      </div>
      
    </>
  )
}

export default Repo