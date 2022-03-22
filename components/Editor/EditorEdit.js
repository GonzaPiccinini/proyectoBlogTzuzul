import '@uiw/react-markdown-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'
import dynamic from 'next/dynamic'
import { useState, useRef } from "react"
import axios from 'axios'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

const MarkDownEditor = dynamic(
    () => import('@uiw/react-markdown-editor').then(mod => mod.default), {
        ssr: false
    }
)

const Editor = ({ post }) => {
    const { data: session } = useSession()
    const router = useRouter()
    const title = useRef()
    const image = useRef()
    const highlight = useRef()
    const category = useRef()
    const [content, setContent] = useState('')

    const saveContent = () => {
        axios.post('/api/admin/edit', {
            postId: post.id,
            title: title.current.value,
            author: session.user,
            image: image.current.value,
            highlight: highlight.current.checked,
            category: category.current.value,
            date: new Date(),
            like: [],
            dislike: [],
            content
        })
            .then(res => {
                router.replace('/admin/posteos')
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='min-h-screen mt-10 flex justify-center'>
            <div className='w-[90%] md:w-[70%] flex flex-col items-center gap-5'>
                <div className='w-full flex flex-col md:flex-row justify-center gap-4 md:gap-2'>
                    <div className='w-full flex flex-col'>
                        <label className='font-medium' htmlFor='titulo'>Titulo</label>
                        <input  
                            id='titulo'
                            defaultValue={post.title}
                            ref={title}
                            type='text'
                            className='font-normal rounded-[4px] outline-none px-3 py-2 border-[1px] border-solid border-opacity-10 border-black focus:border-sky-500'/>
                    </div>
                    <div className='w-full flex flex-col'>
                        <label className='font-medium' htmlFor='imagen'>Imagen</label>
                        <input 
                            id='imagen'
                            defaultValue={post.image}
                            ref={image}
                            type='text'
                            className='font-normal rounded-[4px] outline-none px-3 py-2 border-[1px] border-solid border-opacity-10 border-black focus:border-sky-500'/>
                    </div>
                </div>
                <div className='w-full'>
                    <MarkDownEditor
                        value={post.content}
                        onChange={(editor,data,value) => {
                            setContent(value)
                        }}
                    />
                </div>
                <div className='w-full flex flex-col'>
                    <select ref={category} className='max-w-min outline-none' defaultValue={post.category}>
                        <option>Noticias</option>
                        <option>Reviews</option>
                        <option>Gaming</option>
                        <option>Hardware</option>
                        <option>Software</option>
                    </select>
                </div>
                <div className='w-full flex items-center'>
                    <label className='font-medium' htmlFor='destacado'>Publicacion destacada</label>
                    <input className='ml-1' name='destacado' type='checkbox' ref={highlight} defaultChecked={post.highlight}/>
                </div>
                <div className='mt-3 w-full flex justify-center gap-5'>
                    <button 
                        onClick={() => router.back()}
                        className='bg-red-500 font-medium text-white px-5 py-2 rounded-md'>
                            Cancelar
                    </button>
                    <button 
                        onClick={saveContent}
                        className='bg-emerald-500 font-medium text-white px-5 py-2 rounded-md'>
                            Guardar cambios
                    </button> 
                </div>
            </div>
        </div>
    )
}

export default Editor