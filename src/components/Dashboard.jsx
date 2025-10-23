import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Dashboard = () => {

  const user = JSON.parse(localStorage.getItem("user"))
  const navigate = useNavigate()

  return (
    <div>
      <div className='2xl:container mx-auto bg-[#091826]'>
        <div className='w-[80%] mx-auto flex flex-col items-center justify-center min-h-screen gap-4'>
          <h1 className='font-sans font-semibold text-blue-400 text-2xl'>DashBoard</h1>
          <h2 className='font-sans text-white text-xl font-medium'>Welcome, {user && user.name || "Guest"}👋</h2>
          <Link to="/writepost">
            <button className='font-sans text-white border-[2px] border-blue-800 rounded-md bg-blue-700 p-2 hover:bg-blue-800'>✏️Write a Blog Post</button>
          </Link>
          <button
            className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition"
            onClick={() => navigate("/allblogs")}
          >
            All Blogs
          </button>
        </div>

      </div>
    </div>
  )
}
