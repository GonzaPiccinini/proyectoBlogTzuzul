import AdminPage from "../../../components/Admin/AdminPage"
import AdminPosts from "../../../components/Admin/AdminPosts"

export const getServerSideProps = async ({ req }) => {
    const res = await fetch(`http://${req.headers.host}/api/posts`)
    const data = await res.json()

    return {
        props: {
            posts: data
        }
    }
}

const AdminPostsPage = ({ posts }) => {
    return (
        <AdminPage>
            <AdminPosts posts={posts} />
        </AdminPage>
    )
}

export default AdminPostsPage