import db from '../../../config/database'
import { collection, getDocs, limit, query } from 'firebase/firestore'

export default async function getPosts(req, res) {
    const postsCollection = query(collection(db, 'posts'), limit(15))
    const data = await getDocs(postsCollection) 
    
    const posts = []
    data.forEach(post => {
        posts.push({ id: post.id, ...post.data() })
    })

    return res.status(200).json(posts)
}