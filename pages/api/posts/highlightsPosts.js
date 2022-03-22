import db from '../../../config/database'
import { collection, getDocs, query, where } from 'firebase/firestore'

export default async function getHighlightsPosts(req, res) {
    
    const postsCollection = collection(db, 'posts')
    const postsQuery = query(postsCollection, where('highlight' , '==' , true))
    const data = await getDocs(postsQuery)

    const posts = [];
    data.forEach(post => {
        posts.push({ id: post.id, ...post.data() })
    })

    return res.status(200).json(posts)
}