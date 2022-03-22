import db from '../../../config/database'
import { collection, getDocs } from 'firebase/firestore'

export default async function getAllComments(req, res) {
    const commentsCollection = collection(db, 'comments')
    const response = await getDocs(commentsCollection)

    const comments = []
    response.forEach(comment => {
        comments.push({ id: comment.id, ...comment.data() })
    })

    return res.json(comments)
}