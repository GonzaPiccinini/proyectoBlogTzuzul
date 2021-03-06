import PostsPageUp from "../../components/Posts/Posts"
import Image from "next/image"
import Link from "next/link"
import Filter from "../../components/Posts/Filter"
import { FaCalendarDay } from 'react-icons/fa'
import { BsCircleFill } from 'react-icons/bs'
import { GrFormSearch } from 'react-icons/gr'
import { useEffect, useState } from "react"

export const getServerSideProps = async (context) => {
    const res = await fetch(`http://${context.req.headers.host}/api/posts`)

    const data = await res.json()

    return {
        props: {
            posts: data
        }
    }
}

const PostsPage = ({ posts }) => {
    const [search, setSearch] = useState('')
    const [dataPosts, setDataPosts] = useState([])

    useEffect(() => {
        setDataPosts(posts)
    }, [])

    const filter = (searchTerm) => {
        let searchResults = posts.filter(post => {
            if (post.title.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
                return post
            }
        })
        setDataPosts(searchResults)
        console.log(dataPosts)
    }

    const handleChange = e => {
        setSearch(e.target.value)
        filter(e.target.value)
    }

    return (
        <div className="min-h-screen">
            <PostsPageUp />
            <div className='mt-5 w-full flex flex-col md:flex-row justify-end gap-5 md:gap-32 items-center'>
                <div className='relative w-4/5 md:w-2/5 h-auto flex justify-end items-center'>
                    <input
                        id="inputSearch"
                        autoComplete="off"
                        className='outline-none w-full px-3 py-2 border-[1px] border-solid border-black border-opacity-20 rounded-md focus:border-sky-500'
                        value={search}
                        placeholder='Buscar'
                        onChange={handleChange}
                    />
                    <label htmlFor="inputSearch" className='absolute pr-3'><GrFormSearch size={20} /></label>
                </div>
                <Filter />
            </div>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 justify-items-center">
                {dataPosts.map(post => {
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

export default PostsPage