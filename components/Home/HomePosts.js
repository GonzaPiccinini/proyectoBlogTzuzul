import Link from "next/link"
import Image from 'next/image'
import { BsCircleFill } from 'react-icons/bs'
import { FaCalendarDay } from 'react-icons/fa'

const HomePosts = ({ posts }) => {

    return (
        <div className="mt-5">
            <div>
                <h1 className="text-xl font-medium">Publicaciones destacadas</h1>
            </div>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 justify-items-center">
                {posts.map(post => {
                    return (
                        <div key={post.id}>
                            <Link href={`/publicaciones/${post.id}`}>
                                <article className="w-[370px] mb-12 cursor-pointer hover:opacity-50 duration-100">
                                    <div className="w-full">
                                        <Image className="rounded-xl" src={post.image} width={370} height={216} objectFit='cover' />
                                    </div>
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
                                    <div className="mt-2">
                                        <h1 className="text-xl font-bold">{post.title}</h1>
                                    </div>
                                    <p className="flex items-center text-[#cccccc]"><FaCalendarDay color="#cccccc" className="mr-2" size={12} />{new Date(post.date).toLocaleDateString()}</p>
                                </article>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HomePosts