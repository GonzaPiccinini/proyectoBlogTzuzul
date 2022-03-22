import { useEffect, useState } from "react"
import { FaCalendarDay } from 'react-icons/fa'
import Image from "next/image"
import AddComment from './AddComment'
import AddCommentFunction from "./AddCommentFunction"
import axios from "axios"

const Comments = ({ post }) => {
    const [comments, setComments] = useState([])
    const [isAddCommentOpen, setIsAddCommentOpen] = useState(false)

    useEffect(() => {
        axios.put('/api/comments', {
            id: post.id,
        })
            .then(res => {
                setComments(res.data)
            })
            .catch(error => {
                console.log(error)
            })

    }, [])

    const openAddComment = () => {
        setIsAddCommentOpen(!isAddCommentOpen)
    }

    return (
        <div className="flex justify-center">
            <section className='w-full md:w-[70%] border-t-[1px] border-solid border-black border-opacity-20'>
                <div className="my-5 flex items-center justify-between">
                    <h1 className="font-semibold">Comentarios</h1>
                    <AddComment isOpen={isAddCommentOpen} handleOpen={openAddComment} />
                </div>
                <AddCommentFunction isOpen={isAddCommentOpen} post={post} />
                {comments && comments.map(comment => {
                    return (
                        <div key={comment.id} className="mb-5 min-h-min px-5 py-2 rounded-md border-l-2 border-solid border-black shadow-[0_3px_10px_rgb(0,0,0,0.1)]">
                            <div className="mb-3 flex justify-between">
                                <div className="flex items-center gap-1">
                                    <div className='relative w-[40px] h-[40px]'>
                                        <Image
                                            className='rounded-full'
                                            src={comment.author.image}
                                            layout='fill'
                                            objectFit='cover' />
                                    </div>
                                    <h1 className="font-medium">{comment.author.name}</h1>
                                </div>
                                <div className='flex items-center gap-1 text-[#aaaaaa]'>
                                    <FaCalendarDay />
                                    <span className='font-light'>{new Date(comment.date).toLocaleDateString()}</span>
                                </div>
                            </div>
                            <div>
                                <p className="font-normal">"{comment.content}"</p>
                            </div>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}

export default Comments