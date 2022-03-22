import axios from "axios"
import Image from "next/image"
import { FaCalendarDay, FaTrash } from 'react-icons/fa'
import { useRouter } from "next/router"



const AdminComments = ({ comments }) => {
    const router = useRouter()

    const deleteComment = async (id) => {
        try {
            await axios.post('/api/admin/deleteComment',{
                id: id
            })
            router.reload()
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div className="mt-5 min-h-screen">
            {comments.map(comment => {
                return (
                    <div key={comment.content} className="mb-5 min-h-min px-5 py-2 rounded-md border-l-4 border-solid border-black shadow-[0_3px_10px_rgb(0,0,0,0.1)]">
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
                            <div className="mt-3 flex justify-end">
                                <button
                                onClick={() => deleteComment(comment.id)}
                                className="flex gap-1 items-center rounded-md px-3 py-2 bg-red-600 hover:bg-red-500 text-white duration-100">
                                    Borrar comentario<FaTrash size={20}/>
                                    </button>
                            </div>
                        </div>
                )
            })}
        </div>
    )
}

export default AdminComments