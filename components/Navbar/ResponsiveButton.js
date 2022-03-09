import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'

const ResponsiveButton = ({ isOpen, handleOpen }) => {
    return (
        <div className='absolute right-0 flex justify-end md:fixed md:right-auto md:-top-10 pr-10'>
            <button className='flex md:fixed md:-top-10' onClick={handleOpen}>
                {
                    isOpen
                        ? <FaTimes size={30} />
                        : <FaBars size={30} />
                }
            </button>
        </div>
    )
}

export default ResponsiveButton