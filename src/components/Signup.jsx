import React from 'react'
import { useState } from 'react'

export const Signup = () => {
  let [name,setName]= useState("")
  let [email,setEmail]= useState("")
  let [password,setPassword]= useState("")


const handleSignup= ()=>{
  const userdata = {name,email,password}

  localStorage.setItem("user",JSON.stringify(userdata))

  alert("Successfully Signed up")
}

  return (
    <div>
      {/*Starting Signup form*/}
      <div className="2xl:container mx-auto bg-gray-100">
        <div className="w-[80%] mx-auto flex flex-col items-center justify-center min-h-screen">
          <div className="shadow-2xl p-10 bg-white w-full max-w-sm rounded-md">
            <h1 className="font-sans font-semibold text-5xl text-center mb-9">Sign Up</h1>
            <div className="flex flex-col gap-4">
              <input type="text" placeholder="Name" className=" border-[1px] border-[#787777] rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 " onChange={(e)=>{
                setName(e.target.value)
              }}/>
              <input type="email" placeholder="Email" className=" border-[1px] border-[#787777] rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e)=>{
                setEmail(e.target.value)
              }}/>
              <input type="password" placeholder="Password" className=" border-[1px] border-[#787777] rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e)=>{
                setPassword(e.target.value)
              }} />
              <button type="submit" className="border border-blue-700 rounded-sm bg-blue-600 text-white p-2 hover:bg-blue-700" onClick={handleSignup}>Sign Up</button>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Signup
