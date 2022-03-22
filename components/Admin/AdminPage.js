import AdminNavbar from "./AdminNavbar"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const AdminPage = ({ children }) => {
    const { data: session, status } = useSession()
    const router = useRouter()

    if (status !== 'loading') {
        if (session === null || session?.user?.role !== 'admin') {
            router.replace('/')
        }
    }

    return (
        <>
            <AdminNavbar />
            {children}
        </>
    )
}

export default AdminPage