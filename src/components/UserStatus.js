// components/UserStatus.js

import Link from "next/link"
import SignOut from "@/components/Signout"
import UserFeed from "../app/userFeed/page"

const UserStatus = ({ user }) => {
  return user ? (
    <div>
      <UserFeed />
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
