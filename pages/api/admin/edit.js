import db from '../../../config/database'
import { updateDoc, doc } from 'firebase/firestore'

export default async function editPost({ body }, res) {
    await updateDoc(
        doc(db,'posts', body.postId),
        body
    )

    return res.json({ message: 'Changes saved' })
}