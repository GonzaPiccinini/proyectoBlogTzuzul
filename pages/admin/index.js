import AdminPage from "../../components/Admin/AdminPage"
import Image from "next/image"

const Admin = () => {
    return (
        <AdminPage>
            <div className="mt-10 min-h-screen flex flex-col items-center">
                <h3 className="text-2xl text-center font-semibold">Bienvenido a al panel de Administrador de</h3>
                <Image src={'/logo.svg'} width={450} height={128} />
            </div>
        </AdminPage>
    )
}

export default Admin