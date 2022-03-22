import Link from "next/link"
import { IoMdAdd } from 'react-icons/io'

const AddPostButton = () => {
    return (
        <div className='mt-3 flex justify-end'>
            <Link href='/admin/posteos/crear'>
                <button className="flex items-center rounded-md gap-1 text-white bg-emerald-500 hover:bg-emerald-400 duration-100 px-3 py-2">
                    Añadir post
                    <IoMdAdd color="#ffffff" size={20}/>
                </button>
            </Link>
        </div>
    )
}

export default AddPostButton