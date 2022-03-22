import Image from 'next/image'
import { BsCircleFill } from 'react-icons/bs'
import { HiArrowLeft } from 'react-icons/hi'
import { FaCalendarDay } from 'react-icons/fa'
import PostsPageUp from '../../components/Posts/Posts'
import Comments from '../../components/Posts/Comments'
import ReactMarkdown from 'react-markdown'
import { useRouter } from 'next/router'
import LikeButton from '../../components/Posts/LikeButton'

export const getServerSideProps = async ({ req, query }) => {
    const response = await fetch(`http://${req.headers.host}/api/posts/getPostById?id=${query.idPost}`)
    const data = await response.json()

    return {
        props: {
            post: { id: query.idPost, ...data }
        }
    }
}

const idPosts = ({ post }) => {
    const router = useRouter()

    return (
        <div>
            <div className='w-full md:w-[15%] mt-5 flex justify-start md:justify-center'>
                <button 
                    onClick={() => router.back()}
                    className='flex items-center gap-1 font-semibold hover:-translate-x-1 duration-100'>
                    <HiArrowLeft size={30} />Volver
                </button>
            </div>
            <article className='mt-5 min-h-screen flex flex-col'>
                <div className='flex justify-center'>
                    <div className='w-full md:w-[70%] flex justify-between'>
                        <div className='flex relative w-[40px] h-[40px] items-center'>
                            <Image
                                className='rounded-full'
                                src={post.author.image}
                                layout='fill'
                                objectFit='cover' />
                            <h1 className='ml-11 font-medium'>{post.author.name}</h1>
                        </div>
                        <div className='flex items-center gap-1 text-[#aaaaaa]'>
                            <FaCalendarDay />
                            <span className='font-light'>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='mt-5 w-full md:w-[70%]'>
                        <h1 className='text-2xl md:text-5xl font-bold'>{post.title}</h1>
                    </div>
                </div>
                <div className='mt-3 w-full flex justify-center'>
                    <div className='w-full md:w-[70%]'>
                        <div className='max-w-min rounded-full px-2 border-solid border-black border-opacity-10 border-[1px]'>
                            <p className="flex items-center text-sm font-medium"><BsCircleFill className="mr-1"
                                color={`${post.category === 'Reviews'
                                    ? '#2cd173'
                                    : post.category === 'Noticias'
                                        ? '#ff0000'
                                        : post.category === 'Hardware'
                                            ? '#8f59ef'
                                            : post.category === 'Gaming'
                                                ? '#0078f2'
                                                : '#f7ad39'}`}
                                size={8} />{post.category}</p>
                        </div>
                    </div>
                </div>
                <div className='mt-3 w-full flex justify-center'>
                    <div className='relative w-full md:w-[70%] h-[30rem]'>
                        <Image
                            className='rounded-lg'
                            src={post.image}
                            layout='fill'
                            objectFit='cover' />
                    </div>
                </div>
                <div className='mt-3 flex justify-center'>
                    <div className='w-full md:w-[70%] prose prose-base md:prose-xl prose-invert prose-gray'>
                        <ReactMarkdown>
                            {post.content}
                        </ReactMarkdown>
                    </div>
                </div>
            </article>
            <LikeButton post={ post }/>
            <Comments post={post} />
        </div>
    )
}

export default idPosts