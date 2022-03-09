import Image from "next/image"
import Link from "next/link"
import { useState } from 'react'
import ResponsiveButton from './ResponsiveButton.js'
import { signIn, useSession } from 'next-auth/react'
import AccountIcon from "./AccountIcon.js"

const Navbar = () => {
    const { data: session } = useSession()
    const [isNavOpen, setIsNavOpen] = useState(false)

    const openNav = () => {
        setIsNavOpen(!isNavOpen)
    }

    return (
        <div className="fixed top-0 bg-white w-screen h-16 flex items-center border-b-[1px] border-solid border-black border-opacity-10 shadow-sm shadow-[0_1px_6px_rgb(0,0,0,0.1)] md:justify-center">
            <nav className="w-full flex items-center md:justify-between">
                <div className="w-auto flex items-center md:ml-14 cursor-pointer">
                    <Link href='/'>
                        <Image src='/logo.svg' width={225} height={64} />
                    </Link>
                </div>
                <div className="md:w-[80%] flex justify-end gap-5 items-center">
                    {!session
                        ? <div className="bg-sky-500 absolute md:static right-20 min-w-max list-none px-3 py-2 rounded-md text-white hover:bg-sky-400 duration-150 cursor-pointer">
                            <button className="font-bold" onClick={() => signIn()}>Iniciar sesión</button>
                          </div>
                        : <div className="absolute md:static right-20"><AccountIcon /></div>}
                    <ul className={`flex flex-col justify-start pt-10 items-center gap-5 overflow-y-hidden bg-white text-xl font-bold ${isNavOpen ? 'absolute left-0 top-16 h-screen w-screen' : 'h-0'} md:pt-0 md:pr-20 md:bg-white md:flex-row md:justify-end md:h-full md:items-center md:gap-6`}>
                        <li className="text-[rgb(10, 40, 62)] hover:text-gray-700 duration-150 cursor-pointer"><Link href='/'>Inicio</Link></li>
                        <li className="text-[rgb(10, 40, 62)] hover:text-gray-700 duration-150 cursor-pointer"><Link href='/publicaciones'>Publicaciones</Link></li>
                        <li className="text-[rgb(10, 40, 62)] hover:text-gray-700 duration-150 cursor-pointer"><Link href='/admin'>Admin</Link></li>
                    </ul>
                </div>
                <ResponsiveButton isOpen={isNavOpen} handleOpen={openNav} />
            </nav>
        </div>
    )
}

export default Navbar