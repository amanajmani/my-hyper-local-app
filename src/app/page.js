"use client"

import { useAuth } from "../../AuthContext"
import UserStatus from "@/components/UserStatus"
import Loading from "@/components/Loading"

export default function MyApp() {
  const { user, loading } = useAuth()

  // Show loading component while checking auth status
  if (loading) return <Loading />
  console.log('ssim', user)

  return (
    <div className="flex-1 p-6 min-w-[500px] max-w-[500px]">
      <UserStatus user={user} />
    </div>
  )
}
