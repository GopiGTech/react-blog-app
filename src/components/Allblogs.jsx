import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { Plus } from "lucide-react"

export const Allblogs = () => {

  const navigate = useNavigate()

  const user = localStorage.getItem("loggedInUser")

  const Allblogs = (JSON.parse(localStorage.getItem("blog")) || [])
    .filter((blog) => blog.author === user)

  return (
    <>
      <div className='2xl:container mx-auto bg-gradient-to-r from-blue-50 to-pink-50'>
        <div className='w-[80%] mx-auto flex flex-col justify-center items-center min-h-screen'>

          <h1 className='font-sans font-bold text-8xl mb-11 text-center'>
            All Blogs
          </h1>

          {Allblogs.length === 0 ? (

            <div className="text-center text-gray-500 mt-10">
              <p className="text-2xl font-semibold mb-3">
                ✍️ No blogs yet
              </p>

              <p className="text-lg">
                Start sharing your ideas by creating your first blog post!
              </p>
            </div>

          ) : (

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>

              {Allblogs.map((blog, index) => (
                <Blogdata
                  key={index}
                  title={blog.title}
                  content={blog.content}
                />
              ))}

            </div>

          )}

        </div>
      </div>

      {/* Floating + Button */}
      <button
        onClick={() => navigate("/writepost")}
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-800 text-white p-4 rounded-full shadow-lg transition duration-300"
      >
        <Plus size={28} />
      </button>

    </>
  )
}


const Blogdata = ({ title, content }) => {

  return (
    <>
      <Link to={`/${encodeURIComponent(title)}`}>
        <div className='border border-gray-300 rounded-xl shadow-md p-6 bg-white
        hover:shadow-xl hover:scale-105 hover:bg-gray-50
        transition duration-300 ease-in-out h-full'>

          <h1 className='font-semibold'>{title}</h1>

          <p className='line-clamp-2 text-gray-500'>
            {content}
          </p>

        </div>
      </Link>
    </>
  )
}