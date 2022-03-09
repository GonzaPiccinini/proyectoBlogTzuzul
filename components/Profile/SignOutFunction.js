import { signOut } from "next-auth/react"
import { FiLogOut } from 'react-icons/fi'

const SignOutFunction = () => {

    return (
        <div className="mt-10 w-full flex justify-center">
            <button onClick={() => signOut()} className='flex items-center px-3 py-3 rounded-md border-solid border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white duration-75'>
                <span className="pr-2">Cerrar sesion</span>
                <FiLogOut />
            </button>
        </div>
    )
}

export default SignOutFunction