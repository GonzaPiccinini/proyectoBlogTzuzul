import { useSession } from "next-auth/react"
import Image from "next/image"

const ProfileSessionContainer = () => {
    const { data: session, status } = useSession()

    if (status !== 'loading' && status === 'authenticated') {
        
        return (
            <div className="mt-24 w-full flex flex-col items-center">
                <div className="flex flex-col items-center px-10 py-10 gap-5 rounded-md border-solid border-[1px] border-black border-opacity-10 shadow-sm shadow-[0_3px_6px_rgb(0,0,0,0.1)] hover:-translate-y-1 duration-100">
                    <div className="relative w-[100px] h-[100px] rounded-full border-2 border-solid border-black border-opacity-10">
                        <Image className="rounded-full" src={session?.user?.image} layout='fill'/>
                    </div>
                    <div>
                        <h1 className="text-center font-semibold">{session?.user?.name}</h1>
                    </div>
                    <div>
                        <h1 className="text-center font-semibold">{session?.user?.email}</h1>
                    </div>
                </div>
            </div>
        )
    } else {
        
        return(
            <div className="w-full mt-10">
                <h1 className="font-semibold text-2xl text-center">No has iniciado sesion</h1>
            </div>
        )
    }


}   

export default ProfileSessionContainer