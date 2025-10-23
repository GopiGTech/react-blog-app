import {useState} from 'react'


export const Writepost = () => {
    let [title,setTitle]= useState("")
    let [content,setContent]=useState("")

    const handleSubmit= (e)=>{
        e.preventDefault()
        
        if (!title || !content){
            alert("Please fill all the field")
            return
        }
        const newBlog ={title,content}

        const existingBlogs= JSON.parse(localStorage.getItem("blog")) || []

        existingBlogs.push(newBlog)

        localStorage.setItem("blog",JSON.stringify(existingBlogs))
        alert("Blog posted successfully")
        setTitle('')
        setContent('')
    }
    
    return (
        <div>
            <div className='2xl:container mx-auto bg-gray-100 bg-gradient-to-r from-blue-50 to-pink-50'>
                <div className='w-[80%] mx-auto flex flex-col justify-center items-center min-h-screen'>
                    <form onSubmit={handleSubmit} className='max-w-sm p-10 shadow-2xl bg-white'>
                    
                            <h1 className='font-sans font-semibold text-black mb-8 text-center text-4xl'>Write a Blog Post</h1>
                        
                        <div className='flex flex-col w-full gap-4'>

                            <label htmlFor="title" className='font-medium'>Title</label>
                            <input type="text" id='title' className='border-[2px] border-gray-300 rounded-md w-full focus:outline-none p-2 text-xl font-medium' onChange={(e)=>{setTitle(e.target.value)}} />

                            <label htmlFor="Content" className='font-medium'>Content</label>
                            <textarea type="text" id="Content" className='border-[2px] border-gray-300 rounded-md w-full focus:outline-none p-2 text-xl font-medium' onChange={(e)=>{setContent(e.target.value)}} />

                            <button type='submit' className='border-[2px] border-blue-700 rounded-md bg-blue-600 text-white p-2 hover:bg-blue-800 mt-2'>Submit</button>
                        </div>

                    </form>
                </div>

            </div>

        </div >
    )
}
