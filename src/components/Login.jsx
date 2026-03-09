import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = () => {

    const input = JSON.parse(localStorage.getItem("user"))

    if (input && input.email === email && input.password === password) {

      // store logged in user
      localStorage.setItem("loggedInUser", email)

      alert("Successfully Logged in")

      navigate("/dashboard")

    } else {

      alert("Invalid email or password")

    }

  }

  return (
    <div>

      {/* Starting Login */}

      <div className="2xl:container mx-auto bg-gray-100">

        <div className="w-[80%] mx-auto flex flex-col items-center justify-center min-h-screen">

          <div className="shadow-2xl p-10 bg-white w-full max-w-sm rounded-md">

            <h1 className="font-sans font-semibold text-5xl text-center mb-9">
              Login
            </h1>

            <div className="flex flex-col gap-4">

              <input
                type="text"
                placeholder="Email"
                className="border-[1px] border-[#787777] rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                className="border-[1px] border-[#787777] rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="submit"
                className="border border-blue-700 rounded-sm bg-blue-600 text-white p-2 hover:bg-blue-700"
                onClick={handleLogin}
              >
                Login
              </button>

            </div>

            <p className="mt-4 text-center text-gray-600">

              Don’t have an account?

              <span
                className="text-blue-500 cursor-pointer hover:underline"
                onClick={() => navigate("/signup")}
              >
                Sign up
              </span>

            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Login