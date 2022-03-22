import db from '../../../config/database'
import { collection, getDocs, query, where } from 'firebase/firestore'

export default async function getPostsByCategories(req, res) {
    const { category } = req.query;
    
    let data;
    const postsCollection = collection(db, 'posts')

    if (category) {
        const postsQuery = query(postsCollection, where('category' , '==' , category))
        data = await getDocs(postsQuery)
    } else {
        const postsQuery = query(postsCollection)
        data = await getDocs(postsQuery)
    }

    if (data.empty) {
        return res.status(404).json({ message: 'Posts no encontrados' })
    }

    const posts = [];
    data.forEach(post => {
        posts.push({ id: post.id, ...post.data() })
    })


    return res.status(200).json(posts)
}