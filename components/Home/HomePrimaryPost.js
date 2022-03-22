import Link from "next/link"
import Image from "next/image"
import { BsCircleFill, BsArrowRight } from 'react-icons/bs'

const HomePrimaryPost = ({ post }) => {

    return (
        <Link href={`/publicaciones/${post.id}`}>
            <article className='w-full flex flex-col md:flex-row mt-12 md:mt-5 cursor-pointer pb-16 md:pb-5 border-b-[1px] border-black border-solid border-opacity-20 hover:opacity-70 duration-100'>
                <div className="relative w-full h-[325px] md:h-[450px] md:w-1/2 cursor-pointer">
                    <Image className="rounded-xl" src={post.image} layout='fill' objectFit='cover'/>
                </div>
                <div className="mt-5 md:mt-0 md:ml-[30px] w-full md:w-[546px] flex flex-col gap-5 md:gap-10">
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
                                        size={8}/>{post.category}
                        </p>
                    </div>
                    <div>
                        <h1 className="font-bold text-3xl md:text-5xl">{post.title}</h1>
                    </div>
                    <div className="flex items-center cursor-pointer md:hover:translate-x-1 duration-150">
                        <h1 className="text-lg mr-1">Ver más</h1><BsArrowRight size={20} />
                    </div>
                </div>
            </article>
        </Link>
    )
}

export default HomePrimaryPost