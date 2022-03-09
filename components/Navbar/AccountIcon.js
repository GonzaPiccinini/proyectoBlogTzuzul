import { VscAccount } from 'react-icons/vsc'
import Link from 'next/link'
import Image from 'next/image'
import { useSession } from 'next-auth/react'


const AccountIcon = () => {
    const { data: session } = useSession()

    return (
        <Link href='/perfil'>
            <VscAccount className='bg-white rounded-full text-black cursor-pointer' size={35}/>
        </Link>
    )
}

export default AccountIcon