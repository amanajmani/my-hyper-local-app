"use client"
import withAuth from "@/utils/withAuth"
import CreatePost from "@/components/CreatePost"
import Posts from "@/components/Posts"

const UserFeed = () => {
  return (
    <div>
      <CreatePost />
      <Posts />
    </div>
  )
}

export default withAuth(UserFeed)
