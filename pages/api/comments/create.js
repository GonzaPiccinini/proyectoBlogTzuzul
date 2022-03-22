import db from '../../../config/database'
import { collection, addDoc } from 'firebase/firestore'

export default async function createComment({ body }, res) {
    const commentCollection = collection(db, 'comments')

    await addDoc(commentCollection, body)

    return res.json({ message: 'Added' })
}