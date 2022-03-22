import db from "../../../config/database"
import { doc, deleteDoc } from 'firebase/firestore'

export default async function deleteComment({ body }, res) {
    const commentDoc = doc(db, 'comments', body.id)
    await deleteDoc(commentDoc)


    return res.json({ message: 'deleted' })
}