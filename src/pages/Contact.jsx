import React from 'react'

const Contact = () => {
  return (
    <div className="container mx-auto py-12">
        <div className="max-w-lg mx-auto px-4">
            <h2 className="flex justify-center text-3xl font-semibold text-gray-900 mb-4">
                Contact Us
            </h2>
            <form className="bg-white shadow-2xl rounded-lg px-6 py-8 ">
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" for="name">Name</label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name" type="text" placeholder="Enter your name"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" for="email">Email</label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email" type="email" placeholder="Enter your email"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" for="message">Message</label>
                    <textarea
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="message" rows="6" placeholder="Enter your message"></textarea>
                </div>
                <div className="flex justify-end">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button">
                        Send
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact