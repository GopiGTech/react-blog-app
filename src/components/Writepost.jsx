import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Writepost = () => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!title || !content) {
            alert("Please fill all the fields")
            return
        }

        // get logged in user
        const user = localStorage.getItem("loggedInUser")

        const newBlog = {
            title,
            content,
            likes: 0,
            liked: false,
            author: user
        }

        const existingBlogs = JSON.parse(localStorage.getItem("blog")) || []

        // check duplicate title (case insensitive)
        const duplicate = existingBlogs.find(
            (b) => b.title.toLowerCase() === title.toLowerCase()
        )

        if (duplicate) {
            alert("Blog with this title already exists")
            return
        }

        existingBlogs.push(newBlog)

        localStorage.setItem("blog", JSON.stringify(existingBlogs))

        alert("Blog posted successfully")

        setTitle("")
        setContent("")

        navigate("/allblogs")
    }

    return (
        <div>
            <div className="2xl:container mx-auto bg-gray-100 bg-gradient-to-r from-blue-50 to-pink-50">
                <div className="w-[80%] mx-auto flex flex-col justify-center items-center min-h-screen">

                    <form onSubmit={handleSubmit} className="max-w-sm p-10 shadow-2xl bg-white">

                        <h1 className="font-sans font-semibold text-black mb-8 text-center text-4xl">
                            Write a Blog Post
                        </h1>

                        <div className="flex flex-col w-full gap-4">

                            <label htmlFor="title" className="font-medium">
                                Title
                            </label>

                            <input
                                type="text"
                                id="title"
                                value={title}
                                className="border-[2px] border-gray-300 rounded-md w-full focus:outline-none p-2 text-xl font-medium"
                                onChange={(e) => setTitle(e.target.value)}
                            />

                            <label htmlFor="content" className="font-medium">
                                Content
                            </label>

                            <textarea
                                id="content"
                                value={content}
                                className="border-[2px] border-gray-300 rounded-md w-full focus:outline-none p-2 text-xl font-medium"
                                onChange={(e) => setContent(e.target.value)}
                            />

                            <button
                                type="submit"
                                className="border-[2px] border-blue-700 rounded-md bg-blue-600 text-white p-2 hover:bg-blue-800 mt-2"
                            >
                                Submit
                            </button>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}