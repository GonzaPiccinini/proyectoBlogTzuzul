import Link from "next/link"

const AdminNavbar = () => {
    return (
        <div>
            <div className="py-5 border-solid border-black border-b-[1px] border-opacity-20">
                <nav>
                    <ul className="flex justify-center md:justify-start">
                        <li className="pr-5 border-solid border-r-[1px] border-r-black border-opacity-20"><Link href='/admin'>Inicio</Link></li>
                        <li className="px-5 border-solid border-r-[1px] border-r-black border-opacity-20"><Link href='/admin/posteos'>Posteos</Link></li>
                        <li className="pl-5"><Link href='/admin/comentarios'>Comentarios</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default AdminNavbar