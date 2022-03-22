import db from "../../../config/database"
import { collection, getDocs, query, where } from 'firebase/firestore'

export default async function getComments({ body }, res) {
    const commentsCollection = collection(db, 'comments')

    const response = await getDocs((query(commentsCollection, where('post' , '==' , body.id))))

    const comments = []
    response.forEach(comment => {
        comments.push({ id: comment.id, ...comment.data() })
    })

    return res.json(comments)
}