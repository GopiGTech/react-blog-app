import {useState} from 'react'
import { useParams,useNavigate} from 'react-router-dom'
import { ThumbsUp } from 'lucide-react'

export const Blogdetails = () => {

    let data = useParams()
    const navigate = useNavigate()
    const blogs = JSON.parse(localStorage.getItem("blog"))

    const Blogdata = blogs.find((b) => {
        return b.title === decodeURIComponent(data.title)
    })

    if (!Blogdata) {
        return <p>Blog not found</p>;
    }


    const handleDelete = () => {
        const updatedblog = blogs.filter((b) => {
            return b.title !== Blogdata.title
        })
        localStorage.setItem("blog", JSON.stringify(updatedblog))
        alert("Blog successfully deleted")
        navigate("/allblogs")
    }

    const handleEdit = () => {
        navigate(`/edit/${encodeURIComponent(Blogdata.title)}`)

    }

    const handleBack = () => {
        navigate(`/allblogs`)
    }

    //state variable for likes
    let [likes, setLikes] = useState(blogs.likes || 0)
    let [liked, setLiked] = useState(blogs.likes || false)

    const handleliked = () => {
        const blog = JSON.parse(localStorage.getItem("blog"))
        const likedblog = blog.map((b) => {
            if (b.title === decodeURIComponent(data.title)) {
                const isliked = b.liked || false
                return {
                    ...b,
                    likes: isliked ? b.likes - 1 : b.likes + 1,
                    liked: !isliked
                }
            }
            return b;
        })
            localStorage.setItem("blog", JSON.stringify(likedblog));
            setLikes(liked ? likes - 1 : likes + 1);
            setLiked(!liked);
    }


return (
    <div className='2xl:container mx-auto min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 flex items-center justify-center'>
        <div className="w-[80%] mx-auto  bg-white shadow-lg rounded-2xl p-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-800 text-center">{Blogdata.title}</h1>
            <p className="text-gray-700">{Blogdata.content}</p>
            <div className='flex gap-4 mt-4'>
                <button className='border border-gray-300 rounded-sm bg-slate-100 p-1 px-3' onClick={handleEdit} >Edit</button>
                <button className='border border-gray-300 rounded-sm bg-slate-100 p-1 px-3' onClick={handleDelete}>Delete</button>
                <button className='border border-gray-300 rounded-sm bg-slate-100 p-1 px-3' onClick={handleBack}>Back</button>
                <button className='border border-gray-300 rounded-sm bg-slate-100 p-1 px-3' onClick={handleliked}><ThumbsUp className={`w-5 h-5 ${liked ? "text-blue-500" : "text-gray-500"}`} /></button>
            </div>
        </div>
    </div>
)
}
