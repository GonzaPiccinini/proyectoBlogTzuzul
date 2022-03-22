import db from '../../../config/database'
import { addDoc, collection } from 'firebase/firestore'

export default async function createPost({ body }, res) {
    await addDoc(
        collection(db,'posts'),
        body
    )

    return res.json({ message: 'Added' })
}