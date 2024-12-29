"use client"
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import { useAuth } from "../../AuthContext"
import { signOut } from "firebase/auth"
import { auth } from "../../firebase"

const SignOut = () => {
  const { user } = useAuth()

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      console.log("User signed out")
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  const handleClick = (e) => {
    e.preventDefault() // Prevent default link behavior
    handleSignOut() // Sign out the user
  }

  if (!user) {
    return null // Don't display the sign out button if the user is not logged in
  }

  return (
    // <button
    //   onClick={handleSignOut}
    //   className="p-2 rounded-sm bg-red-500 font-semibold text-white"
    // >
    //   Sign Out
    // </button>

  <a>
  <Inbox />
  <span>ok</span>
</a>
  )
}

export default SignOut
