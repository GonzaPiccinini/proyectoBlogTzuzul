import Link from "next/link"
import Image from "next/image"
import { BsInstagram, BsFacebook, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className="h-[300px] flex flex-col items-center justify-center border-solid border-black border-t-[1px] border-opacity-20">
            <div>
                <h1 className="text-lg">Derechos reservados 2022 ©</h1>
            </div>
            <div className="relative w-[300px] h-[64px] my-5">
                <Image src='/logo.svg' layout="fill" />
            </div>
            <div className="w-[300px] border-solid border-black border-t-2">
                <div className="flex mt-5 justify-between">
                    <button>
                        <BsLinkedin size={40} />
                    </button>
                    <button>
                        <BsInstagram size={40} />
                    </button>
                    <button>
                        <BsFacebook size={40} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Footer