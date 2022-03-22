import { useEffect, useState } from 'react'
import { BiLike, BiDislike } from 'react-icons/bi'
import { useSession } from 'next-auth/react'
import axios from 'axios'

const LikeButton = ({ post }) => {
    const { data: session } = useSession()
    const [userRated, setUserRated] = useState('')

    useEffect(() => {
        if (post.like.length !== 0 || post.dislike.length !== 0) {
            if (post.like.includes(session?.user?.id)) {
                setUserRated('like')
            } else if (post.dislike.includes(session?.user?.id)) {
                setUserRated('dislike')
            }
        }
    }, [session])

    const likeFunction = (option) => {
        if (session) {
            if (userRated === '') {
                if (option === 'like') {
                    axios.post('/api/posts/likes', {
                        userId: session?.user?.id,
                        postId: post.id,
                        userRated,
                        option: 'like',
                    })
                        .then(res => {
                            console.log(res.data)
                            setUserRated(res.data.rated)
                        })
                        .catch(error => {
                            console.log(error)
                        })
                } else if (option === 'dislike') {
                    axios.post('/api/posts/likes', {
                        userId: session?.user?.id,
                        postId: post.id,
                        userRated,
                        option: 'dislike',
                    })
                        .then(res => {
                            console.log(res.data)
                            setUserRated(res.data.rated)
                        })
                        .catch(error => {
                            console.log(error)
                        })
                }
            } else {
                if (option === 'like') {
                    axios.post('/api/posts/likes', {
                        userId: session?.user?.id,
                        postId: post.id,
                        userRated,
                        option: 'like',
                    })
                        .then(res => {
                            console.log(res.data)
                            setUserRated(res.data.rated)
                        })
                        .catch(error => {
                            console.log(error)
                        })
                } else if (option === 'dislike') {
                    axios.post('/api/posts/likes', {
                        userId: session?.user?.id,
                        postId: post.id,
                        userRated,
                        option: 'dislike',
                    })
                        .then(res => {
                            console.log(res.data)
                            setUserRated(res.data.rated)
                        })
                        .catch(error => {
                            console.log(error)
                        })
                }
            }
        }
    }

    return (
        <div className='flex justify-center mt-10 mb-3'>
            <div className='w-full md:w-[70%] flex flex-col items-end'>
                <div className='flex gap-2 text-lg'>
                    <button
                        onClick={() => likeFunction('like')}
                        className='flex gap-1 items-center text-sm md:text-lg'>
                        Me gusta<BiLike className={userRated === 'like'  ? 'text-sky-500' : null} size={25} />
                    </button>
                    <button
                        onClick={() => likeFunction('dislike')}
                        className='flex gap-1 items-center text-sm md:text-lg'>
                        No me gusta<BiDislike className={userRated === 'dislike' ? 'text-sky-500' : null} size={25} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LikeButton