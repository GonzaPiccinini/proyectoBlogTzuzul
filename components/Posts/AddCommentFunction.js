import { BsCheck2 } from 'react-icons/bs'
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

const AddCommentFunction = ({ isOpen, post }) => {
    const router = useRouter()
    const { data: session } = useSession()
    const [content, setContent] = useState('')
    
    const saveComment = (e) => {
        e.preventDefault()
        axios.post('/api/comments/create', {
            post: post.id, 
            author: session.user,
            date: new Date(),
            content: content,
        })
            .then(res => {
                router.reload()
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            {isOpen
                ?   <form 
                        onSubmit={saveComment}
                        className='flex flex-col items-end gap-2 mb-5'>
                        <textarea
                            value={content}
                            onChange={e => setContent(e.target.value)}
                            className="w-full h-40 px-3 py-2 overflow-hidden outline-none focus:border-sky-500 resize-none rounded-lg border-[1px] border-solid border-black border-opacity-20" />
                        <button 
                            type='submit' 
                            className='flex max-w-min items-center text-white rounded-lg bg-emerald-500 hover:bg-emerald-400 duration-100 px-3 py-2 gap-1'>
                            Añadir
                            <BsCheck2 size={20} />
                        </button>
                    </form>
                : null}
        </div>
    )
}

export default AddCommentFunction