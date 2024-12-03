"use client"
import React from 'react'
import Head from 'next/head';

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center border-2 border-blue-200 bg-gray-100">
      <Head>
        <title>Login Page</title>
      </Head>
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form action="/login" method="POST">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password:</label>
            <input type="password" id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div className="mb-4">
            <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Login
            </button>
          </div>
          <div className="text-center">
            <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default page
