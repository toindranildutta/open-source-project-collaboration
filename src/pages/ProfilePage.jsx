import React, { useState, useEffect } from 'react';
import sh2 from '../assets/images/sh2.webp';
import { useParams } from 'react-router-dom';
import { useFirebase } from '../context/firebase';




function ProfilePage() {
    const params = useParams();
    const firebase = useFirebase();


    const [data, setData] = useState(null);
    const [githubData, setGithubData] = useState(null);
    const [repoDetails, setRepoDetails] = useState([]);




    useEffect(() => {
        // Fetch user data from Firebase
        firebase.getUserById(params.userid).then((userData) => {
            setData(userData.data());
        }).catch((error) => {
            console.error('Error fetching user data:', error);
        });
    }, [firebase, params.userid]);

    useEffect(() => {
        // Fetch GitHub data if user data is available
        if (data && data.githuburl) {
            const handleGetGithubData = async () => {
                try {
                    const response = await fetch(`https://api.github.com/users/${data.githuburl}`);
                    const github = await response.json();
                    setGithubData(github);
                } catch (error) {
                    console.error('Error fetching GitHub data:', error);
                }
            };

            handleGetGithubData();
        }
    }, [data]);

    useEffect(() => {
        // Fetch GitHub data if user data is available
        if (data && data.githuburl && githubData && githubData.repos_url) {
            const handleRepoData = async () => {
                try {
                    const response = await fetch(`${githubData.repos_url}`);
                    const repos = await response.json();
                    setRepoDetails(repos);
                } catch (error) {
                    console.error('Error fetching GitHub data:', error);
                }
            };

            handleRepoData();
        }
    }, [data, githubData]);
//==========================================================================
    // handle repo add/remove to repolist to collaborate
    const handleAddRepo = async (repo) => {
        try {
          await firebase.addRepositoryToRepolist(repo);
        } catch (error) {
          console.error('Error adding repository to repolist: ', error);
          // Handle error, display error message, etc.
        }
      };
    
      const handleRemoveRepo = async (repoid) => {
        try {
          await firebase.removeRepositoryFromRepolist(repoid); // Pass the repository ID to remove
        } catch (error) {
          console.error('Error removing repository from repolist: ', error);
          // Handle error, display error message, etc.
        }
      };


//======================================================================



    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [showExtraContent, setShowExtraContent] = useState(false);


    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setCurrentDateTime(new Date());
    //     }, 1000); // Update every second

    //     return () => clearInterval(intervalId);
    // }, []);

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

                <div className="w-[350px]  mx-auto bg-white border shadow-2xl   ` h-[570px] p-4 mt-5">
                    <div className='flex  justify-around '>
                        <div className='flex justify-center items-center'>
                            <img src={githubData?.avatar_url} className="w-16 h-16" alt="profile" />
                        </div>
                        <div className="flex flex-col items-start ">
                            <h2 className="text-xl font-bold text-green-600">{data?.name}</h2>
                            <h5 className=" ">Location: {githubData?.location}</h5>
                            <h6 className=" mb-2 ">Created: {githubData?.created_at}</h6>

                        </div>
                    </div>
                    <div className="max-w-xs shadow-sm mt-4 mx-auto bg-white rounded-md" style={{ width: '20rem' }}>
                        <ul className="list-none p-6 m-2 ">
                            <li className="border-t border-gray-200 shadow-2xl ">{githubData?.bio}</li>
                            <p className='border-t mb-2 shadow-2xl'></p>
                            <li className="text-blue-600 border-t border-gray-200 shadow-2xl "><a href={githubData?.html_url} target='_blank'>Github Link</a></li>
                            <p className='border-t mb-2 shadow-2xl'></p>

                            <li className="border-t border-gray-200 shadow-2xl ">Company: {githubData?.company}</li>
                            <p className='border-t mb-2 shadow-2xl'></p>

                            <li className="border-t border-gray-200 shadow-2xl ">Followers: {githubData?.followers}</li>
                            <p className='border-t mb-2 shadow-2xl'></p>

                            <li className="border-t border-gray-200 shadow-2xl ">Following: {githubData?.following}</li>
                            <p className='border-t mb-2 shadow-2xl'></p>

                            <li className="border-t border-gray-200 shadow-2xl ">Public Repos: {githubData?.public_repos}</li>
                            <p className='border-t mb-2 shadow-2xl'></p>

                            <li className="border-t border-gray-200 shadow-2xl ">Last Seen: {githubData?.updated_at}</li>
                            <p className='border-t mb-2 shadow-2xl'></p>



                        </ul>
                    </div>
                </div>



                <div className="w-[900px] mx-auto border shadow-md  m-4">
                    <div className="p-4">
                        {repoDetails.map((repo) => ( console.log(repo),
                            <>
                                <div className="flex justify-start mx-auto bg-white border shadow-2xl rounded-md mb-2">
                                    <div className="p-4">
                                        <h5 className="text-lg font-semibold mb-1">{repo.name}</h5>
                                        <h6 className="text-sm text-gray-600 mb-2">{repo.description}</h6>
                                     
                                        <a href={repo.html_url} target='_blank' className="text-blue-500 hover:text-blue-600 mr-1">Repo link</a>
                                    </div>

                                    <div className="flex justify-end items-center ml-auto mr-2">
                                        <button onClick={() => handleAddRepo(repo)} className="text-sm text-gray-600 hover:text-gray-800 mr-1">
                                            Like
                                        </button>
                                        <button onClick={() => handleRemoveRepo(repo.id)}>Unlike</button>
                                    
                                    </div>
                                </div>

                            </>
                        ))}





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
