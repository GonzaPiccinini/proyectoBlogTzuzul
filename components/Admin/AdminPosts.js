import Image from "next/image"
import Link from "next/link"
import { GrFormSearch } from 'react-icons/gr'
import { FaCalendarDay, FaTrash } from 'react-icons/fa'
import { BsCircleFill } from 'react-icons/bs'
import { MdEdit } from 'react-icons/md'
import axios from "axios"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import AddPostButton from './AddPostButton'

const AdminPosts = ({ posts }) => {
    const router = useRouter()
    const [search, setSearch] = useState('')
    const [dataPosts, setDataPosts] = useState([])

    const deletePost = async (id) => {
        try {
            await axios.post('/api/admin/delete', {
                id: id
            })
            router.reload()
        } catch (error) {
            console.log(error)
        }
    }

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
            <div className='w-full mt-5 flex justify-center'>
                <div className='relative w-4/5 md:w-2/5 h-auto flex justify-end items-center'>
                    <input
                        id="inputSearch"
                        className='outline-none w-full px-3 py-2 border-[1px] border-solid border-black border-opacity-20 rounded-md focus:border-sky-500'
                        value={search}
                        placeholder='Buscar'
                        onChange={handleChange}
                    />
                    <label htmlFor="inputSearch" className='absolute pr-3'><GrFormSearch size={20} /></label>
                </div>
            </div>
            <AddPostButton />
            <div className="mt-3 grid grid-cols-1 md:grid-cols-3 justify-items-center">
                {dataPosts.map(post => {
                    return (
                        <div className="mb-12" key={post.id}>
                            <div className="relative h-[361px] hover:opacity-50 duration-100">
                                <Link href={`/publicaciones/${post.id}`}>
                                    <article className="w-[370px] cursor-pointer">
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
                                        <div className="flex items-center mt-2">
                                            <h1 className="text-xl font-bold">{post.title}</h1>
                                        </div>
                                        <p className="flex items-center text-[#cccccc]"><FaCalendarDay color="#cccccc" className="mr-2" size={12} />{new Date(post.date).toLocaleDateString()}</p>
                                    </article>
                                </Link>
                            </div>
                            <div className="flex justify-around">
                                <Link href={`/admin/posteos/editar/${post.id}`}>
                                    <button className="flex gap-1 items-center rounded-md px-3 py-2 bg-[#0062F2] hover:bg-[#0078F2] text-white duration-100">
                                        Editar post<MdEdit size={15} />
                                    </button>
                                </Link>
                                <button
                                    onClick={() => deletePost(post.id)}
                                    className="flex gap-1 items-center rounded-md px-3 py-2 bg-red-600 hover:bg-red-500 text-white duration-100">
                                    Eliminar post<FaTrash size={15} />
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AdminPosts