import { VscAccount } from 'react-icons/vsc'
import Link from 'next/link'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

const AccountIcon = () => {
    const { data: session } = useSession()

    return (
        <Link href='/perfil'>
            <div className="relative w-[30px] h-[30px] rounded-full cursor-pointer border-[1px] border-solid border-black border-opacity-10">
                <Image className='rounded-full' src={session.user.image} layout='fill' objectFit='cover' />
            </div>
        </Link>
    )
}

export default AccountIcon