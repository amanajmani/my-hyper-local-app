

// export default function Home() {
//   return (
//     <div className="bg-white h-screen w-screen text-black flex flex-col justify-center items-center">
//       <h1>Welcome to My Next.js App</h1>
//       {/* <AddItem />
//       <ListItems /> */}
//     </div>
//   )
// }

"use client"

import Link from "next/link"
import { useAuth } from "../../AuthContext"
import SignOut from "@/components/Signout"
import AddItem from "../components/AddItem"
import ListItems from "@/components/ListItems"

export default function MyApp() {
  const { user, loading } = useAuth()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl">NextJS Authentication App</h1>
        <div className="flex flex-col gap-4 justify-center items-center mt-8">
          {user ? (
            <>
              <p className="text-xl">Welcome, {user.email}!</p>
              <Link
                href="/protected"
                className="text-blue-500 underline text-lg"
              >
                <p>Visit the protected page</p>
              </Link>
              <SignOut />
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </main>
  )
}