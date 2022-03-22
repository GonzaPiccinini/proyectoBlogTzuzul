import AdminComments from "../../../components/Admin/AdminComments"
import AdminPage from "../../../components/Admin/AdminPage"

export const getServerSideProps = async ({ req }) => {
    const res = await fetch(`http://${req.headers.host}/api/comments/getAllComments`)
    const data = await res.json()

    return {
        props: {
            comments: data
        }
    }
}


const AdminCommentsPage = ({ comments }) => {

    return (
        <AdminPage>
            {comments.length !== 0
                ?   <AdminComments comments={comments}/>
                :   <div className="mt-5 min-h-screen">
                        <h1 className="text-center text-2xl font-semibold">No hay ningun comentario</h1>
                    </div>}
        </AdminPage>
    )
}

export default AdminCommentsPage