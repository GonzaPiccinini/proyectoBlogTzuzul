import db from '../../../config/database'
import { doc, deleteDoc } from 'firebase/firestore'

export default async function deletePost({ body }, res) {
    const postDoc = doc(db, 'posts', body.id)
    await deleteDoc(postDoc)

    return res.json({ message: 'Removed' })
}