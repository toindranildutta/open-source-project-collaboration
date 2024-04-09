import React from 'react';
import { useState } from 'react';
import { useFirebase } from '../../context/firebase';


const AddProfileDetails = () => {
    const firebase = useFirebase();
    const [name, setName] = useState('');
    const [githubUrl, setGithubUrl] = useState('');
    const [wantCollaboration, setWantCollaboration] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !githubUrl) {
            alert('Please enter name and github url')
            return
        }

        try {
            const user = await firebase.handleCreateNewUser(name, githubUrl, wantCollaboration);
            console.log("Successfully signed in:", user);
        } catch {
            console.error("Error signing in:", error);
        }
    }


    return (

        <div>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 w-1/2 justify-center align-middle">

                <div>
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                    <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="vogoban-jane"
                        value={name} onChange={(e) => setName(e.target.value)} required="" />
                </div>
                <div>
                    <label for="url" className="block mb-2 text-sm font-medium text-gray-900">Github Url</label>
                    <input type="text" name="password" id="password" placeholder="tumi-jano" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" value={githubUrl} onChange={(e) => setGithubUrl(e.target.value)} required="" />
                </div>
                <input type="checkbox" name="collaboration" id="collaboration" value={wantCollaboration} onChange={(e) => setWantCollaboration(e.target.checked)} />
                <label for="collaboration" className="block mb-2 text-sm font-medium text-gray-900">Want Collaboration</label>
                <button type="submit" className="w-full text-white bg-blue-900 hover:bg-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add profile Details</button>

            </form>
        </div>

    )
}

export default AddProfileDetails