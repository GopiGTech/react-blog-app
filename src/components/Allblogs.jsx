import React from 'react'
import {Link} from 'react-router-dom'

export const Allblogs = () => {
     const Allblogs = JSON.parse(localStorage.getItem("blog"))

  return (
    <>
        <div className='2xl:container mx-auto bg-gradient-to-r from-blue-50 to-pink-50'>
            <div className='w-[80%] mx-auto flex flex-col justify-center items-center min-h-screen'>
                <h1 className='font-sans font-bold text-8xl mb-11 text-center'>All Blogs</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 '>
                    {Allblogs.map((blog,index)=>{
                        return <Blogdata key={index} title = {blog.title} content = {blog.content}/>
                    })}
                    
                </div>
            </div>

        </div>
    </>
  )
}


const Blogdata = ({title,content})=>{
        return(
            <>
            <Link to={`/${title}`}>
            <div className='border border-gray-300 rounded-xl shadow-md p-6 bg-white
                    hover:shadow-xl hover:scale-105 hover:bg-gray-50
                    transition duration-300 ease-in-out h-full'>
                <h1 className='font-semibold '>{title}</h1>
                <p className='line-clamp-2 text-gray-500'>{content}</p>
            </div>
            </Link>
            </>
        )
}