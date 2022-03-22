import db from "../../../config/database"
import { doc, getDoc } from 'firebase/firestore'

export default async function getPostById(req, res) {
    const { id } = req.query
    const response = await getDoc(doc(db, 'posts', id))

    return res.json(response.data())
}