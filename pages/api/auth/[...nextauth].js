import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from 'next-auth/providers/google'
import db from '../../../config/database'
import { doc, getDoc, setDoc } from 'firebase/firestore'

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/signin'
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account }) {

      if (account?.access_token && account?.providerAccountId) {
        token.accessToken = account.access_token
        token.id = account.providerAccountId

        const userDoc = doc(db, 'users', account.providerAccountId)
        const userData = await getDoc(userDoc)

        if (userData.exists()) {
          const user = userData.data()
          if (user.role) {
            token.role = user.role
          }
        }
        else {
          await setDoc(userDoc, {
            id: account.providerAccountId,
            name: token.name,
            email: token.email,
            picture: token.picture,
            role: 'regular'
          })
        }
      }

      return token
    },
    async session({ session, token, user }) {
      
      if (token?.accessToken && token?.id && token?.role) {
        
        session.user.accessToken = token.accessToken
        session.user.id = token.id
        session.user.role = token.role
        session.user.name = token.name
        session.user.email = token.email
        session.user.image = token.picture
      
      }

      return session
    }
  }
})

