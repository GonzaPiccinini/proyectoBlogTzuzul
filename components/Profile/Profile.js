import SignOutFunction from "./SignOutFunction"
import ProfileSessionContainer from "./ProfileSessionContainer"
import { useSession, signIn } from 'next-auth/react'

const Profile = () => {
    const { data: session } = useSession()

    return (
        <div>
            <div className="py-5 border-solid border-black border-b-[1px] border-opacity-20">
                <h1 className="text-xl text-[rgb(10, 40, 62)] font-medium">Perfil</h1>
            </div>
            <div className="w-full flex flex-col items-center gap-5">
                <ProfileSessionContainer />
                {!session
                    ? <div className="bg-sky-500 max-w-max px-3 py-2 rounded-md text-white hover:bg-sky-400 duration-150 cursor-pointer">
                        <button className="font-bold" onClick={() => signIn()}>Iniciar sesión</button>
                    </div>
                    : <SignOutFunction />}
            </div>
        </div>
    )
}

export default Profile