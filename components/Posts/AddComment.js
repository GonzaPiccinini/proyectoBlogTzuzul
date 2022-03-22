import { IoMdAdd } from 'react-icons/io'

const AddComment = ({ isOpen, handleOpen }) => {
    return (
        <div>
            {!isOpen
                ?   <button
                        onClick={handleOpen}
                        className='flex items-center rounded-md gap-1 text-white bg-emerald-500 hover:bg-emerald-400 duration-100 px-3 py-2'>
                        Añadir comentario
                        <IoMdAdd size={20} />
                    </button>
                :   <button
                        onClick={handleOpen}
                        className='flex items-center rounded-md gap-1 text-white bg-red-500 hover:bg-red-400 duration-100 px-3 py-2'>
                        Cancelar
                    </button>}
        </div>
    )
}

export default AddComment