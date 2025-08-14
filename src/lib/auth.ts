import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import connectDB from "@/lib/db"
import User from "@/models/User"
import { UserPermission } from "@/types/enums"

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        await connectDB()
        
        if (account?.provider === "google" && user.email) {
          // Check if user already exists
          let existingUser = await User.findOne({ email: user.email })
          
          if (!existingUser) {
            // Create new user
            await User.create({
              email: user.email,
              name: user.name || '',
              image: user.image,
              googleId: account.providerAccountId,
              permissions: [UserPermission.USER], // Default permission for new users
            })
          } else if (!existingUser.googleId) {
            // Update existing user with Google ID if not set
            existingUser.googleId = account.providerAccountId
            await existingUser.save()
          }
        }
        
        return true
      } catch (error) {
        console.error("Error during sign in:", error)
        return false
      }
    },
    async session({ session, token }) {
      if (session.user?.email) {
        try {
          await connectDB()
          const user = await User.findOne({ email: session.user.email })
          
          if (user) {
            // Add user permissions to session
            session.user = {
              ...session.user,
              id: (user._id as string).toString(),
              permissions: user.permissions,
            }
          }
        } catch (error) {
          console.error("Error fetching user data for session:", error)
        }
      }
      
      return session
    },
    async jwt({ token, account, profile }) {
      return token
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
}

