import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { ThumbsUp } from "lucide-react"

export const Blogdetails = () => {

    const data = useParams()
    const navigate = useNavigate()

    const blogs = JSON.parse(localStorage.getItem("blog")) || []

    const Blogdata = blogs.find(
        (b) => b.title === decodeURIComponent(data.title)
    )

    useEffect(() => {
        if (!Blogdata) {
            navigate("/allblogs", { replace: true })
        }
    }, [Blogdata, navigate])

    if (!Blogdata) return null

    const [likes, setLikes] = useState(Blogdata.likes ?? 0)
    const [liked, setLiked] = useState(Blogdata.liked ?? false)

    const handleDelete = () => {

        const updatedblog = blogs.filter(
            (b) => b.title !== Blogdata.title
        )

        localStorage.setItem("blog", JSON.stringify(updatedblog))

        alert("Blog successfully deleted")

        navigate("/allblogs", { replace: true })
    }

    const handleEdit = () => {
        navigate(`/edit/${encodeURIComponent(Blogdata.title)}`)
    }

    const handleBack = () => {
        navigate(-1)
    }

    const handleliked = () => {

        const blog = JSON.parse(localStorage.getItem("blog")) || []

        const likedblog = blog.map((b) => {

            if (b.title === decodeURIComponent(data.title)) {

                const currentLikes = b.likes ?? 0
                const isliked = b.liked ?? false

                return {
                    ...b,
                    likes: isliked ? Math.max(currentLikes - 1, 0) : currentLikes + 1,
                    liked: !isliked
                }
            }

            return b
        })

        localStorage.setItem("blog", JSON.stringify(likedblog))

        const newLikes = liked ? Math.max(likes - 1, 0) : likes + 1

        setLikes(newLikes)
        setLiked(!liked)
    }

    return (
        <div className="2xl:container mx-auto min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 flex items-center justify-center">

            <div className="w-[80%] mx-auto bg-white shadow-lg rounded-2xl p-8">

                <h1 className="text-4xl font-bold mb-4 text-gray-800 text-center">
                    {Blogdata.title}
                </h1>

                <p className="text-gray-700">{Blogdata.content}</p>

                <div className="flex gap-4 mt-4">

                    <button
                        className="border border-gray-300 rounded-sm bg-slate-100 p-1 px-3"
                        onClick={handleEdit}
                    >
                        Edit
                    </button>

                    <button
                        className="border border-gray-300 rounded-sm bg-slate-100 p-1 px-3"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>

                    <button
                        className="border border-gray-300 rounded-sm bg-slate-100 p-1 px-3"
                        onClick={handleBack}
                    >
                        Back
                    </button>

                    <button
                        className="border border-gray-300 rounded-sm bg-slate-100 p-1 px-3 flex items-center gap-1"
                        onClick={handleliked}
                    >
                        <ThumbsUp
                            className={`w-5 h-5 ${liked ? "text-blue-500" : "text-gray-500"}`}
                        />
                        {likes}
                    </button>

                </div>

            </div>

        </div>
    )
}