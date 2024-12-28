// components/UserStatus.js

import Link from "next/link"
import SignOut from "@/components/Signout"
import UserFeed from "../app/userFeed/page"

const UserStatus = ({ user }) => {
  return user ? (
    <div className="flex flex-col gap-4 justify-center items-center mt-8">
      <p className="text-xl">Welcome, {user.email}!</p>
      {/* <Link href="/protected" className="text-blue-500 underline text-lg">
        <p>Visit the protected page</p>
      </Link> */}
      <UserFeed />
      <SignOut />
    </div>
  ) : (
    <div className="flex flex-col gap-4 justify-center items-center mt-8">
      <p className="text-xl">You are not signed in.</p>
      <Link href="/login">
        <button className="p-2 rounded-sm bg-blue-500 text-lg font-semibold text-white w-48">
          Login here
        </button>
      </Link>
      <Link href="/signup">
        <button className="p-2 rounded-sm bg-blue-500 text-lg font-semibold text-white w-48">
          Signup here
        </button>
      </Link>
    </div>
  )
}

export default UserStatus
