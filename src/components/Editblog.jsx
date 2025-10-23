import { useState} from "react";
import {useNavigate, useParams } from "react-router-dom"


export const Editblog = () => {
        const data = useParams()
        const navigate = useNavigate()
        const blog= JSON.parse(localStorage.getItem("blog")) || []

        const editblog = blog.find((blog)=>blog.title === decodeURIComponent(data.edit))

        let[newtitle,setTitle]=useState(editblog?.title || "")
        let[newcontent,setContent] = useState(editblog?.content || "")

const handleSave= () =>{
    const saveblog= blog.map((blog)=>{
       return blog.title === decodeURIComponent(data.edit)? {...blog,title:newtitle,content:newcontent}: blog
    })

    localStorage.setItem("blog",JSON.stringify(saveblog))
    alert("Saved succesfully")
    navigate(`/${encodeURIComponent(newtitle)}`)
}

  return (
    <div>
        <div className="2xl:container mx-auto flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-[80%] mx-auto bg-white p-8 rounded-2xl shadow-lg flex flex-col text-left max-w-sm gap-8">
                <h1 className="text-left font-sans font-bold text-4xl">Edit Blog</h1>
                <label className="text-left font-sans font-bold text-xl">Enter new title</label>
                <input value={newtitle} type="text" placeholder="Enter new title" className=" border border-gray-400 rounded-sm focus:outline-none focus:ring-2 ring-blue-300 w-full p-2" onChange={(e)=>{setTitle(e.target.value)}}/>
                <textarea value={newcontent} type="text" placeholder="Enter new content" className=" border border-gray-400 rounded-sm focus:outline-none focus:ring-2 ring-blue-300 w-full p-2 pb-[100px]" onChange={(e)=>{setContent(e.target.value)}}/>
                <button type="submit" className="border border-gray-400 rounded-sm bg-blue-500 text-white font-medium hover:bg-blue-700 w-full p-2" onClick={handleSave}>Save Changes</button>
            </div>
        </div>
    </div>
  )
}
