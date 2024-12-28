"use client"
import withAuth from "@/utils/withAuth"
import AddItem from "@/components/AddItem"
import ListItems from "@/components/ListItems"

const UserFeed = () => {
  return (
    <div className="flex min-h-screen flex-col items-center p-24 gap-4">
      <AddItem />
      <ListItems />
    </div>
  )
}

export default withAuth(UserFeed)
