"use client"

import { useAuth } from "../../AuthContext"
import UserStatus from "@/components/UserStatus"
import Loading from "@/components/Loading"

export default function MyApp() {
  const { user, loading } = useAuth()

  // Show loading component while checking auth status
  if (loading) return <Loading />

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <UserStatus user={user} />
      </div>
    </main>
  )
}
