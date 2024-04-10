import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFirebase } from '../context/firebase';

function ProfilePage() {
    const params = useParams();
    const firebase = useFirebase();

    const [data, setData] = useState(null);
    const [githubData, setGithubData] = useState(null);
    const [repoDetails, setRepoDetails] = useState([]);
    const [checkedRepoUrls, setCheckedRepoUrls] = useState([]);

    useEffect(() => {
        firebase.listAllRepos().then((repos) => {
            setCheckedRepoUrls(repos.docs);
        })
    }, [firebase]);
    console.log(checkedRepoUrls.map ((repo) => console.log(repo.id )));
    
    const handleCheckboxChange = async (repoid, repoUrl) => {
        var repooriginalid;
        const isChecked = checkedRepoUrls.map((repo) => (repo.data().repoid === repoid) && (repooriginalid = repo.id));
        if (!isChecked) {
            try {
                await firebase.addRepositoryToRepolist(repoid, repoUrl);
                setCheckedRepoUrls([...checkedRepoUrls, repoid]);
            } catch (error) {
                console.error('Error adding repository to repolist: ', error);
            }
        }
         else {
            try {
                await firebase.removeRepositoryFromRepolist(repooriginalid);
                setCheckedRepoUrls(checkedRepoUrls.filter(id => id !== repoid));
            } catch (error) {
                console.error('Error removing repository from repolist: ', error);
            }
    };
}
    

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

    return (

        
        <>
            <div className="flex justify-between p-4 ml-4">
                
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

                            <img src={githubData?.avatar_url} className="w-16 h-16 flex mr-[20px] rounded-full" alt="profile" />


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
                        {repoDetails.map((repo) => (
                            <>
                                <div key={repo.url} className="flex justify-start mx-auto bg-white border shadow-2xl rounded-md mb-2">
                                    <div className="p-4">
                                        <h5 className="text-lg font-semibold mb-1">{repo.name}</h5>
                                        <h6 className="text-sm text-gray-600 mb-2">{repo.description}</h6>

                                        <a href={repo.html_url} target='_blank' className="text-blue-500 hover:text-blue-600 mr-1">{repo.url}</a>
                                    </div>

                                    {/* <div className="flex justify-end items-center ml-auto mr-2">
                                        <button onClick={() => handleAddRepo(repo)} className="text-sm text-gray-600 hover:text-gray-800 mr-1">
                                            Like
                                        </button>
                                        <button onClick={() => handleRemoveRepo(repo.id)}>Unlike</button>
                                    
                                    </div> */}

                                    <label className='flex cursor-pointer select-none items-center'>
                                        <div className='relative'>
                                            <input
                                                type='checkbox'
                                                checked={checkedRepoUrls.some((repo) => repo.data().repoid === repo.id)}
                                                onChange={() => handleCheckboxChange(repo.id, repo.url)}
                                                className='sr-only'
                                            />
                                            { checkedRepoUrls.some((repo) => repo.data().repoid === repo.id) ? <>
                                                <div className='block h-8 w-14 rounded-full bg-green-400'></div>
                                                <div className='dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition'></div>
                                            </> :
                                                <>
                                                    <div className='block h-8 w-14 rounded-full bg-red-400'></div>
                                                    <div className='dot absolute right-1 top-1 h-6 w-6 rounded-full bg-white transition'></div>
                                                </>}
                                        </div>
                                    </label>

                                </div>

                            </>
                        ))}





                        {/* <div className="flex items-center w-full justify-center mt-5">
                            <button type="button" className="btn-white justify-content-center font-light  py-1 text-[12px] shadow-2xl" onClick={toggleExtraContent}>
                                SEE MORE &gt;&gt;
                            </button>

                        </div> */}
                    </div>

                </div>


            </div>


        </>
    );
}

export default ProfilePage;
