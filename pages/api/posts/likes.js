import db from '../../../config/database'
import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore'

export default async function likes({ body }, res) {
    const postDoc = doc(db, 'posts', body.postId)

    let rated

    if (body.userRated === '') {
        if (body.option === 'like') {
            await updateDoc(postDoc, {
                like: arrayUnion(body.userId)
            })
            rated = 'like'
        } else if (body.option === 'dislike') {
            await updateDoc(postDoc, {
                dislike: arrayUnion(body.userId)
            })
            rated = 'dislike'
        }
    } else if (body.userRated === 'like') {
        if (body.option === 'like') {
            await updateDoc(postDoc, {
                like: arrayRemove(body.userId)
            })
            rated = ''
        } else if (body.option === 'dislike') {
            await updateDoc(postDoc, {
                like: arrayRemove(body.userId),
                dislike: arrayUnion(body.userId)
            })
            rated = 'dislike'
        } 
    } else if (body.userRated === 'dislike') {
        if (body.option === 'dislike') {
            await updateDoc(postDoc, {
                dislike: arrayRemove(body.userId)
            })
            rated = ''
        } else if (body.option === 'like') {
            await updateDoc(postDoc, {
                dislike: arrayRemove(body.userId),
                like: arrayUnion(body.userId)
            })
            rated = 'like'
        } 
    }


    return res.json({ rated: rated })
}