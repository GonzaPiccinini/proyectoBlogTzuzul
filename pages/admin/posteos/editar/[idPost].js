import AdminPage from '../../../../components/Admin/AdminPage'
import EditorEdit from '../../../../components/Editor/EditorEdit'

export const getServerSideProps = async ({ req, query }) => {
    const response = await fetch(`http://${req.headers.host}/api/posts/getPostById?id=${query.idPost}`)
    const data = await response.json()

    return {
        props: {
            post: { id: query.idPost, ...data }
        }
    }
}

const AdminEdit = ({ post }) => {
    return (
        <AdminPage>
            <EditorEdit post={post}/>
        </AdminPage>
    )
}

export default AdminEdit